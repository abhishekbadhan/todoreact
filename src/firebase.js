import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCLuThIUTtDbwK7CEYc6K8A7lPC6GYhlYQ",
        authDomain: "todo-app-cp-805f4.firebaseapp.com",
        databaseURL: "https://todo-app-cp-805f4.firebaseio.com",
        projectId: "todo-app-cp-805f4",
        storageBucket: "todo-app-cp-805f4.appspot.com",
        messagingSenderId: "938253702150",
        appId: "1:938253702150:web:a03c702dc5b1ca2a211f87",
        measurementId: "G-8PE4HG2X48"
})


const db = firebaseApp.firestore()

export default db