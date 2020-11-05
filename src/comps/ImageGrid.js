import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
    // useFirestore will listen to collection in database and return the docs we have
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className="img-grid">
            images
        </div>
    )

}

export default ImageGrid;