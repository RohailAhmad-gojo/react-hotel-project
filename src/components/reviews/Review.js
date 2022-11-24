import { Grid, Typography, makeStyles, Box, Button, Link } from '@material-ui/core'
import FormatQuoteOutlinedIcon from '@material-ui/icons/FormatQuoteOutlined';
import React from 'react'

const useStyles = makeStyles((theme)=>({
    reviewContainer:{
        backgroundColor:"#e0e0e0",
        padding:"5% 0",
    },
    reviewHeader:{
        fontSize:"2.5rem",
        fontFamily: "'Aboreto', cursive",
        fontWeight:"500",
        [theme.breakpoints.down('xs')]: {
            fontSize:"2rem",
        }
    },
    reviewProfileContainer:{
        padding:"3% 0"
    },
    reviewProfiles:{
        margin:"2% 0",
    },
    reviewProfile:{
        display:"flex",
    },
    reviewProfileImg:{
        width:"120px",
        borderRadius:"50%"
    },
    reviewProfileInfo:{
        marginLeft:"10px",
        marginTop:"6px"
    },
    reviewProfileInfoName:{
        fontSize:"1.3rem",
        fontWeight:"500",
    },
    reviewProfileInfoText:{
        fontSize: "1.5rem",
        fontWeight: "600",
        fontFamily: "'Josefin Slab', serif",
        '&:hover': {
            fontWeight: "800",
            transition: "all 0.3s"
         },
    },
    reviewPara:{
        marginTop:"30px"
    },
    reviewParaIconTop:{
        fontSize:"2.5rem",
        color:"#8f8f8f",
        transform: "rotate(180deg)"
    },
    reviewParaIconBottom:{
        fontSize:"2.5rem",
        color:"#8f8f8f",
    },
    revivewParaText:{
        fontSize: "1.3rem",
        fontWeight: "600",
        fontFamily: "'Josefin Slab', serif",
        '&:hover': {
            fontWeight: "800",
            transition: "all 0.3s"
         },
         [theme.breakpoints.down('sm')]: {
            fontSize:"1.1rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"0.9rem",
        }
    },
    reviewCheckText:{
        color:"rgba(0, 0, 0, 0.652)",
        [theme.breakpoints.down('sm')]: {
            fontSize:"0.8rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"0.7rem",
        }
    },
    reviewCheckLink:{
        textDecoration: 'none'
    },
    reviewCheckBtn:{
        '&:hover': {
            color:"#595857",
         },
    },
}))

function Review() {
const classes = useStyles();
  return (
    <>
      <Box className={classes.reviewContainer}>

            <Grid container justifyContent="space-evenly">
                <Grid item xs={10} md={9} lg={7} align="center">
                <Typography variant='h2' className={classes.reviewHeader} >REVIEWS</Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent="space-evenly" className={classes.reviewProfileContainer}>
                <Grid item xs={11} md={10} lg={9}>

                    <Grid container justifyContent='space-evenly' className={classes.reviewProfiles}>
                        <Grid item className={classes.reviewProfile} xs={11} sm={5} md={4}>
                            <Box>
                            <img src="./Assets/person.jpg" alt='' className={classes.reviewProfileImg}/>
                            </Box>
                            <Box className={classes.reviewProfileInfo}>
                                <Typography variant="h5" className={classes.reviewProfileInfoName}>Ron Mcthy</Typography>
                                <Typography variant="h6" className={classes.reviewProfileInfoText}>Customer</Typography>
                            </Box>
                        </Grid>
                        <Grid item  className={classes.reviewPara} xs={11} md={9} lg={8}>
                            <FormatQuoteOutlinedIcon className={classes.reviewParaIconTop}/><br/>
                            <Typography variant='p' className={classes.revivewParaText}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the
                            </Typography>
                            <br/>
                            <FormatQuoteOutlinedIcon className={classes.reviewParaIconBottom}/>
                        </Grid>
                    </Grid>
                   {/* =================================2nd=========================================== */}
                    <Grid container justifyContent='space-evenly' className={classes.reviewProfiles}>
                        <Grid item className={classes.reviewProfile} xs={11} sm={5} md={4}>
                            <Box>
                            <img src="./Assets/person2.jpg" alt='' className={classes.reviewProfileImg}/>
                            </Box>
                            <Box className={classes.reviewProfileInfo}>
                                <Typography variant="h5" className={classes.reviewProfileInfoName}>Susan Murphy</Typography>
                                <Typography variant="h6" className={classes.reviewProfileInfoText}>Designers</Typography>
                            </Box>
                        </Grid>
                        <Grid item  className={classes.reviewPara} xs={11} md={9} lg={8}>
                            <FormatQuoteOutlinedIcon className={classes.reviewParaIconTop}/><br/>
                            <Typography variant='p' className={classes.revivewParaText}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                            </Typography>
                            <br/>
                            <FormatQuoteOutlinedIcon className={classes.reviewParaIconBottom}/>
                        </Grid>
                    </Grid>
                    <Box className={classes.reviewCheck}>
                        <Typography variant='p' className={classes.reviewCheckText}>These review are taken for the <i><b>Google Review</b></i> page of our hotel, If you want to check or leave us a review please
                        <Link className={classes.reviewCheckLink}><Button className={classes.reviewCheckBtn}>Click Here</Button></Link>.</Typography>
                    </Box>
                </Grid>
            </Grid>

      </Box>  
    </>
  )
}

export default Review