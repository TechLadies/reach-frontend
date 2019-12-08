import React from "react";

const Header = ({children}) => <div className= "header">{children}</div>;
const Top = ({children}) => <div className= "header-top">{children}</div>;
const Bottom = ({children}) => <div className= "header-bottom">{children}</div>;

const Content = ({children}) => <div className= "header-content">{children}</div>;
const Buttons = ({children}) => <div className="header-button">{children}</div>;
const Filters = ({children}) => <div>{children}</div>;

Header.Top = Top;
Header.Bottom = Bottom;
Header.Content = Content;
Header.Buttons = Buttons;
Header.Filters = Filters;

export default Header;
