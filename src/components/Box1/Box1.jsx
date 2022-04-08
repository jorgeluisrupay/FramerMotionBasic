import React, {useState} from "react";
import { motion } from "framer-motion";
export const Box1 = () => {
  
    const [isAnimating, setIsAnimate] = useState(false);
        

    return (
      /* spring: animacion que tiene como props, 
      stiffness que es el rebote de la animacion 
      damping es el armortiguador de la animacion
      */
    <>
      <div className="box-container">
        <motion.div className="box"
                    animate={{
                        x: isAnimating ? 700 : 0,
                        opacity: isAnimating ? 1 : 0.5,
                        backgroundColor: isAnimating ? "red" : "blue",
                        // scale: 1
                        rotate: isAnimating ? 360 : 0,
                        // borderRadius: isAnimating ? "50%" : "0%",
                    }}
                    initial={{
                        opacity: 0.1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        // damping: 1,
                        // duration:2,
                    }}
                    onClick={() => setIsAnimate(!isAnimating)}
                    >
        </motion.div>
      </div>
    
    </>
  );
};
