import './Hero.scss'
import { motion } from 'framer-motion'


const Hero = () => {

    const TextVariant = {
        initial:{
            x: -500,
            opacity: 0,
        },
        animate:{
            x: 0,
            opacity: 1,
            transition:{
                duration: 1,
                staggerChildren: 0.1,
            }
        },
        scrollButton:{
            y: 10,
            opacity: 0,
            transition:{
                duration:1.5,
                repeat: Infinity,
            },
            
        }
    }

    const sliderVariant = {
        initial:{
            x: 0,
        },
        animate:{
            x: '-220%',
            transition:{
                duration: 20,
                repeat:Infinity,
                repeatType: 'mirror',
            },
        },
    }

    return (
        <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={TextVariant} initial="initial" animate="animate">
                <motion.h2 variants={TextVariant}>MANSUR BIZHANOV</motion.h2>
                <motion.h1 variants={TextVariant}>Web Developer</motion.h1>
                <div className="buttons">
                    <motion.button variants={TextVariant}>See my latest works</motion.button>
                    <motion.button variants={TextVariant}>Contact me</motion.button>
                </div>
                <motion.img src="/scroll.png" alt="" variants={TextVariant} animate="scrollButton"/>
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariant} initial="initial" animate="animate">
            CS Student Heriot-Watt University Class 2027
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.jpg" alt="" />
        </div>
    </div>
    )
}

export default Hero;