import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react'

const useStyles = makeStyles((theme)=>({
    aboutContainer:{
        backgroundColor:"#e0e0e0",
        padding:"5% 0",
    },
    aboutHeaderTitle:{
        fontSize:"2.5rem",
        fontFamily: "'Aboreto', cursive",
        fontWeight:"500",
        paddingBottom:"3%",
        [theme.breakpoints.down('xs')]: {
            fontSize:"2rem",
        }
    },
    aboutContantContainer:{
        padding:"3% 0",
    },
    aboutContantImage:{
        overflow:"hidden",
    },
    aboutContantImages:{
        width:"95%",
        position:"relative",

    },
    aboutContantImg:{
        width:"100%",
        display:"block",
        objectPosition:"center",
        transition:"200ms ease-in-out",
        boxShadow:"3px -7px 8px 1px rgb(0 0 0 / 50%)",
    },
    aboutContantPara:{
        position:"absolute",
        inset:"0",
        background:"rgba(4, 10, 31, 0.7)",
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        transition:"350ms ease-in-out",
        color:"#fff",
        transform: "translateX(0%);",
        '&:hover':{
            transform: "translateX(-110%);",
        }
    },
    aboutContantParaContainer:{
        width:"90%"
    },
    aboutContantParaHead:{
        fontSize:"2.2rem",
        fontWeight:"500",
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
    aboutContantParaText:{
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
    aboutContantParaBottom:{
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
    aboutParaText:{
        fontSize: "1.1rem",
        fontWeight: "400",
        lineHeight: "1.1",
        letterSpacing: "-1.1px",
        display:"inline-block",
        color:"#575656"
    },
    aboutParaHeading:{
        fontFamily: "'Aboreto', cursive",
        margin:"7px 0",
        fontSize:"2rem",
    },
    aboutLinks:{
        padding:"3% 0",
        display:"flex",
        flexWrap:"wrap"
    },
    aboutLink:{
        textAlign:"center",
        width:"50%",
        margin:"3% 0"
    },
    aboutLinkIcon:{
        fontSize:"4rem",
        color:"#e0e0e0",
        padding:"10px",
        borderRadius:"50%",
        transition:"350ms ease-in-out",
        backgroundColor:"#7c807d",
        '&:hover':{
            backgroundColor:"#11852e",
            scale:"0.8",
        }

    },
    aboutLinkHeading:{
        fontSize:"1.8rem",
        margin:"1% 0",
        fontWeight:"600",
        fontFamily: "'Josefin Slab', serif",
        transition:"350ms ease-in-out",
        '&:hover':{
            color:"#11852e",
            scale:"0.8",
        }
    },
    aboutLinkBottom:{
        fontSize:"1.2rem",
        fontFamily: "'Josefin Slab', serif",
        transition:"350ms ease-in-out",
        '&:hover':{
            color:"#11852e",
            scale:"0.8",
        }
    }
}))

function About() {
const classes = useStyles();

  return (
    <>
        <Box className={classes.aboutContainer}>
{/* =======================================HEADER=============================================== */}
            <Grid container justifyContent='space-evenly'>
                <Grid item className={classes.aboutHeader} xs={10} md={9} lg={7} align="center">
                    <Typography variant='h2' className={classes.aboutHeaderTitle}>
                        About Us
                    </Typography>
                </Grid>
            </Grid>
{/* ========================================CONTANT============================================= */}
            <Grid container className={classes.aboutContantContainer} justifyContent="space-evenly">
                <Grid item xs={11} md={10} lg={9}>
{/* ========================================IMAGE CONTANT============================================= */}
                    <Grid container justifyContent='space-evenly' className={classes.aboutContant}>
                        <Grid item className={classes.aboutContantImage} xs={5}>
                            <Link target="_blank" href='https://www.google.com/maps/place/Passu/@36.4635858,74.8886598,15z/data=!3m1!4b1!4m5!3m4!1s0x38e8add0b821407d:0xb7983ac6bb15f778!8m2!3d36.4603638!4d74.8944855'>
                                <Box className={classes.aboutContantImages}>
                                    <img src='./Assets/about2.png' alt='' className={classes.aboutContantImg}/>
                                    <Box className={classes.aboutContantPara}>
                                        <Box className={classes.aboutContantParaContainer}>
                                            <Typography variant='h4'className={classes.aboutContantParaHead} >
                                                Location
                                            </Typography>
                                            <Typography variant='p' className={classes.aboutContantParaText}>
                                                To capture a screenshot on a Windows laptop or desktop computer, press the Print Screen keyboard key (usually abbreviated to Prt Scn or similar). If you only want to grab a screenshot of the active window, press the Alt and Print Screen keys together.
                                            </Typography>
                                            <Typography variant='h5' className={classes.aboutContantParaBottom}>
                                                134km from gilgit
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link>
                        </Grid>
{/* ============================================TEXT CONTANT========================================================= */}
                        <Grid item xs={11} md={7} lg={6}>
                            <Box>
                                <Typography variant='h4' className={classes.aboutParaHeading}>
                                    About Hotel
                                </Typography>
                                <Typography variant='p' className={classes.aboutParaText}>
                                    Mauris rhoncus, urna id commodo molestie, dui ex porta odio, eget gravida felis nibh vel dolor. Praesent sollicitudin elementum nunc, quis bibendum urna placerat vel. Fusce condimentum velit arcu, at cursus leo vulputate ac. Cras finibus vestibulum tortor, maximus pharetra nibh placerat non. Donec egestas libero a posuere condimentum. Quisque molestie pel
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4' className={classes.aboutParaHeading}>
                                    Food
                                </Typography>
                                <Typography variant='p' className={classes.aboutParaText}>
                                    Mauris rhoncus, urna id commodo molestie, dui ex porta odio,molestie, dui ex porta odio,molestie, dui ex porta odio, eget gravida felis nibh vel dolor. Praesent sollicitudin elementum nunc, quis bibendum urna placerat vel. Fusce condimentum velit arcu, at cursus leo vulputate ac. Cras finibus vestibulum tortor, maximus pharetra nibh placerat non. Donec egestas libero a posuere condimentum. Quisque
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4' className={classes.aboutParaHeading}>
                                    Culture
                                </Typography>
                                <Typography variant='p' className={classes.aboutParaText}>
                                    Mauris rhoncus, urna id commodo molestie, dui ex porta odio,molestie, dui ex porta odio,molestie, dui ex porta odio, eget gravida felis nibh vel dolor. Praesent sollicitudin elementum nunc, quis bibendum urna placerat vel. Fusce condimentum velit arcu, at cursus leo vulputate ac. Cras finibus vestibulum tortor, maximus pharetra nibh placerat non. Donec egestas libero a posuere condimentum.
                                </Typography>
                            </Box>
{/* =====================================ABOUT CONTANT LINKS=========================================================== */}
                            <Box className={classes.aboutLinks}>
                                <Box className={classes.aboutLink}>
                                    <FacebookIcon className={classes.aboutLinkIcon} />
                                    <Typography variant='h5' className={classes.aboutLinkHeading}>Facebook</Typography>
                                    <Typography variant='h6' className={classes.aboutLinkBottom}>hunza hotel</Typography>
                                </Box>
                                <Box className={classes.aboutLink}>
                                    <InstagramIcon className={classes.aboutLinkIcon} />
                                    <Typography variant='h5' className={classes.aboutLinkHeading}>Instagram</Typography>
                                    <Typography variant='h6' className={classes.aboutLinkBottom}>@hunza hotel</Typography>
                                </Box>
                                <Box className={classes.aboutLink}>
                                    <PhoneAndroidIcon className={classes.aboutLinkIcon} />
                                    <Typography variant='h5' className={classes.aboutLinkHeading}>Call Us</Typography>
                                    <Typography variant='h6' className={classes.aboutLinkBottom}>+92 123456789</Typography>
                                </Box>
                                <Box className={classes.aboutLink}>
                                    <WhatsAppIcon className={classes.aboutLinkIcon} />
                                    <Typography variant='h5' className={classes.aboutLinkHeading}>WhatsApp</Typography>
                                    <Typography variant='h6' className={classes.aboutLinkBottom}>+92 123456789</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default About