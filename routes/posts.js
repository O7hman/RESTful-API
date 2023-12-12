const express = require('express')

const Post = require('../models/Post')
const router = express.Router()

// Get all Posts
router.get('/', async(req, res)=>{
    try{
        const post = await Post.find()
    res.json(post)
    }catch(err){
        res.json({message:err})
    }
})

// Submit a Post
router.post('/', async(req, res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try{
        const savedPost = await post.save()
        res.json(savedPost)
    }catch (err){
        res.json({message:err})
    }
})

// Get Post by ID
router.get('/:id', async(req, res)=>{
    try{
        const savedPost = await Post.findById(req.params.id)
        res.json(savedPost)
    }catch (err){
        res.json({message:err})
    }
})

// Delete Post
router.delete('/:id', async(req, res)=>{
    try{
        const deletedPost = await Post.deleteOne({_id: req.params.id})
        res.json(deletedPost)
    }catch (err){
        res.json({message: err})
    }
})

router.patch('/:id', async (req, res)=>{
    try{
        const deletedPost = await Post.updateOne({_id: req.params.id}, {$set: {title: req.body.title}})
        res.json(deletedPost)
    }catch (err) {
        console.log({message:err})
    }
})

module.exports = router