import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    serviceContainerImg:{
        background: "url(./Assets/service.jpg) no-repeat scroll center 0/cover",
        backgroundAttachment: "fixed",
        backgroundPosition:"center",
        position: "relative",
        padding:"5% 0",
        isolation:"isolate",
        color:"#fff",
        '&::after': {
            content:`''`,
            position:"absolute",
            zIndex:"-1",
            inset:"0",
            background:"#04091e",
            opacity:"0.8"
        }
    },
    serviceHeader:{
        color:"#fff"
    },
    serviceHeaderTitle:{
        fontSize:"2.5rem",
        fontFamily: "'Aboreto', cursive",
        fontWeight:"500",
        paddingBottom:"3%",
        [theme.breakpoints.down('xs')]: {
            fontSize:"2rem",
        }
    },
    serviceContants:{
        padding:"3% 0"
    },
    serviceContant:{
        border:"1px solid #777",
        borderRadius: "10px",
        backgroundColor: "rgba(249,249,255,.102)",
        padding:"20px 15px",
        transition:"350ms ease-in-out",
        margin:"20px",
        '&:hover':{
            backgroundColor: "rgba(0,0,0,.5)",
            scale:"1.05",
            boxShadow:"0 5px 10px 0 rgba(255,255,255,0.5)",
        }
    },
    serviceContantImg:{
        width:"100%",
        display:"block",
        borderRadius:"7px",
        transition:"350ms ease-in-out",
        '&:hover':{
            scale:"1.08",
        }
    },
    serviceContantTitle:{
        fontFamily: "'Josefin Slab', serif",
        margin:"1.5% 0",
        fontSize:"2.2rem",
        fontWeight:"300"
    },
    serviceContantPara:{
        fontSize:"1.3rem",
        fontWeight:"300",
        fontFamily: "'Josefin Slab', serif",
        margin:"1.5% 0",
    },
    serviceContantInfo:{
        fontSize:"1.3rem",
        fontFamily: "'Josefin Slab', serif",
        color: "darkgray",
        fontWeight:"bolder",
        margin:"1.5% 0",
    },
    serviceInfos:{
        color:"rgba(255, 255, 255, 0.652)",
        marginLeft:"4px",
    },
}))

