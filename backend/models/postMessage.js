import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    /*title: String,
    message: String,
    creator: String*/
    /*tags: [String],
    selectedFile: String,*/
    name: String,
    url: String,
    caption: String,
    likesCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;