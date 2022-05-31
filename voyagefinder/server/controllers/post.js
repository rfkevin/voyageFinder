import PostReservation from '../models/postReservation.js';

export const getPosts = async(req, res) => {
  try {
    const postMessage = await PostReservation.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const createReservation = async(req, res) => {
  const post = req.body;
  const newPost = new PostReservation(post);
  console.log(newPost);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}
