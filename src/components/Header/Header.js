import React from "react";

import NavigationItems from "./Navigation/NavigationItems/NavigationItems";
import Logo from "../../assets/Desktop_Assets/Telecine_Logo.png";
import classes from "./Header.module.css";
import BaconBar from "../Sidedrawer/Drawer/Drawer";
import logoImg from "../../assets/Mobile_Assets/Logo.png";

function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.LogoHeading}>
        <img className={classes.Logo} src={Logo} alt="logo" />
        <h4 className={classes.Heading}>Front End Dev Test</h4>
      </div>
      <div>
        <img src={logoImg} className={classes.mobileLogoImg} alt="Logo" />
      </div>
      <div className={classes.mobileClass}>
        <NavigationItems />
      </div>
      <BaconBar />
    </div>
  );
}

export default Header;
