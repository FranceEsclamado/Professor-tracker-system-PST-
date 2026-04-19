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

export {
    createPost
};