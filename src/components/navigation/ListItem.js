import React from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

// Motion
import { transition, slideUp } from "../../animation/header";

const ListItem = ({to, name}) => {
  return (
    <>
      <motion.li 
        initial={{x: 0}}
        whileHover={{
          x: 20,
          transition: {
            duration: 0.4,
            ease: [0.6, 0.05, -0.01, 0.9]
          }
        }}
      >
        <Link 
          to={to}
          className="nav__link" 
        >
        {/* Link text */}
          <motion.div 
            variants={slideUp} 
            transition={{...transition, duration: 1.25}} 
            className="nav__link__title"
          >
            {name}
          </motion.div>
          {/* Link arrow */}
          <span className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1.5rem" width="1.5rem">
              <path 
              fill="#36363b"
              fillRule="nonzero"
              d="M3,5v14c0,1.104,0.896,2,2,2h14c1.104,0,2-0.896,2-2V5c0-1.104-0.896-2-2-2H5C3.896,3,3,3.896,3,5z M7,11h5V7l5,5l-5,5v-4 H7V11z"></path>
            </svg>
          </span>
        </Link>
      </motion.li> 
    </>
  )
}

export default ListItem
