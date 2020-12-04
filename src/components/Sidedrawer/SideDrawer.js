import React from "react";
import classes from "./Sidedrawer.module.css";
import Navigation from "../Header/Navigation/NavigationItems/NavigationItems";
import Backdrop from "./Modal";
import Logo from "../../assets/Mobile_Assets/Logo.png";
const sideDrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open]
    }


    return (
        <>

            <div className={attachedClasses.join(" ")} onClick={props.closed}>
            <div className={classes.Logo}>
                    <img src={Logo} className={classes.logoImg} alt="Logo" />
                </div>
                <nav>
                    <Navigation />
                </nav>
            </div>
            <div className={classes.DesktopOnly}>
               
                <Backdrop show={props.open} clicked={props.setShowSideDrawer} />
            </div>
        </>


    );
}
export default sideDrawer;