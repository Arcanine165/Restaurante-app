import {
    onSnapshot,
    collection,
    addDoc,
    doc,
    deleteDoc,
    setDoc
  } from 'firebase/firestore'

import {db} from './firebase.js'


export const getHorasDisponibles = () => {
    const horas = [];
    console.log(db)
    onSnapshot(collection(db,'horarios'),(snapshot) =>{
        snapshot.docs.forEach(hora => {
            horas.push(hora.data())
        })
    })

    return horas;
}