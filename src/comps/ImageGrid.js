import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
    // useFirestore will listen to collection in database and return the docs we have
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="uploaded pic" />
                </div>
                
            ))}
        </div>
    )

}

export default ImageGrid;