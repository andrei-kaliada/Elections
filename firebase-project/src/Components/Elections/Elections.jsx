import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mayorImg from '../../assets/images/mayorImg.png';
import imageBuilding from '../../assets/images/imageBulding.jpg';
import cityElectionImage from '../../assets/images/cityElectionImage.png';
import imageRada from '../../assets/images/rada.png';
import { NavLink } from "react-router-dom";
import './Elections.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <>
    <div style={{display:"flex", marginTop:"100px",marginBottom:"100px",justifyContent:"space-around"}}>
<Card className={classes.root} style={{margin:"0 20px 0 20px",}}>
      <CardActionArea className={"wrappImage"}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={cityElectionImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center",fontWeight:"bold",fontSize:"36px"}}>
            City elections
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center",}}>
          Take part in the city elections and fulfill your duty to the state.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="secondary" style={{marginTop:"50px"}}>
        <NavLink class="cardLink" to="/cityElections">See More</NavLink>
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root} style={{margin:"0 20px 0 20px"}}>
      <CardActionArea className={"wrappImage"}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={mayorImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center",fontWeight:"bold",fontSize:"36px"}}>
            Mayor election
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center",}}>
          Take part in the city mayoral elections and fulfill your duty to the state.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="secondary" style={{marginTop:"50px"}}>
        <NavLink class="cardLink" to="/mayorElection">See More</NavLink>
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root} style={{margin:"0 20px 0 20px"}}>
      <CardActionArea className={"wrappImage"}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imageBuilding}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center",fontWeight:"bold", fontSize:"36px"}}>
            President Election
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center",}}>
          Take part in the President elections and fulfill your duty to the state.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="secondary" style={{marginTop:"50px"}}>
          <NavLink class="cardLink" to="/presidentElection">See More</NavLink>
        </Button>
      </CardActions>
    </Card>
    
    </div>
   <div style={{display:"flex",justifyContent:"space-around"}}>
   <Card className={classes.root} style={{margin:"0 20px 0 20px"}}>
      <CardActionArea className={"wrappImage"}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imageRada}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center",fontWeight:"bold", fontSize:"36px"}}>
            Verkhovna Rada election
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center",}}>
          Take part in the Verkhovna Rada elections and fulfill your duty to the state.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="secondary" style={{marginTop:"50px"}}>
        <NavLink class="cardLink" to="/verkhovnaRadaElection">See More</NavLink>
        </Button>
      </CardActions>
    </Card>
   </div>
    </>
  );
}
