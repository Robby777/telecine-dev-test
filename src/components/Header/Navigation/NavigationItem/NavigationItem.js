import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";
import styled from "styled-components";

const NavigationItems = styled.li`
    width:${props=>props.navType==="graph" ? "179px" : "134.9px"} ;
    @media(max-width:890px){
      width:${props=>props.navType==="graph" ? "160px" : "120.9px"};
    }
    @media(max-width:865px){
      width:${props=>props.navType==="graph" ? "150px" : "110.9px"};
    }
`



const NavigationItem = (props) => (
  <NavigationItems className={classes.NavigationItem}navType={props.navType} >
    <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
  </NavigationItems>
);

export default NavigationItem;
