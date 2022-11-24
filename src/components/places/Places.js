import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    placesContainer:{
        backgroundColor:"#e0e0e0",
        paddingBottom:"5%",
    },
    placesHeader:{
        fontSize:"2.5rem",
        fontFamily: "'Aboreto', cursive",
        fontWeight:"500",
        paddingBottom:"3%",
        [theme.breakpoints.down('xs')]: {
            fontSize:"2rem",
        }
    },
// ===========================================IMAGES==========================================
    placesImageContainer:{
        padding:"3% 0",
    },
    placeImageOne:{
        overflow:"hidden",
        position:"relative",
    },
    placeImageOnes:{
        width:"98%",
        display:"block",
        objectPosition:"center",
        transition:"200ms ease-in-out",
        
    },
    placeImageText:{
        position:"absolute",
        inset:"0",
        background:"rgba(0, 0, 0, 0.4)",
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        width:"98%",
        marginLeft:"1%",
        transition:"250ms ease-in-out",
        opacity:"0",
        '&:hover':{
            opacity:"1",
        }
    },
    placeTextContainer:{
        width:"80%",
        textAlign:"left",
        color:"#fff",
        fontFamily: "'Josefin Slab', serif",
    },
    placeImgHeader:{
        fontSize:"2.2rem",
        fontWeight:"700",
        margin:"2% 0",
        fontFamily: "'Josefin Slab', serif",
        [theme.breakpoints.down('sm')]: {
            fontSize:"1.8rem",
            margin:"1% 0",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"1rem",
            margin:"0.0% 0",
        }
    },
    placeImgPara:{
        fontSize:"1.1rem",
        fontFamily: "'Josefin Slab', serif",
        fontWeight:"600",
        margin:"2% 0",
        [theme.breakpoints.down('sm')]: {
            fontSize:"0.9rem",
            margin:"1% 0",

        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"0.5rem",
            margin:"0.0% 0",
        }
    },
    placeImgBottom:{
        fontSize:"2.2rem",
        margin:"2% 0",
        fontFamily: "'Josefin Slab', serif",
        [theme.breakpoints.down('sm')]: {
            fontSize:"1.8rem",
            margin:"1% 0",

        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"1rem",
            margin:"0.0% 0",
            lineHight:"1"
        }
    },

// ======================================2nd IMAGE==================================================
    placeImageTwo:{
        overflow:"hidden",
        position:"relative",
    },
    placeImgTwo:{
        width:"98%",
        marginBottom:"0.5%",
        objectPosition:"center",
        transition:"250ms ease-in-out",
        textAlign:"left",
        [theme.breakpoints.down('xs')]: {
            marginBottom:"0.1%",
        }

    },
    placeImageTextTwo:{
        position:"absolute",
        inset:"0",
        background:"rgba(0, 0, 0, 0.4)",
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        width:"98%",
        height:"98%",
        marginRight:"2%",
        transition:"200ms ease-in-out",
        opacity:"0",
        '&:hover':{
            opacity:"1",
        }
    },
    placeTextTwoContainer:{
        width:"80%",
        textAlign:"left",
        color:"#fff",
        fontFamily: "'Josefin Slab', serif",
    },
    placeInfo:{
        color:"rgba(0, 0, 0, 0.652)",
        marginLeft:"4px",
        [theme.breakpoints.down('lg')]: {
            display:"none",  
        },
        [theme.breakpoints.down('md')]: {
            display:"none",  
        },
        [theme.breakpoints.down('sm')]: {
            display:"inline-block",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"0.7rem",
        }
    },
    placeInfos:{
        color:"rgba(0, 0, 0, 0.652)",
        marginLeft:"4px",
        [theme.breakpoints.down('md')]: {
            display:"inline-block",
        },
        [theme.breakpoints.down('sm')]: {
            display:"none",  
        },
    }
    


}))

function Places() {
const classes = useStyles();

  return (
    <>
        <Box className={classes.placesContainer}>
            <Grid container justifyContent="space-evenly">
                <Grid item xs={10} md={9} lg={7} align="center">
                    <Typography variant='h2' className={classes.placesHeader} >destinations</Typography>
                    <Typography variant='p' className={classes.placesHeaderPara}>These some of the best destination, You can find near our hotel</Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent='space-evenly' className={classes.placesImageContainer}>
                <Grid item xs={11} md={10} lg={9}>
                    <Grid container justifyContent='space-evenly' className={classes.placeImgContainer}>
{/*=============================1st IMAGE=================================================== */}
                        <Grid item className={classes.placeImgOne} xs={6} align='center'>
                            <Box className={classes.placeImageOne}>
                                 <img src='./Assets/scene.jpg' className={classes.placeImageOnes} alt=''/>
                                 <Box className={classes.placeImageText}>
                                    <Box className={classes.placeTextContainer}>
                                        <Typography variant='h3' className={classes.placeImgHeader}>
                                            Passu Cones
                                        </Typography>
                                        <Typography variant='p' className={classes.placeImgPara}>
                                            While you can use the Emotion-based styling solution provided by MUI to style your application, you can also use the one you already know
                                        </Typography>
                                        <Typography variant='h5'className={classes.placeImgBottom}>
                                            3Km 
                                        </Typography>
                                    </Box>
                                 </Box>
                            </Box>
                        </Grid>
{/* ======================================2nd IMAGE========================================= */}
                        <Grid item className={classes.placeImgTwo} xs={6} align='center'>
                            <Box className={classes.placeImageContainer}>
                                <Box className={classes.placeImageTwo}>
                                    <img className={classes.placeImgTwo} src='./Assets/scene2.jpg' alt=''/>
                                    <Box className={classes.placeImageTextTwo}>
                                        <Box className={classes.placeTextContainer}>
                                            <Typography variant='h3' className={classes.placeImgHeader}>
                                                Passu Cones
                                            </Typography>
                                            <Typography variant='p' className={classes.placeImgPara}>
                                                While you can use the Emotion-based styling solution provided by MUI to style your application, you can also use the one you already
                                            </Typography>
                                            <Typography variant='h5'className={classes.placeImgBottom}>
                                                3Km 
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
{/* =====================================3rd IMAGE========================================== */}
                                <Box className={classes.placeImageTwo}>
                                    <img className={classes.placeImgTwo} src='./Assets/scene3.jpg' alt=''/>
                                    <Box className={classes.placeImageTextTwo}>
                                        <Box className={classes.placeTextContainer}>
                                            <Typography variant='h3' className={classes.placeImgHeader}>
                                                Passu Cones
                                            </Typography>
                                            <Typography variant='p' className={classes.placeImgPara}>
                                                While you can use the Emotion-based styling solution provided by MUI to style your application, you can also use the one you already know
                                            </Typography>
                                            <Typography variant='h5'className={classes.placeImgBottom}>
                                                3Km 
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box className={classes.placeInfo}>
                        <Typography variant='p'>
                            Tap the images to see more <i><b>information</b></i> on the places
                        </Typography>
                    </Box>
                    <Box className={classes.placeInfos}>
                        <Typography variant='p'>
                            Hover over the images to see more <i><b>information</b></i> on the places
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default Places