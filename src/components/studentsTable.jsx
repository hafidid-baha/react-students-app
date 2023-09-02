import React from "react";
import Pagintation from "./pagination";
import { useState } from "react";
import _ from "lodash";

function StudentsTable(props){
    
    const [currentPage,setCurrentPage] = useState(1);
    
    const handlePageChange = (page)=>{
        setCurrentPage(page);
    };
    
    const paginate = (items,pageNumber,pageSize)=>{
        const startIndex = (pageNumber-1) * pageSize;
        return _(items).slice(startIndex).take(pageSize).value();
    }
    
    const students = paginate(props.studentsList,currentPage,4);
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>birthDay</th>
                        <th>class</th>
                        <th>country</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.birthday}</td>
                                    <td>{student.classe}</td>
                                    <td>{student.country}</td>
                                    <td>
                                        <button onClick={()=>{props.onDelete(student)}} className="btn btn-sm btn-danger">delete</button>
                                        {/* <button className="btn btn-sm btn-success">update</button> */}
                                    </td>
                                </tr>
                            );
                        })
                    }
                    
                </tbody>
            </table>
            <Pagintation 
            itemCount={props.studentsList.length} 
            pageSize={4} 
            pageChange={handlePageChange}
            currentPage = {currentPage}/>
        </div>
    );
}

export default StudentsTable;