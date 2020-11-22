import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddBoxIcon from "@material-ui/icons/AddBox";
import eximage from "../svgs/image1.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    marginLeft: "23%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9 56.25
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [jobs, updateJobs] = React.useState([]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetch(`${window.location.origin}/jobs`)
      .then((res) => res.json())
      .then((data) => updateJobs(data));
  });

  return (
    <>
      {jobs.map((x) => (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={x.date}
            subheader={x.time}
          />
          <CardMedia
            className={classes.media}
            image={eximage}
            title={x.reward}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {x.desc}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <AddBoxIcon /> Accept
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon /> Share
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{x.location}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </>
  );
}
