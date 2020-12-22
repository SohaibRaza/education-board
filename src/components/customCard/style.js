import { makeStyles } from "@material-ui/core/styles";


const cardBodyStyles = {
    cardBody: {
        padding: "0.9375rem 20px",
        flex: "1 1 auto",
        WebkitBoxFlex: "1",
        position: "relative"
    },
    cardBodyPlain: {
        paddingLeft: "5px",
        paddingRight: "5px"
    },
    cardBodyProfile: {
        marginTop: "15px"
    }
};

export const useStyles = makeStyles((theme) => ({
    card: {
        border: "0",
        // margin: "16px",
        borderRadius: "6px",
        color: "rgba(0, 0, 0, 0.87)",
        background: 'white',
        width: "100%",
        boxShadow: "0 4px 20px 0 rgb(126 126 126 / 14%), 0 7px 10px -5px rgb(213 213 213 / 40%)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem",
        overflow: 'hidden',
    },
    cardPlain: {
        background: "transparent",
        boxShadow: "none"
    },
    ...cardBodyStyles,
}));
