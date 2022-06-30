import PostReservation from "../models/postReservation.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostReservation.find();
    res.status(200).json({ result: postMessage, count: postMessage.length });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePosts = async (req, res) => {
  try {
    const postMessage = await PostReservation.findOneAndDelete({
      _id: req.body.key._id,
    });
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePosts = async (req, res) => {
  try {
    const postMessage = await PostReservation.findOneAndUpdate(
      { _id: req.body.key._id },
      req.body.value, {returnDocument: "after"}
    );
    res.status(200).json({ result: postMessage, count: postMessage.length });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createReservation = async (req, res) => {
  const post = req.body;
  const newPost = new PostReservation(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
