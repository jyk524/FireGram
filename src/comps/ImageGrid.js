import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    // useFirestore will listen to collection in database and return the docs we have
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                // one of these divs will be made for each image
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    // When Image is hovered increases opacity to 1 using Framer-Motion
                    whileHover={{ opacity: 1}}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
                
            ))}
        </div>
    )

}

export default ImageGrid;