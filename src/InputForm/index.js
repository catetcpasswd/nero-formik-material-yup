import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  },
  container: {
    maxWidth: "200px"
  }
});

const yupSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("email is required"),
  password: Yup.string("")
    .min(8, "password must contain at least 8 characters")
    .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    const values = {
      name: "randy",
      email: "r@ly.com",
      password: "",
      confirmPassword: ""
    };

    const handleSubmit = values => {
      alert("Handle" + JSON.stringify(values, null, 2));
    };

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Form</h1>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={yupSchema}
              onSubmit={handleSubmit}
            />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);
