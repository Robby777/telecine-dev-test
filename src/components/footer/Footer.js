import React from 'react'
import classes from './Footer.module.css'

function Footer() {

    const d = new Date();
    const year = d.getFullYear();
    return (
        <div className={classes.Footer}>
            <p>© {year} Telecine. All rights reserved.</p>
        </div>
    )
}

export default Footer
