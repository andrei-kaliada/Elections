import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imageKiev from '../../../assets/images/Kiev.jpg';
import imageWarsaw from '../../../assets/images/warsaw.jpg';
import imageNewYork from '../../../assets/images/newyork.jpg';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


export default function ImgMediaCard({goverments}) {
  const classes = useStyles();
  const [city, setCity] = React.useState(null);

  const cityPhoto = goverments && Object.keys(goverments).map((elem)=>{
    console.log(elem.toString().toLowerCase());
    if(elem.toString().toLowerCase() === "kiev"){
      return imageKiev;
    }
  }) 

  console.log(goverments)
  return (
    <>
    <div style={{display:"flex", marginTop:"100px",marginBottom:"100px",justifyContent:"space-around"}}>

    {
     goverments &&  Object.keys(goverments).map((element)=>{

       return(
        <Card className={classes.root} style={{margin:"0 20px 0 20px",}}>
        <CardActionArea className={"wrappImage"}>
         
         { element.toString().toLowerCase() === 'kiev' ?
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imageKiev} 
          title="Contemplative Reptile"
        /> : null}
        { element.toString().toLowerCase() === 'warsaw' ?
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imageWarsaw} 
          title="Contemplative Reptile"
        /> : null}
        { element.toString().toLowerCase() === 'new york' ?
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imageNewYork} 
          title="Contemplative Reptile"
        /> : null}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center",fontWeight:"bold",fontSize:"36px"}}>
              {element}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center",margin:"0 30px"}}>
            Take part in the city elections in  {element}.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="big" color="secondary" style={{marginTop:"50px"}}>
         {element.toString().toLowerCase() === 'kiev' ? <NavLink class="cardLink" to="/mayorCityKiev">See More</NavLink> : null}
         {element.toString().toLowerCase() === 'warsaw' ? <NavLink class="cardLink" to="/mayorCityWarsaw">See More</NavLink> : null}
         {element.toString().toLowerCase() === 'new york' ? <NavLink class="cardLink" to="/mayorCityNewYork">See More</NavLink> : null}
          </Button>
        </CardActions>
      </Card>
        
       );
     })
    }
    </div>
    </>
  );
}
