import { makeStyles } from '@material-ui/core';
import { AppBar,IconButton,Toolbar,Typography } from '@material-ui/core'
import { Sort } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({

    root:{
        display:'flex',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        height:'13vh',
        
    },
    appbar:{
        background: 'rgba(0,0,0,0.3)',
    },
    icon:{
        color:'#fff',
        fontSize:'2rem',
    },
    appbarTitle:{
        flexGrow:'1',
        fontFamily:'Nunito',
    },
    appbarWrapper:{
        width:"90%",
        margin:'0 auto',
    },
    colorText:{
        color:'#ffff00',
    },
    title:{
        color:'#fff',
        fontFamily:'Nunito',
        fontSize:'4.5rem',
    },
    goDown:{
        color:'#ffff00',
        fontSize:'4rem',
    },

    lessMargin:{
        marginBlockStart: '0.45em',
        marginBlockEnd: '0.45em',
    },

}));

const Header = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root} id="header">
            
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <Typography align='left' className={classes.appbarTitle}><h1 className={classes.lessMargin}>VJTI
                        <span className={classes.colorText}>Meet</span></h1></Typography>
                    <IconButton>
                        <Sort className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;