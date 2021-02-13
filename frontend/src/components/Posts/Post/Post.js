import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import useStyles from './styles.js';

import { likePost } from '../../../actions/posts';

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
          <div className={classes.overlay}>
          </div>
          <div className={classes.overlay2}>
            <Button style={{color: 'grey'}} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
          </div>
          
          <CardContent>
            <Typography variant="h6">{post.name}</Typography>
            <Typography color="textSecondary" variant="body2">{moment(post.createdAt).calendar()}</Typography>

          </CardContent>
          <Typography color="textPrimary" className={classes.caption} gutterBottom variant="h6" component="h4">{post.caption}</Typography>
          <CardMedia className={classes.media} image={post.url || 'https://pbs.twimg.com/profile_images/3070594429/0ab6d6b7523813ad9799f51b7eac538b.png'} title={post.title} />
          <CardActions className={classes.cardActions}>
            <Button size="small" color = "primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> &nbsp; LIKE &nbsp; {post.likesCount} </Button>
          </CardActions>
        </Card>
    );
}

export default Post;