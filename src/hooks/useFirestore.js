import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
          .orderBy('createdAt', 'desc')
          // Real-Time Data Updating, gets snapshot of data and ID
          .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
              documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
          });
          // unsubscribes when we want to use it
          return () => unsub();

    }, [collection])

    return { docs };
}

export default useFirestore;