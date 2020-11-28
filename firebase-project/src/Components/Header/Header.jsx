import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import SignedLinks from './SignedLinks/SignedLinks';
import styled from 'styled-components';
import './Header.css';
import logoImage from '../../assets/images/logo.png'

const HeaderContent = styled.div`

display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 32px;
      height: 32px;
    }

  a{
    color:#000;
    text-decoration:none;
  }
`;

const HeaderContentProfile = styled.div`

  display:flex;

`;

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Header({handleDrawerOpen,user}) {
console.log(user)
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    return (
        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <HeaderContent>
            <div className="header-content__logo">
            <Typography variant="h6" noWrap>
              <Logo>
              <img src={logoImage} alt="logo"/>
            <NavLink to="/">
            
                <p>Country</p>
            </NavLink>
              </Logo>
           
            </Typography>
            </div>
            <HeaderContentProfile>
                <SignedLinks />
                {user && user.map(elem =>( <NavLink to="/profile"><p>{elem.email}</p></NavLink>))}
            </HeaderContentProfile>
            
          </HeaderContent>
          
        </Toolbar>
      </AppBar>
    )
}
