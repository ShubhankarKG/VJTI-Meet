import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, Fade, makeStyles } from "@material-ui/core";
import Header from './Header';
import ImageCard from './ImageCard';

const useStyles=makeStyles((theme)=>({
    root:{
        backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/0/0e/VJTI_College_Quadrangle.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:"100%",
        paddingBottom:"9%",
    },
    cards:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
    }
}));


const Homepage = () => {

    const classes= useStyles();
    const [checked,setChecked]=useState(false);
    useEffect(()=>{
        setChecked(true);
    },[]);

    return(
        <div className={classes.root} id="root" >
            <CssBaseline/>
            <Header/>

            <Container className={classes.cards}>

                <Fade in={checked} {...(checked ? { timeout: 1000 } : {})}>
                <span id="card1">
                    <ImageCard option={{imgURL:"https://miro.medium.com/max/3780/0*IBkxoMr1WRMKoahI.jpg", text:"Host a Meet!"}} checked={checked} />
                </span>
                </Fade>

                <Fade in={checked} {...(checked ? { timeout: 1000 } : {})}>
                <span id="card2">
                    <ImageCard option={{imgURL:"https://www.evolutyz.com/wp-content/uploads/2014/02/group-discussion.jpg", text:"Join a Meet!"}} checked={checked} />
                </span>
                </Fade>

            </Container>

        </div>
    )
}

export default Homepage;