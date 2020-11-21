import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "20px",
    padding: "60px",
    boxShadow: "-1px 4px 20px -6px rgba(0, 0, 0, 0.75)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#DF7332",
    height: "70px",
    width: "70px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    backgroundColor: "#DF7332",
  },
  
}));

export default function SignUp() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Money
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>


          <Grid item xs={12}>
              <Typography component="h2" variant="h5">
                Current balance
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="reward"
                label="Enter amount"
                type="text"
                id="reward"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Pay
          </Button>
        </form>
      </div>
    </Container>
  );
}
