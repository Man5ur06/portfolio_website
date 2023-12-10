import React from 'react'
import { motion } from 'framer-motion';


const ToggleButton = ({setOpen}) => {
  return (
    <motion.button onClick={() => setOpen((prev) => !prev)} initial={{scale:0,}} animate={{scale:1,}} transition={{duration:0.5,}}>
        <svg width="23" height="23" viewBox='0 0 23 23'>
          <motion.path strokeWidth="3" stroke='black' strokeLinecap='round' variants={{closed: {d: "M 2 2.5 L 20 2.5"}, open: {d: "M 3 16.5 L 17 2.5"}}}/>
          <motion.path strokeWidth="3" stroke='black' strokeLinecap='round' d="M 2 9.5 L 20 9.5" variants={{closed:{opacity:1}, open:{opacity:0}}}/>
          <motion.path strokeWidth="3" stroke='black' strokeLinecap='round' variants={{closed: {d: "M 2 16.5 L 20 16.5"}, open: {d: "M 3 2.5 L 17 16.5"}}}/>
        </svg>
    </motion.button>
  )
}

export default ToggleButton;    