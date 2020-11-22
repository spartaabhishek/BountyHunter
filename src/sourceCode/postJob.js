import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
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
  desc: {
    width: "100%",
    fontSize: "large",
  },
  fileupload: {
    backgroundColor: "#DF7332",
    color: "white",
  },
  icon: {
    height: "40px",
    width: "40px",
    backgroundColor: "#DF7332",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function handleSubmit(fields) {
  fetch(`${window.location.origin}/jobs`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export default function SignUp() {
  const [desc, updateDesc] = useState("");
  const [date, updateDate] = useState("");
  const [time, updateTime] = useState("");
  const [reward, updateReward] = useState("");
  const [location, updateLocation] = useState("");

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PostAddOutlinedIcon className={classes.icon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Post a Job
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => handleSubmit({ desc, date, time, reward, location })}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="text"
                label="Description in no more than 1000 words"
                type="text"
                multiline
                rows={4}
                className={classes.desc}
                value={desc}
                onChange={(e) => updateDesc(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                label="Deadline Date"
                type="date"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={date}
                onChange={(e) => updateDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="time"
                label="Deadline Time"
                type="time"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
                value={time}
                onChange={(e) => updateTime(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="reward"
                label="Enter Reward in $"
                type="text"
                id="reward"
                autoComplete=""
                value={reward}
                onChange={(e) => updateReward(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="Location">Location</InputLabel>
                <Select
                  labelId="citybox"
                  id="location"
                  value={location}
                  onChange={(e) => updateLocation(e.target.value)}
                >
                  <MenuItem value={"delhi"}>New Delhi</MenuItem>
                  <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                  <MenuItem value={"chennai"}>Chennai</MenuItem>
                  <MenuItem value={"bangalore"}>Bangalore</MenuItem>
                  <MenuItem value={"kolkata"}>Kolkata</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                className={classes.fileupload}
              >
                Upload Image
                <input type="file" name="image" hidden />
              </Button>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Post
          </Button>
        </form>
      </div>
    </Container>
  );
}
