import React from "react";
import {useState} from "react";

function StudentsForm(props){    
    return (
        <form onSubmit={(e)=>{props.onSubmit(e)}}>
            <div className="form-group">
            <label className="form-label">student Name</label>
            <input type="text" name="name" value={props.student.name || ""} className="form-control" onChange={(event)=>{props.onChange(event)}} />
            </div>
            <div className="form-group">
            <label className="form-label">student class</label>
            <select className="form-select" value={props.student.classe || ""} onChange={props.onChange} name="classe">
                <option>select Option</option>
                {
                    props.classes.map((c,i)=>{
                        return(
                            <option key={i} value={c}>{c}</option>
                        )
                    })
                }
            </select>
            </div>
            <div className="form-group">
            <label className="form-label">student birthday</label>
            <input type="date" name="birthday" value={props.student.birthday || ""} className="form-control" onChange={(event)=>{props.onChange(event)}}/>
            </div>
            <div className="form-group">
            <label className="form-label">student country</label>
            <input type="text" name="country" value={props.student.country || ""} className="form-control" onChange={(event)=>{props.onChange(event)}}/>
            </div>
            <button className="btn btn-sm btn-primary" type="submit">save</button>
        </form>
    );
}

export default StudentsForm;