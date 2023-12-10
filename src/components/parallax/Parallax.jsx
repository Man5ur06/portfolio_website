import React from 'react'
import { useRef } from 'react'
import "./Parallax.scss"
import { motion, useScroll, useTransform } from 'framer-motion';


const Parallax = ({type}) => {

    const ref = useRef(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });


    const yText = useTransform(scrollYProgress, [0, 1], ["-500%", "500%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"])

    return (
        <div className='parallax' 
            ref={ref}
            style={{
                background:
                    type==="about"
                        ? "linear-gradient(180deg, #3b6064, #364958)"
                        : "linear-gradient(180deg, #55828b, #364958)",
            }}>
            <motion.h1 style={{y: yText}}>{type==="about" ? "About Me" : "My Works"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" style={{y: yBg, backgroundImage: `url(${type==="about" ? "/planets.png" : "/sun.png"})`}}></motion.div>
            <motion.div style={{x: yBg}} className="stars"></motion.div>
        </div>
    )
}

export default Parallax;