import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '10px',
    maxWidth: "auto",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  desc: {
      marginRight: "100px"
  },
  uppercase: {
      textTransform: "capitalize"
  }
}));

export default function Element(props) {
  const classes = useStyles();
  const blog = props.blog

  return (
    <Paper className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                    <Typography variant="body3" gutterBottom>
                        {new Date(blog.published_date).toString()} <strong className={classes.uppercase}>{blog.category}</strong>
                        <br/><br/>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong className={classes.uppercase}>{blog.title}</strong>
                        <br/>
                    </Typography>
                    <Typography gutterBottom variant="body2"className={classes.desc}>
                        {blog.description}
                        <br/><br/>
                    </Typography>
                    <Typography variant="body3" gutterBottom>
                        By : <strong>{blog.author}</strong> 
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={blog.imgs.thumb} />
                    </ButtonBase>
                </Grid>
            </Grid>
        </Grid> 
    </Paper>
  );
}
