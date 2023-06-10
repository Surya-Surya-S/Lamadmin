import React from "react";
import "./login.css";
import { Grid, Paper, Avatar, Button, TextField, Typography, Link } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import BackgroundVideo from "../../components/backgroundVideo/BackgroundVideo";

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
    remember: false
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().email("* Please enter a valid email address"),
    password: Yup.string().required("Please enter a password")
  });

  const navigate = useNavigate();

  return (
    <div className="login_bg">
      <BackgroundVideo />
      <Grid className="login">
        <Paper elevation={6} className="paper">
          <Grid align="center" padding="20px">
            <Avatar
              src={process.env.PUBLIC_URL + "/images/login.png"}
              alt="John"
              className="avatar"
            />
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, props) => {
              console.log(values);
              navigate("/");
            }}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Username"
                  name="username"
                  variant="standard"
                  placeholder="Enter Username"
                  className="textfield"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="username" className="error"/>}
                />

                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  variant="standard"
                  placeholder="Enter Password"
                  type="password"
                  className="textfield"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" className="error"/>}
                />

                <Field
                  as={FormControlLabel}
                  name="remember"
                  control={<Checkbox />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={props.isSubmitting}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
          <Typography className="link">
            <Link href="#" underline="none">
              Forget Password?
            </Link>
          </Typography>
          <Typography className="link">
            Do You Have an Account?
            <Link href="#" underline="none">
              Sign up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
