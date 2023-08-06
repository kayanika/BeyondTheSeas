import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup(){

  const items=['disa','era','nabil']
  const handleclick=(event:MouseEvent)=>console.log(event)
    return(
     <Fragment>
        
        <h1>List</h1>
        {items.length==0 && <p>No item Found</p>}
         <ul className="list-group">
        {items.map((item)=> (        
        <li 
            className="list-group-item" 
            key={item}  
            onClick={handleclick}
            >
              {item}
              </li>
      ))}      
       </ul>
    </Fragment>
);
}  

export default ListGroup;