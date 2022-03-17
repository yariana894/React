import {db} from './firebase.js'
import {collection, limit, orderBy, query} from 'firebase/firestore'

const getAllTecnologias = collection(db, 'tecnologias');

const getTecnologiasOrderByDate = query(
    collection(db, 'tecnologias'),
    orderBy('createdAt', 'desc'),
    limit(100)
)

export {getAllTecnologias, getTecnologiasOrderByDate}