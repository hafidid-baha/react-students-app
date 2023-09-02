import React from "react";
import StudentsForm from './../components/StudentsForm';
import StudentsTable from './../components/studentsTable';
import { useState,useEffect } from "react";
import fakeStudents from "../services/fakeStudents";

function Students(props){
    const [studentsList,setStudentsList] = useState([]);
    const [student,setStudent] = useState({
        "name":"",
        "classe":"",
        "birthday":"",
        "country":"",
    });

    useEffect(()=>{
        setStudentsList(fakeStudents);
    },[])
    const handleSubmit = (e)=>{
        e.preventDefault();
        setStudentsList([...studentsList,student]);
        setStudent({"name":"","classe":"","birthday":"","country":""});
        // console.log('submit');
    };

    const handleChange = (e)=>{
        // console.log(e.currentTarget.name,e.currentTarget.value);
        setStudent({...student,[e.currentTarget.name]:e.currentTarget.value});
        // student[e.currentTarget.name] = e.currentTarget.value;
        // setStudentsList([...studentsList,student]);
        
    };

    const handleDelete = (student)=>{
        const ns = studentsList.filter((s)=>{
            return s.name !== student.name;
        });
        setStudentsList(ns);
    };

    return (
        <div className="row mt-4">
            <div className="col-6">
            <StudentsForm classes={props.classes} student={student} onSubmit={handleSubmit} onChange={handleChange}/>
            </div>
            <div className="col-6">
            <StudentsTable studentsList={studentsList} onDelete={handleDelete}/>
            </div>
        </div>
    );
}

export default Students;