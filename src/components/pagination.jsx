import React from "react";
import _ from "lodash";

function Pagintation(props){
    const pageCount = Math.ceil(props.itemCount/props.pageSize);
    if(pageCount==1) return null;
    const pages =_.range(1,pageCount+1);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page)=>{
                    return (
                        <li key={page} className={page === props.currentPage?"page-item active": "page-item"} style={{cursor:'pointer'}}>
                            <a onClick={()=>props.pageChange(page)}  className="page-link">{page}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Pagintation;