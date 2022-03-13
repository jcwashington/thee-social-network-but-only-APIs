const { User , Thought } = require('../models');

module.exports = {
    // Get all users
    getAllUsers(req, res) {
        User.find({})
        .select('-__v')
        .then(userData => res.json(userData))
        .catch((err) => res.status(500).json(err));
    },
    // Get user by '_id' with populated thought and friend data
    getUserById(req, res) {
        User.findOne({ _id: req.params.id })
        .select('-__v')
        // .populate([
        //     { path: 'thoughts', select: '-__v'},
        //     { path: 'friends', select: '-__v'}
        // ])
        .then((userData) =>
        !userData
            ? res.status(404).json({ message: 'No user found with that ID'})
            : res.json(userData))
        .catch((err) => res.status(500).json(err));
    },
    // Create a new user
    createUser(req, res) {
        User.create(req.body)
        .then (userData => res.json(userData))
        .catch((err) => res.status(500).json(err));
    },
    // Update user by id
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body}, { new: true, runValidators: true })
        .then((userData) =>
        !userData
            ? res.status(404).json({ message: 'No user found with that ID'})
            : res.json(userData))
        .catch((err) => res.status(500).json(err));
    },
    // Delete user by ID
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
        .then((userData) =>
        !userData
            ? res.status(404).json({ message: 'No user found with that ID'})
            // also remove this user from all of the friends lists they are in
            : User.updateMany({ _id: { $in: userData.friends }}, { $pull: { friends: req.params.id }})
        )
        .then(() => res.json({ message: 'User deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Add a new friend to a user's friend list
    addFriend(req, res) {
        
    },
    // Remove friend from user's friend list
    removeFriend(req, res) {

    },
/*     // if user is deleted, remove their thoughts
    removeThoughts(req, res){

    } */
}