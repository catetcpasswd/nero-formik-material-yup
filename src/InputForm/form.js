import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Form = props => {
  const {
    values,
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit
  } = props;

  const { name, email, password, confirmPassword } = values;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <form
      onSubmit={() => {
        handleSubmit(values);
      }}
    >
      <TextField
        id="name"
        name="name"
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        label="Name:"
        value={name}
        onChange={change.bind(null, "name")}
        fullWidth
      />
      <TextField
        id="email"
        name="email"
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        label="Email:"
        value={email}
        onChange={change.bind(null, "email")}
        fullWidth
      />
      <TextField
        id="password"
        name="password"
        helperText={touched.password ? errors.password : ""}
        error={touched.password && Boolean(errors.password)}
        label="Password:"
        fullWidth
        value={password}
        onChange={change.bind(null, "password")}
        type="password"
      />
      <TextField
        id="confirmPassword"
        name="confirmPassword"
        helperText={touched.confirmPassword ? errors.confirmPassword : ""}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        label="Confirm Password:"
        fullWidth
        value={confirmPassword}
        onChange={change.bind(null, "confirmPassword")}
        type="password"
      />
      <Button
        type="submit"
        fullWidth
        variant="raised"
        color="primary"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};