function Service() {
const classes = useStyles();

  return (
    <>
        <Box className={classes.serviceContainerImg}>
{/* ===============================================TITLE========================================================== */}
            <Grid container justifyContent='space-evenly'>
                <Grid item className={classes.serviceHeader} xs={10} md={9} lg={7} align="center">
                    <Typography variant='h2' className={classes.serviceHeaderTitle}>
                        Our Services
                    </Typography>
                    <Typography variant='p' className={classes.serviceHeaderPara}>
                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                    </Typography>
                </Grid>
            </Grid>
{/* ===============================================CONTANT========================================================== */} 
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={11} md={10} className={classes.serviceContants}>
                    <Grid container justifyContent='space-evenly'>
{/* ===============================================CONTANT 1======================================================== */}
                        <Grid item className={classes.serviceContant} xs={10} sm={5} md={5} lg={3}>
                            <Box className={classes.serviceContantContainer}>
                                <img src='./Assets/restaurant.jpg' alt='' className={classes.serviceContantImg} />
                                <Box className={classes.serviceContantText}>
                                    <Typography variant='h4' className={classes.serviceContantTitle}>
                                        Restaurant
                                    </Typography>
                                    <Typography variant='p' className={classes.serviceContantPara}>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                    </Typography>
                                    <i>
                                        <Typography variant='h6' className={classes.serviceContantInfo}>
                                         24/7 Service Available 
                                        </Typography>
                                    </i>
                                </Box>
                            </Box>
                        </Grid>
{/* ===============================================CONTANT 2======================================================== */}
                        <Grid item className={classes.serviceContant} xs={10} sm={5} md={5} lg={3}>
                            <Box className={classes.serviceContantContainer}>
                                <img src='./Assets/room.jpg' alt='' className={classes.serviceContantImg} />
                                <Box className={classes.serviceContantText}>
                                    <Typography variant='h4' className={classes.serviceContantTitle}>
                                        Room Service
                                    </Typography>
                                    <Typography variant='p' className={classes.serviceContantPara}>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                    </Typography>
                                    <i>
                                        <Typography variant='h6' className={classes.serviceContantInfo}>
                                            Service Available 24/7
                                        </Typography>
                                    </i>
                                </Box>
                            </Box>
                        </Grid>
{/* ===============================================CONTANT 3======================================================== */}
                        <Grid item className={classes.serviceContant} xs={10} sm={5} md={5} lg={3}>
                            <Box className={classes.serviceContantContainer}>
                                <img src='./Assets/cafe.jpg' alt='' className={classes.serviceContantImg} />
                                <Box className={classes.serviceContantText}>
                                    <Typography variant='h4' className={classes.serviceContantTitle}>
                                        Cafe
                                    </Typography>
                                    <Typography variant='p' className={classes.serviceContantPara}>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                    </Typography>
                                    <i>
                                        <Typography variant='h6' className={classes.serviceContantInfo}>
                                            Service Available 24/7
                                        </Typography>
                                    </i>
                                </Box>
                            </Box>
                        </Grid>
{/* =================================================CONTANT 4========================================================== */}
                        <Grid item className={classes.serviceContant} xs={10} sm={5} md={5} lg={3}>
                            <Box className={classes.serviceContantContainer}>
                                <img src='./Assets/tour.jpg' alt='' className={classes.serviceContantImg} />
                                <Box className={classes.serviceContantText}>
                                    <Typography variant='h4' className={classes.serviceContantTitle}>
                                        Tour Guide
                                    </Typography>
                                    <Typography variant='p' className={classes.serviceContantPara}>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                    </Typography>
                                    <i>
                                        <Typography variant='h6' className={classes.serviceContantInfo}>
                                            Service Available 24/7
                                        </Typography>
                                    </i>
                                </Box>
                            </Box>
                        </Grid>
{/* ======================================================CONTACT 5==================================================== */}
                        <Grid item className={classes.serviceContant} xs={10} sm={5} md={5} lg={3}>
                            <Box className={classes.serviceContantContainer}>
                                <img src='./Assets/rent car.jpg' alt='' className={classes.serviceContantImg} />
                                <Box className={classes.serviceContantText}>
                                    <Typography variant='h4' className={classes.serviceContantTitle}>
                                        Rent A Car
                                    </Typography>
                                    <Typography variant='p' className={classes.serviceContantPara}>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                    </Typography>
                                    <i>
                                        <Typography variant='h6' className={classes.serviceContantInfo}>
                                            Service Available 24/7
                                        </Typography>
                                    </i>
                                </Box>
                            </Box>
                        </Grid>
{/* ========================================================CONTACT 6================================================= */}
                        <Grid item className={classes.serviceContant} xs={10} sm={5} md={5} lg={3}>
                            <Box className={classes.serviceContantContainer}>
                                <img src='./Assets/launder.jpg' alt='' className={classes.serviceContantImg} />
                                <Box className={classes.serviceContantText}>
                                    <Typography variant='h4' className={classes.serviceContantTitle}>
                                        Launder
                                    </Typography>
                                    <Typography variant='p' className={classes.serviceContantPara}>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                    </Typography>
                                    <i>
                                        <Typography variant='h6' className={classes.serviceContantInfo}>
                                            Service Available 24/7
                                        </Typography>
                                    </i>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                        <Box className={classes.serviceInfos}>
                            <Typography variant='p'>
                                For more <i><b>information</b></i> contact us on <i><b>+92 1234567</b></i>
                            </Typography>
                        </Box>
                </Grid>
            </Grid>          
        </Box>
    </>
  )
}

export default Service