import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.maincontainer}>
<ul className={styles.container}>
    <li >
 <Link to="/" className={styles.home}>Home</Link>
</li>
<li>
 <Link to="/contact" className={styles.home}>Contact</Link>
</li>
<li>
 <Link to="/task" className={styles.home}>Task</Link>
</li>

</ul>


    </div>
  )
}

export default Navbar