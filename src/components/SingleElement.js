import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '10px',
    maxWidth: "auto",
  },
  wide: {
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  xs: {
      marginRight: "30px"
  },
  uppercase: {
      textTransform: "capitalize",
      fontSize: "20px"
  },
  subText: {
    padding: "20px 50px !important"
  },
  like: {
    marginTop: "-20px",
    marginLeft: "30px",
    fontSize: "12px"
  },
  likeButton: {
    marginTop: "-20px",
    float: "right"
  }
}));

export default function SingleElement(props) {
  const classes = useStyles();
  const blog = props.blog

  return (
    <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} className={classes.wide}>
            <ButtonBase className={classes.image}>
                <img className={classes.img} src={blog.imgs.large} />
            </ButtonBase>
        </Grid>
        <Grid item xs={9} className={classes.subText}>
          <strong className={classes.uppercase}>{blog.title}</strong><br/><br/>
          {blog.description} {blog.description} {blog.description} {blog.description} {blog.description} {blog.description} {blog.description}
          {blog.description} {blog.description} {blog.description}
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>Advertisement</Paper>
        </Grid>
        <Grid item xs={9}className={classes.subText}>
          <div>
            <FavoriteIcon /> 
            <div className={classes.like}>{blog.likes || 0} Likes</div>
          </div>
          <div  className={classes.likeButton}>
            <Button variant="contained" onClick={() => props.updateLikes(props.ind)} className="button-color">
                <FavoriteIcon /> &nbsp; Like
            </Button>
          </div>
        </Grid>
    </Grid>
  )
}
