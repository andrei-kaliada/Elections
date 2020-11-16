import React from "react";
import "./App.css";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Navigation from "./Components//Navigation/Nav";
import FormTest from "./Components/Form/FormTest";
import MainPage from "./Components/MainPage/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { AddUser } from "./redux/actions/addUser";
import classNames from "classnames";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        className={classes.drawer }
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Navigation />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classNames(classes.drawerHeader,"test")} />
        <Switch>
          <Route exact path='/' render={() => (
              <div style={{ display: "flex",justifyContent: "center",alignItems: "center",}}>
                <h1>Main page </h1>
              </div>
            )}
          />
          <Route exact path='/election' render={() => (
              <div style={{ display: "flex",justifyContent: "center",alignItems: "center",}}>
                <h1>Election </h1>
              </div>
            )}
          />
          <Route exact path='/local' render={() => (
              <div style={{ display: "flex",justifyContent: "center",alignItems: "center",}}>
                <h1>Local </h1>
              </div>
            )}
          />
          <Route exact path='/referendum' render={() => (
              <div style={{ display: "flex",justifyContent: "center",alignItems: "center",}}>
                <h1>Referendum </h1>
              </div>
            )}
          />
          <Route exact path='/profile' render={() => (
              <div style={{ display: "flex",justifyContent: "center",alignItems: "center",}}>
                <h1>Profile </h1>
              </div>
            )}
          />
          <Route exact path='/form' render={() => <FormTest />} />
          <Redirect to='/' />
        </Switch>
      </main>
    </div>
  );
}

export default connect(null, { AddUser })(App);
