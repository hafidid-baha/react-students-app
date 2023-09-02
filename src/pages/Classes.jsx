import React, { useEffect } from "react";
import ClassesForm from "../components/ClassesForm";
import ClassesTable from "../components/ClassesTable";
import { useState } from "react";

function Classes(props){
    const [name,setName] = useState("");
    const [action, setAction] = useState('save');
    const [oldName,setOldName] = useState("");
    const {classes} = props;

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(action);
        
        if(name.trim() === ''){
            return;
        }
        if(action == 'save'){
            const newClasses = [name,...classes];
            props.setClasses(newClasses);
        }else{
            const newC = [];
            classes.forEach((cl)=>{
                if(cl === oldName){
                    newC.push(name);
                }else{
                    newC.push(cl);
                }
            });
            props.setClasses(newC);
        }
        // console.log(classes);
    };

    const handleDelete = (c)=>{
        const nc = classes.filter((cl)=>{
            return cl !== c; 
        });
        props.setClasses(nc);
    }

    const handleChange = (e)=>{
        setName(e.currentTarget.value);
    };

    const handleUpdate = (c)=>{
        setName(c);
        setAction('update');
        setOldName(c);
        
    }

    useEffect(()=>{
        if(name === ''){
            setAction('save');
        }
    },[name])

    return (
        <div className="row mt-4">
            <div className="col-6">
            <ClassesForm onSubmit={handleSubmit} name={name} classes={props.classes} onChange={handleChange}/>
            </div>
            <div className="col-6">
            <ClassesTable classes={props.classes} onDelete={handleDelete} onUpdate={handleUpdate}/>
            </div>
        </div>
    );
}

export default Classes;