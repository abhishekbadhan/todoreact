import React , {useState, useEffect} from 'react';
import { Button,FormControl,InputLabel,FormHelperText,Input} from '@material-ui/core';
import './App.css';
import Todo from './todo'
import db from './firebase'
import firebase from 'firebase'


function App() {
    const [todos , setTodos] = useState([])
    const [input1, setInput] = useState()
    console.log('this is todos',todos)
    // ADDING FUNCTION
    const fun = event =>{
    event.preventDefault();

    // ADDING INTO THE DATABASE
    db.collection('hare').add({
      krishna:input1,
      timestamp :firebase.firestore.FieldValue.serverTimestamp()
    })


    // setTodos([...todos, input1 /* OR  document.getElementById('great1').value*/])
    setInput('')
    }


    // STARTING THE DATABASE
    useEffect(() =>{
      db.collection('hare').orderBy('timestamp','desc').onSnapshot(snap =>{
        setTodos(snap.docs.map(doc => ({id:doc.id, comment:doc.data().krishna})))
      })
    },[])



    return (
      <div className = "App" >    
            <h1 >  👑 👑 ADD YOUR MESSAGE HERE :  👑 👑</h1> 
            <FormControl>
              <InputLabel >Item</InputLabel>
              <Input value={input1} id={'great1'} onChange={val => setInput(val.target.value)} />
              <FormHelperText >We'll never share your message.</FormHelperText>
              <Button type="submit" variant="contained" onClick={fun}  disabled={!input1} color="secondary">
                ENTER
              </Button>
            </FormControl>
           {todos.map(tds => <Todo key={tds.id} items={tds} />)}
        </div>
    );
}

export default App;