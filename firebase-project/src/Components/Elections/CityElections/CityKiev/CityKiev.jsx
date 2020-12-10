import React from 'react';
import styled from 'styled-components';
import unnamedImage from '../../../../assets/images/unnamed.png';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import voteImg from '../../../../assets/icons/vote.png'

const WrapperContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
`;

const Container = styled.div`
max-width:300px;
  border:1px solid #e3e3e3;
  margin-top:50px;
  border-radius:10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

`;

const ProfileImage = styled.div`
  height:50%;
  
  display: flex;
  justify-content: center;
  border-bottom:1px solid #e3e3e3;
`;

const ProfileData = styled.div`

`;

const TestContainer = styled.div`
margin-top: 50px;
.card {
  max-width: 340px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(118,118,179,1) 100%);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(59, 20, 159, 0.2);
}

.card[data-state="#about"] {
  height: 450px;
  .card-main {
    padding-top: 0;
  }
}

.card[data-state="#contact"] {
  height: 430px;
}

.card[data-state="#experience"] {
  height: 550px;
}

.card.is-active {
  .card-header {
    height: 80px;
  }

  .card-cover {
    height: 100px;
    top: -50px;
  }

  .card-avatar {
    transform: none;
    left: 20px;
    width: 50px;
    height: 50px;
    bottom: 10px;
  }

  .card-fullname,
  .card-jobtitle {
    left: 86px;
    transform: none;
    
  }

  .card-fullname {
    bottom: 18px;
    font-size: 19px;
  }

  .card-jobtitle {
    bottom: 16px;
    letter-spacing: 1px;

  }
}

.card-header {
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }
}

.card-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
}

.card-avatar {
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
}

.card-jobtitle {
  position: absolute;
  bottom: 0;
  font-size: 11px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-7px);
  font-weight:bold;
    font-size:13px;
}

.card-main {
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
}

.card-subtitle {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 8px;
}

.card-content {
  padding: 20px;
}

.card-desc {
  line-height: 1.6;
  color: #636b6f;
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
}

.card-social {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
  svg {
    fill: rgb(165, 181, 206);
    width: 16px;
    display: block;
    transition: 0.3s;
  }
  a {
    color: #8797a1;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: rgba(93, 133, 193, 0.05);
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      svg {
        fill: darken(rgb(165, 181, 206), 20%);
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}



@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(40px);
  }
  100% {
    opacity: 1;
  }
}

.card-timeline {
  margin-top: 30px;
  position: relative;
  &:after {
    background: linear-gradient(
      to top,
      rgba(134, 214, 243, 0) 0%,
      rgba(81, 106, 204, 1) 100%
    );
    content: "";
    left: 42px;
    width: 2px;
    top: 0;
    height: 100%;
    position: absolute;
    content: "";
  }
}

