import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async(req, res) => {
    //res.send("THIS WORKS");
    try {
        const limit = 100;
        var postMessages = await (await PostMessage.find()).reverse().slice(0, 100);
        //postMessages = postMessages.slice(0, limit);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async(req, res) => {
    //console.log("Post creation");
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async(req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('No post with that id');
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost); 
}

export const likePost = async(req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likesCount: post.likesCount + 1}, {new: true});
    res.json(updatedPost); 
}

