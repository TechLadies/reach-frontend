import React from "react";
import "./index.css";

const Header = ({children}) => <div className= "header">{children}</div>;
const Top = ({children}) => <div className= "header-top">{children}</div>;

const Content = ({children}) => <div className= "header-content">{children}</div>;
const Buttons = ({children}) => <div className="header-buttons">{children}</div>;
const Filters = ({children}) => <div className= "header-filters">{children}</div>;

Header.Top = Top;
Header.Content = Content;
Header.Buttons = Buttons;
Header.Filters = Filters;

export default Header;
