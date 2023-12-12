import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring } from 'framer-motion';


const items = [
    {
        id: 1,
        title: "Project 1",
        img:"",
        desc:"",
    },
    {
        id: 2,
        title: "Project 2",
        img:"",
        desc:"",
    },
    {
        id: 3,
        title: "Project 3",
        img:"",
        desc:"",
    },
    {
        id: 4,
        title: "Project 4",
        img:"",
        desc:"",
    },
];

const Sections = ({item}) =>{
    return (
        <section>
            {item.title}
        </section>
    )
}

const Portfolio = () => {
    
    const ref = useRef();

    const {scrollYProgress} = useScroll({target: ref, offset: ["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress" >
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progress-bar" ></motion.div>
            </div>
            {items.map(item => (
                <Sections item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio;
