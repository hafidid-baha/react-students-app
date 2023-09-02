import React from "react";

function ClassesForm(props){
    return (
        <form onSubmit={(e)=>{props.onSubmit(e)}}>
            <div className="form-group">
            <label className="form-label">classe Name</label>
            <input type="text" value={props.name} name="name"  className="form-control" onChange={(e)=>{props.onChange(e)}}  />
            </div>
            
            <button className="btn btn-sm btn-primary" type="submit">save</button>
        </form>
    );
}

export default ClassesForm;