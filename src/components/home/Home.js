import { Box, Grid, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme)=>({
    homeContainer:{
        backgroundImage: `url(${process.env.PUBLIC_URL+"./Assets/background.jpg"})`,
        width:"100%",
        height:"100vh",
        backgroundSize:"100% 100%",
    },
    homeOverlay:{
      backgroundColor: "rgba(11, 65, 130, 0.232)",
        width:"100%",
        height:"100%"
    },
    homeText:{
        display:"flex",
        alignItems:"center",
    },
    homePara:{
        fontSize:'4rem',
        fontWeight:'600',
        color:'#fff',
        fontFamily: "'Aboreto', cursive",
        [theme.breakpoints.down('sm')]: {
            fontSize:"3rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"2.2rem",
        }
    },
    homeParas:{
        fontSize:'2.8rem',
        fontWeight:'700',
        color:'#fff',
        fontFamily: "'Aboreto', cursive",
        marginBottom:"15px",
        [theme.breakpoints.down('sm')]: {
            fontSize:"2.3rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"1.5rem",
        }
    },
    homeTextPara:{
        display:"block",
        marginBottom:"15px",
        fontSize:"1.2rem",
        color:"#fff",
        [theme.breakpoints.down('sm')]: {
            fontSize:"1rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"0.8rem",
        }
    },
    homeBtn:{
        display:"flex",
        alignItems:"center",
        padding:"7px 25px",
        border:"1px solid #fff",
        backgroundColor:"#fff",
        fontSize:"1rem",
        fontFamily: "'Aboreto', cursive",
        '&:hover':{
            border:"1px solid #fff",
            color:"#fff", 
         }
    }
}))

function Home() {
const classes = useStyles();

  return (
    <>
        <Box className={classes.homeContainer}>
            <Grid container className={classes.homeOverlay} justifyContent="space-evenly">
                <Grid item lg={7} md={10} xs={11} className={classes.homeText}>
                    <Box align="center">
                        <Typography variant='h2' className={classes.homePara}>WELCOME TO OUR</Typography>
                        <Typography variant='h2'className={classes.homeParas}>HUNZA HOTEL RESORT</Typography>
                        <Typography variant='p' className={classes.homeTextPara}>You are short moments away from establishing cutting-edge pages for hotels, motels, villas, resorts, bed and breakfasts, and even hostels.</Typography>
                        <Button className={classes.homeBtn} align="center">BOOK HERE</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default Home