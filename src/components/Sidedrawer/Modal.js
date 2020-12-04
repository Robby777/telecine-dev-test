import React from "react";
import classes from "./Backdrop.module.css";
const Backdrop = (props)=> { 


    return (props.show ? <div className={classes.Backdrop} onClick={()=>props.clicked(false)}></div> : null);
}
export default Backdrop;