import {app} from './firebase.js'
import {collection} from 'firebase/firestore'

const db = app.firestore();

const getAllFrutas = collection(db, 'frutas');

export {getAllFrutas}