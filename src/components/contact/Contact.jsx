import "./contact.scss"
import { motion } from "framer-motion"   

const variants = {
    initial:{
        y: 300,
        opacity: 0,
    },
    animate:{
        y: 0,
        opacity: 1,
        transitions:{
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const Contact = () => {
    return(
        <motion.div className="contact"  variants={variants} initial="initial" animate="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>LinkedIn</h2>
                    <span>@Mansur Bizhanov</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Telegram</h2>
                    <span>@Afeadeka</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Email</h2>
                    <span>mansur.bizhanov@gmail.com</span>
                </motion.div>
            </motion.div>
            <div className="formContainer"> 
                <form>
                    <input type="text" required placeholder="Name"/>
                    <input type="email" required placeholder="email"/>
                    <textarea name="" rows="10" placeholder="Message"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact