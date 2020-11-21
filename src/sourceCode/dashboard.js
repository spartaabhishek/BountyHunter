import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ChatIcon from "@material-ui/icons/Chat";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Postjob from "./postJob";
import PersonIcon from "@material-ui/icons/Person";
import Hunt from "./hunt";
import Chat from "../chat/chatMaster";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    color: "secondary",
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="#DF7332"
          textColor="primary"
          aria-label="tabs"
          className={classes.tabs}
        >
          <Tab label="Hunt" icon={<BusinessCenterIcon />} {...a11yProps(0)} />
          <Tab
            label="Post a Job"
            icon={<AssignmentTurnedInIcon />}
            {...a11yProps(1)}
          />
          <Tab label="History" icon={<ShoppingBasket />} {...a11yProps(2)} />
          <Tab label="Add Money" icon={<LocalAtmIcon />} {...a11yProps(3)} />
          <Tab label="Chat" icon={<ChatIcon />} {...a11yProps(4)} />
          <Tab label="Profile" icon={<PersonIcon />} {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel style={{ justifyContent: "center" }} value={value} index={0}>
        <Hunt></Hunt>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Postjob />
      </TabPanel>
      <TabPanel value={value} index={2}>
        History
      </TabPanel>
      <TabPanel value={value} index={3}>
        Add Money
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Chat />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Profile
      </TabPanel>
    </div>
  );
}
