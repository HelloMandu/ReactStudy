import React from "react";
import { ButtonBase, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#999999",
    fontColor: "#ffffff",
    width: "100%",
    height: "48px",
    marginTop: "32px",
    marginBottom: "32px",
    borderRadius: "10px",
  },
});

const Button = ({ children, onClick }) => {
  const classes = useStyles();
  return <ButtonBase className={classes.root} onClick={onClick}>{children}</ButtonBase>;
};

export default Button;