.card-item {
  position: relative;
  padding-left: 60px;
  padding-right: 20px;
  padding-bottom: 30px;
  z-index: 1;
  &:last-child {
    padding-bottom: 5px;
  }

  &:after {
    content: attr(data-year);
    width: 10px;
    position: absolute;
    top: 0;
    left: 37px;
    width: 8px;
    height: 8px;
    line-height: 0.6;
    border: 2px solid #fff;
    font-size: 11px;
    text-indent: -35px;
    border-radius: 50%;
    color: rgba(#868686, 0.7);
    background: linear-gradient(
      to bottom,
      lighten(#516acc, 20%) 0%,
      #516acc 100%
    );
  }
}

.card-item-title {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}

.card-item-desc {
  font-size: 13px;
  color: #6f6f7b;
  line-height: 1.5;
  font-family: "DM Sans", sans-serif;
}

.card-contact-wrapper {
  margin-top: 20px;
}

.card-contact {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #6f6f7b;
  font-family: "DM Sans", sans-serif;
  line-height: 1.6;
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }

  svg {
    flex-shrink: 0;
    width: 30px;
    min-height: 34px;
    margin-right: 12px;
    transition: 0.3s;
    padding-right: 12px;
    border-right: 1px solid #dfe2ec;
  }
}

.contact-me {
  border: 0;
  outline: none;
  background: linear-gradient(
    to right,
    rgba(83, 200, 239, 0.8) 0%,
    rgba(81, 106, 204, 0.8) 96%
  );
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 12px 16px;
  width: 100%;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  transition: 0.3s;
}

.MuiIconButton-label{
  border: 1px solid white;
    border-radius: 50%;
    padding: 5px;
    background-color: white;

    &:hover{
      border:1px solid #000;
      background-color:#000;
      transition: 0.3s;
    }
}

`;

const WrapperAge = styled.div`
  text-align:center;
  font-size:24px;
`;


const WrapperContent = styled.div`
  p{
    text-align: center;
    font-size: 16px;
    color: #fff;
    text-shadow: 1px 1px #000;
  }
`;

const WrapperBtn = styled.div`
  button{
    display:block;
    margin:0 auto;
  }
`;

const WrapperModal = styled.div`
  position:absolute;
  top: 30%;
  left: 35%;
  z-index: 99;
  width: 400px;
  height: 300px;
 
  border-radius: 20px;
  background: #fff;
`;

const HeaderModal = styled.div`
height: 80px;
background: linear-gradient(90deg,rgba(2,0,36,1) 0%,rgba(0,212,255,1) 0%,rgba(118,118,179,1) 100%);
border-radius: 20px 20px 0 0;
display: flex;
justify-content: space-between;
align-items: center;

img{
  width: 40px;
    margin-right: 10px;
}
`;


const HeaderModalText = styled.div`
margin-left: 20px;
color: #fff;
font-weight: bold;
text-transform: uppercase;
font-size: 24px;

`;


const MainContentModal = styled.div`
height: 150px;
display: flex;
justify-content: center;
align-items: center;
font-size: 28px;
text-align: center;
font-weight: bold;
`;


const ButtonsModal = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

.btnBack{
  background: rgb(2,0,36);
background: linear-gradient(3deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(118,128,179,1) 100%);
border: 0;
    padding: 15px 40px;
    border-radius: 20px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    cursor:pointer;

    &:hover{
      transition:0.3s;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    &:focus { outline: none; }

}

.btnVote{
 
background: rgb(2,0,36);
background: linear-gradient(3deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(118,179,134,1) 100%);
border: 0;
    padding: 15px 40px;
    border-radius: 20px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    cursor:pointer;

    &:hover{
      transition:0.3s;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    &:focus { outline: none; }

}


`;






const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
root: {
  flexGrow: 1,
},
paper: {
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
},
modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const ModalWindow = ({name, handleClose}) => {
    return(
      <WrapperModal>
        <HeaderModal>
          <HeaderModalText>
            Vote
          </HeaderModalText>
          <img src={voteImg} alt="icon"/>
        </HeaderModal>
        <MainContentModal>
    Are you sure want to vote for {name}?
        </MainContentModal>
        <ButtonsModal>
          <button onClick={handleClose} className="btnBack">Back</button>
          <button className="btnVote">Vote</button>
        </ButtonsModal>
      </WrapperModal>
    );
};


export default function CityKiev({cities, votedCity}) {
  const classes = useStyles();
  const [modal, setModal] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');

  const handleOpen = (index) => {
    setOpen(true);
    // ModalWindow(name);
    console.log(cities[index].name);
    setName(cities[index].name);
  };

  const handleClose = () => {
    setOpen(false);
  };
console.log(cities)


  return (
  <div>
     <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalWindow handleClose={handleClose} name={name} />
        </Fade>
      </Modal>
    </div>
    {modal ? <ModalWindow /> : null}
    <h1 style={{textAlign:"center",fontSize:"48px", }}>Kiev</h1>
    <Grid container spacing={1}>
    <Grid container item xs={12} spacing={3}>
        {
          
      cities && cities.map((element, index)=>(
        
        <React.Fragment>
        <Grid item xs={4}>
        <TestContainer>
   <div class="card" data-state="#about">
     <div class="card-header">
       <div class="card-cover" ></div>
       <div>
         <img class="card-avatar" src={element.purl || unnamedImage} alt="avatar" />
       </div>
       <h1 class="card-fullname">{`${element.name}`}</h1>
       <h2 class="card-jobtitle">{element.party}</h2>
     </div>
     <div class="card-main">
     <div class="card-section is-active" id="about">
         <div class="card-content">
            <WrapperAge>
              Age:{element.age}
            </WrapperAge>
            <WrapperContent>
              <p>
                {element.info}
              </p>
            </WrapperContent>
         </div>
         <WrapperBtn>
         {votedCity && votedCity === "no" ? <Button onClick={()=>handleOpen(index)} variant="contained">Vote</Button> : null}
         </WrapperBtn>
         </div>
     </div>
   </div>
   </TestContainer>
        </Grid>
      </React.Fragment>
       ))
     
        }
    </Grid>
    </Grid>
  
</div>
    
  )
}


