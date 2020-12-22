import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components

// core components
import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

// styles
import { useStyles } from './style';

import routes from "../constants/routes.js";


let ps;

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
        if (prop.layout === "/admin") {
            return (
            <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
            />
            );
        }
        return null;
        })}
        <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
);

const Admin = ({...rest}) => {
    // styles
    const classes = useStyles();
    // ref to help us initialize PerfectScrollbar on windows devices
    const mainPanel = React.createRef();
    // states and functions
    // const [image, setImage] = React.useState(bgImage);
    const [color, setColor] = React.useState("blue");
    const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const resizeFunction = () => {
        if (window.innerWidth >= 960) {
            setMobileOpen(false);
        }
    };
    console.log("PROPS: > > > ", {...rest});
    const handleFixedClick = () => {
        if (fixedClasses === "dropdown") {
            setFixedClasses("dropdown show");
        } else {
            setFixedClasses("dropdown");
        }
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    React.useEffect(() => {
        // if (navigator.platform.indexOf("Win") > -1) {
        //     ps = new PerfectScrollbar(mainPanel.current, {
        //         suppressScrollX: true,
        //         suppressScrollY: false
        //     });
        //     document.body.style.overflow = "hidden";
        // }
        // window.addEventListener("resize", resizeFunction);
        // // Specify how to clean up after this effect:
        // return function cleanup() {
        //     if (navigator.platform.indexOf("Win") > -1) {
        //         ps.destroy();
        //     }
        //     window.removeEventListener("resize", resizeFunction);
        // };
    }, [mainPanel]);

    return (
        <div>
            <Sidebar
                routes = { routes }
                logoText = { "Index." }
                handleDrawerToggle = { handleDrawerToggle }
                open = { mobileOpen }
                color = { color }
                { ...rest }
            />
            <div className={ classes.mainPanel } ref={ mainPanel }>
                <Navbar
                    routes={ routes }
                    handleDrawerToggle={ handleDrawerToggle }
                    { ...rest }
                />
                <div className={ classes.content }>
                    <div className={ classes.container }>{ switchRoutes }</div>
                </div>
            </div>
        </div>
    );
};

export default Admin;