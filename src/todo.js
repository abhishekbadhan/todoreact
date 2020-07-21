import React from 'react'
import './todo.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';

function Todo(props) {
    console.log('THIS IS PROPS',props)

    const deleting =items_id =>{
        db.collection('hare').doc(items_id).delete()
    }
    return (
        <div class="comment" >
            <div class="comment1">🧑{props.items.comment}✔️✔️</div>
            <div class="comment2" onClick={() => deleting(props.items.id)} > <DeleteForeverIcon ></DeleteForeverIcon></div>
        </div>
    )
}

export default Todo
