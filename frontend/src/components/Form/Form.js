import React, { useState, useEffect} from 'react';
import { TextField, Paper, Typography, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux';
import { createPost, updatePost, likePost } from '../../actions/posts.js';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        name: '', url: '', caption: ''
    })
    const post = useSelector((state) => currentId? state.posts.find((p) => p._id === currentId):null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const CHARACTER_LIMIT = 50;

    useEffect(() => {
        if(post) setPostData(post);
    },[post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        }
        else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            name: '', url: '', caption: ''
        })
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} required={true}>
                <Typography variant="h6">{currentId ? 'Edit': 'Create'} a meme</Typography>
                <TextField
                    name="name"
                    variant="outlined"
                    label="Meme Owner"
                    placeholder="Enter your name"
                    fullWidth
                    required = {true}
                    value={postData.name}
                    onChange={(e) => setPostData({ ...postData, name: e.target.value })}
                />
                <TextField
                    name="caption"
                    variant="outlined"
                    label="Caption"
                    inputProps={{
                        maxlength: CHARACTER_LIMIT
                      }}
                    placeholder="Enter a catchy caption"
                    fullWidth
                    required = {true}
                    value={postData.caption}
                    onChange={(e) => setPostData({ ...postData, caption: e.target.value })}
                />
                <TextField
                    name="url"
                    variant="outlined"
                    label="Meme URL"
                    placeholder="Enter your meme URL here"
                    required = {true}
                    fullWidth
                    value={postData.url}
                    onChange={(e) => setPostData({ ...postData, url: e.target.value })}
                />
                {/*<TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type = "file"
                        multiple = {false}
                        onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64})}
                    />
                </div>*/}
                <Button className={classes.buttton} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                &nbsp;
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form;