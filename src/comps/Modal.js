import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        // If target class contains backdrop then setSelectedImg = null
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

  return (
    <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
        <img src={selectedImg} alt="enlarged pic" />
    </motion.div>
  )

}

export default Modal;