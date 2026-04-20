import { Post } from "../models/post.model.js";

//create tag post lods

const createPost = async (req, res) => {
    try {
        const { name, description} = req.body;

        if (!name || !description){
            return res.status(400).json({
                message: "all fields needs to be filled"
            });
        }   
        const post = await Post.create({name, description});
            res.status(201).json({
                message: "Post created done",
                post
            });
    } catch (error) {
        res.status(500).json({
            message: "SERVER ERROR"
        });
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
          res.status(500).json({
            message: "SERVER ERROR"
        });
    }
}

const updatePost = async (req, res) => {
    try {
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({
                message: "No data provided"
            });
        }

        const post = await Post.findByIdAndUpdate(req.params.id, req.body,{new: true});

        if(!post){
            return res.status(404).json({
            message: "post not found"
            });
        } 

        res.status(200).json({
            message: "post updated successful", post
        });
    } catch (error){ 
        res.status(500).json({
            message: "SERVER ERROR"
        });
    }
}

const deletePost = async (req, res) => {
    try {
        const deleted = await Post.findByIdAndDelete(req.params.id);
        if (!deleted){
            return res.status(400).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post deleted succesfull"
        });
    } catch (error) {
         res.status(500).json({
            message: "SERVER ERROR"
        });
    }
}
export {
    createPost,
    getPosts,
    updatePost,
    deletePost
};