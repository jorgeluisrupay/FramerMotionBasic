import React from "react";
import { motion } from "framer-motion";
export const Box3 = () => {


    const boxVariant = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.5,
            }
        }
    }
       
    const listVariants = {
        hidden: {
            x: -1000,
            opacity: 0,
        },
        visible: {
            x: 20,
            opacity: 1,
        }
    }

    return (
      /* 
      */
    <>
      <div className="box-container">
        <motion.div className="box"
                    variants={boxVariant}
                    animate="visible"
                    initial="hidden"
                    >
                        {[1,2,3].map(box=> {
                            return (<motion.li key={box} 
                                               className="box-item"
                                               variants={listVariants}
                                            //    animate="visible"
                                            //    initial="hidden"
                                               ></motion.li>)
                        })}

        </motion.div>
      </div>
    
    </>
  );
};