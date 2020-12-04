import React from "react";

import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

function Navigation(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem className={classes.NewsGallery} link="/" exact>
        News Gallery
      </NavigationItem>
      <NavigationItem className={classes.Chart} navType="graph" link="/graph">Chart</NavigationItem>
    </ul>
  );
}

export default Navigation;
