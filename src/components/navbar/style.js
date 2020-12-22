
import { makeStyles } from "@material-ui/core/styles";

import {
    container,
    defaultFont,
    primaryColor,
    defaultBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    whiteColor,
    grayColor
} from "../../assets/jss/common";


export const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "white",
        boxShadow: "",
        borderBottom: "0",
        marginBottom: "0",
        position: "absolute",
        width: "100%",
        paddingTop: "10px",
        zIndex: "1029",
        color: grayColor[7],
        border: "0",
        borderRadius: "3px",
        padding: "10px 0",
        transition: "all 150ms ease 0s",
        minHeight: "50px",
        display: "block"
    },
    container: {
        ...container,
        minHeight: "50px"
    },
    flex: {
        flex: 1
    },
    title: {
        ...defaultFont,
        letterSpacing: "unset",
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        color: "inherit",
        margin: "0",
        "&:hover,&:focus": {
            background: "transparent"
        }
    },
    appResponsive: {
        top: "8px"
    },
    primary: {
        backgroundColor: primaryColor[0],
        color: whiteColor,
        ...defaultBoxShadow
    },
    info: {
        backgroundColor: infoColor[0],
        color: whiteColor,
        ...defaultBoxShadow
    },
    success: {
        backgroundColor: successColor[0],
        color: whiteColor,
        ...defaultBoxShadow
    },
    warning: {
        backgroundColor: warningColor[0],
        color: whiteColor,
        ...defaultBoxShadow
    },
    danger: {
        backgroundColor: dangerColor[0],
        color: whiteColor,
        ...defaultBoxShadow
    },
    // NavbarLinks Styles
    linkText: {
        zIndex: "4",
        ...defaultFont,
        fontSize: "14px",
        margin: "0px"
    },
    buttonLink: {
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            margin: "10px 15px 0",
            width: "-webkit-fill-available",
            "& svg": {
                width: "24px",
                height: "30px",
                marginRight: "15px",
                marginLeft: "-15px"
            },
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "24px",
                lineHeight: "30px",
                width: "24px",
                height: "30px",
                marginRight: "15px",
                marginLeft: "-15px"
            },
            "& > span": {
                justifyContent: "flex-start",
                width: "100%"
            }
        }
    },
    searchButton: {
        [theme.breakpoints.down("sm")]: {
            top: "-50px !important",
            marginRight: "22px",
            float: "right"
        }
    },
    margin: {
        zIndex: "4",
        margin: "0"
    },
    searchIcon: {
        width: "17px",
        zIndex: "4"
    },
    notifications: {
        zIndex: "4",
        [theme.breakpoints.up("md")]: {
            position: "absolute",
            top: "2px",
            border: "1px solid " + whiteColor,
            right: "4px",
            fontSize: "9px",
            background: dangerColor[0],
            color: whiteColor,
            minWidth: "16px",
            height: "16px",
            borderRadius: "10px",
            textAlign: "center",
            lineHeight: "16px",
            verticalAlign: "middle",
            display: "block"
        },
        [theme.breakpoints.down("sm")]: {
            ...defaultFont,
            fontSize: "14px",
            marginRight: "8px"
        }
    },
    manager: {
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
        display: "inline-block"
    },
    searchWrapper: {
        [theme.breakpoints.down("sm")]: {
            width: "-webkit-fill-available",
            margin: "10px 15px 0"
        },
        display: "inline-block"
    }
}));