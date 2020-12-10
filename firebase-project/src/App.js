import React,{ useEffect } from "react";
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
import NavContainer from "./Components//Navigation/NavContainer";
import FormTest from "./Components/Form/FormTest";
import MainPage from "./Components/MainPageContainer/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { AddUser } from "./redux/actions/addUser";
import { setCurrentUser } from "./redux/reducers/authReducer";
import ElectionsContainer from './Components/Elections/ElectionsContent';
import CityKievContainer from './Components/Elections/CityElections/CityKiev/CityKievContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import CityElectionsContainer from './Components/Elections/CityElections/CityElectionsContainer';
import EmailUs from './Components/Email/EmailUs';
import Feedback from './Components/Feedback/Feedback';
import classNames from "classnames";
import firebase from 'firebase';

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
  const [pending,setPending] = React.useState(true);

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      
      //  props.setCurrentUser(user.providerData)
      firebase.database().ref('Users').on('value',(snap)=>{
        
        const userEmail = user.providerData[0].email;
        const dataUsers = snap.val();
        Object.keys(dataUsers).map( (el) => dataUsers[el].email.toLowerCase() === userEmail ? props.setCurrentUser([dataUsers[el]]) : null);
      });
       setPending(false);
      } else {
        console.log("No user!")
      }
    });
  }, [props.isAuth])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // if(pending == true){
  //   return <Redirect to={'/'} />
  // }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderContainer handleDrawerOpen={handleDrawerOpen} />
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
        <NavContainer />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classNames(classes.drawerHeader,"test")} />
        <Switch>
          <Route exact path='/' render={() => (<MainPage />)}
          />
          <Route  path='/election' render={() => (<ElectionsContainer />)}/>
          <Route  path='/cityElections' render={() => (<CityElectionsContainer />)}
          />
          <Route  path='/cityKiev' render={() => (<CityKievContainer />)}
          />
          <Route  path='/profile' render={() => (<ProfileContainer />)}
          />
          <Route path='/feedback' render={() => (<Feedback />)} />
          <Route path='/emailUs' render={() => (<EmailUs />)} />
          <Route path='/form' render={() => <FormTest />} />
          <Route path='/page404' render={() => (
            <div style={{height:"500px",marginTop:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <h1 style={{fontSize:"48px", color:"#fff",textShadow:"2px 2px #000"}}>Sorry, page not founded!!!</h1>
            </div>
          )} />
          <Redirect to='/page404'/>
        </Switch>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    isAuth:state.auth.isAuth
  }
}

export default connect(mapStateToProps, { AddUser, setCurrentUser })(App);
