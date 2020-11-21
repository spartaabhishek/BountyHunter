import React,{useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../svgs/signupbcg.svg";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormControl from "@material-ui/core/FormControl";
import { createMuiTheme } from "@material-ui/core/styles";
import { green, grey, red } from "@material-ui/core/colors";
import AuthContext from "./AuthContext";
import Auth from "./firebase";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Bounty Hunter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${image1})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#DF7332",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#DF7332",
  },
}));

 function handleSubmit(e,fields,updateToken){
  e.preventDefault()
  Auth.signInWithEmailAndPassword(fields.email, fields.password).then(user => {
    return user.getIdToken().then(idToken => {
      fetch(`${window.location.origin}/sessionLogin`,{
        method: "POST",
        body: idToken
      }).then(res=>res.json()).then(data=>{
        if(data.status==="success"){
          updateToken(idToken)
        }
      })
    });
  }).catch((e) => {
    window.location.assign('/signin');
  });
}

export default function SignIpSide() {
  const classes = useStyles();
  const [uid,updateUid] = useState("");
  const [password,updatePassword] = useState("");

  return (
    <AuthContext.Consumer>
    {(token,updateToken)=>(
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate onSubmit={(e)=>handleSubmit(e,{uid,password},updateToken)}>
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              onChange={(e)=>updateUid(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e)=>updatePassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="#953C25"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    )}
    </AuthContext.Consumer>
  );
}
