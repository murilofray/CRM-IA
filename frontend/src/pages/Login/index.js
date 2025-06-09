import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Link,
  Card,
  CardContent,
  Paper,
} from '@material-ui/core';

import { 
  LockOutlined, 
  Visibility, 
  VisibilityOff,
  BusinessCenter,
  TrendingUp
} from '@material-ui/icons';

import { makeStyles } from "@material-ui/core/styles";

import { i18n } from "../../translate/i18n";
import { AuthContext } from "../../context/Auth/AuthContext";

// const Copyright = () => {
// 	return (
// 		<Typography variant="body2" color="textSecondary" align="center">
// 			{"Copyleft "}
// 			<Link color="inherit" href="https://github.com/canove">
// 				Canove
// 			</Link>{" "}
// 			{new Date().getFullYear()}
// 			{"."}
// 		</Typography>
// 	);
// };

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "relative",
    overflow: "hidden",
  },
  backgroundPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px)
    `,
    backgroundSize: "60px 60px",
    backgroundPosition: "0 0, 30px 30px",
  },
  leftSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    color: "white",
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  rightSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      flex: "none",
      width: "100%",
    },
  },
  brandContainer: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  brandIcon: {
    fontSize: "4rem",
    marginBottom: theme.spacing(2),
    background: "linear-gradient(45deg, #f093fb 0%, #f5f7fa 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  brandTitle: {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    background: "linear-gradient(45deg, #ffffff 0%, #f5f7fa 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  brandSubtitle: {
    fontSize: "1.2rem",
    opacity: 0.9,
    fontWeight: 300,
  },
  featuresList: {
    marginTop: theme.spacing(6),
    "& li": {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(2),
      fontSize: "1.1rem",
      "& svg": {
        marginRight: theme.spacing(2),
        color: "#f093fb",
      },
    },
  },
  loginCard: {
    width: "100%",
    maxWidth: 450,
    borderRadius: 24,
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 25px rgba(0, 0, 0, 0.08)",
    backdropFilter: "blur(20px)",
    background: "rgba(255, 255, 255, 0.95)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  loginContent: {
    padding: theme.spacing(6),
  },
  welcomeText: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  welcomeTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  welcomeSubtitle: {
    color: theme.palette.text.secondary,
    fontSize: "1rem",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(3),
    "& .MuiOutlinedInput-root": {
      borderRadius: 12,
      backgroundColor: "rgba(248, 250, 252, 0.8)",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(248, 250, 252, 1)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
        },
      },
      "&.Mui-focused": {
        backgroundColor: "rgba(248, 250, 252, 1)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
          borderWidth: 2,
        },
      },
    },
    "& .MuiInputLabel-outlined": {
      fontWeight: 500,
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    height: 48,
    borderRadius: 12,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
    fontSize: "1rem",
    fontWeight: 600,
    "&:hover": {
      background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
      boxShadow: "0 12px 30px rgba(102, 126, 234, 0.4)",
      transform: "translateY(-2px)",
    },
    transition: "all 0.3s ease",
  },
  registerLink: {
    textAlign: "center",
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      fontWeight: 600,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  mobileTitle: {
    display: "none",
    textAlign: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  mobileBrandTitle: {
    fontSize: "2.5rem",
    fontWeight: 700,
    background: "linear-gradient(45deg, #ffffff 0%, #f5f7fa 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: theme.spacing(1),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.backgroundPattern} />
      
      {/* Left Side - Branding */}
      <div className={classes.leftSide}>
        <div className={classes.brandContainer}>
          <BusinessCenter className={classes.brandIcon} />
          <Typography variant="h1" className={classes.brandTitle}>
            AzimuteCRM
          </Typography>
          <Typography variant="h6" className={classes.brandSubtitle}>
            Customer Relationship Management Platform
          </Typography>
        </div>
        
        <ul className={classes.featuresList}>
          <li>
            <TrendingUp />
            Advanced Analytics & Reporting
          </li>
          <li>
            <BusinessCenter />
            Complete Customer Management
          </li>
          <li>
            <LockOutlined />
            Enterprise-Grade Security
          </li>
        </ul>
      </div>

      {/* Right Side - Login Form */}
      <div className={classes.rightSide}>
        <Card className={classes.loginCard}>
          <CardContent className={classes.loginContent}>
            {/* Mobile Title */}
            <div className={classes.mobileTitle}>
              <BusinessCenter style={{ fontSize: "3rem", color: "#667eea", marginBottom: "16px" }} />
              <Typography variant="h2" className={classes.mobileBrandTitle}>
                AzimuteCRM
              </Typography>
            </div>

            <div className={classes.welcomeText}>
              <Typography variant="h4" className={classes.welcomeTitle}>
                Welcome Back
              </Typography>
              <Typography variant="body1" className={classes.welcomeSubtitle}>
                Sign in to access your dashboard
              </Typography>
            </div>

            <form className={classes.form} noValidate onSubmit={handlSubmit}>
              <TextField
                className={classes.textField}
                variant="outlined"
                required
                fullWidth
                id="email"
                label={i18n.t("login.form.email")}
                name="email"
                value={user.email}
                onChange={handleChangeInput}
                autoComplete="email"
                autoFocus
              />
              
              <TextField
                className={classes.textField}
                variant="outlined"
                required
                fullWidth
                name="password"
                label={i18n.t("login.form.password")}
                id="password"
                value={user.password}
                onChange={handleChangeInput}
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((e) => !e)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submitButton}
                size="large"
              >
                {i18n.t("login.buttons.submit")}
              </Button>

              <div className={classes.registerLink}>
                <Typography variant="body2">
                  Don't have an account?{" "}
                  <Link component={RouterLink} to="/signup">
                    {i18n.t("login.buttons.register")}
                  </Link>
                </Typography>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
