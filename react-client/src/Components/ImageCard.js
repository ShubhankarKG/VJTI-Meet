import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse, Fade } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.3)',
    margin:'30px',
  },
  media: {
    height: 340,
  },
  title: {
      fontFamily:'Nunito',
      fontWeight:'bold',
      fontSize:'2rem',
      color:'#fff',
  },
  cardText:{
      padding:'5rem',
      paddingTop:'1rem',
      paddingBottom:'1rem',
  }
});

export default function ImageCard({option, checked}) {
  const classes = useStyles();

  return (

    <Fade in={checked} {...(checked ? { timeout: 1000 } : {})}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={option.imgURL}
          title="Join a meet"
        />
        <CardContent className={classes.cardText}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {option.text}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Fade>
  );
}