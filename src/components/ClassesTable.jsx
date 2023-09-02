import React from "react";

function ClassesTable(props){
    const  {classes}  = props;
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>classe name</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    classes.map((c,index) => {
                        return (
                        <tr key={index}>
                            <td>{c}</td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(c)}}>delete</button>
                                <button className="btn btn-sm btn-success" onClick={()=>{props.onUpdate(c)}}>update</button>
                            </td>
                        </tr>)
                    })
                }
                
            </tbody>
        </table>
    );
}
export default ClassesTable;