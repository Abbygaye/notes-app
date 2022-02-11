import React from 'react';

const Note = (props) => {   
    const toggleRemove = (e) => {
        var item = document.getElementById(e.target.id);
        item.classList.toggle("strike");
    }

    return (
        <ul>
            {props.tasks.map((task, key) => (
                <li key={key} id={key} onClick={toggleRemove} className="task-item">{task}</li>
            ))}
        </ul>                
    );
}
 
export default Note;