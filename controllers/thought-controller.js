const { User, Thought, Reaction } = require('../models');

module.exports = {
    // get all thoughts
    getAllThoughts (req, res) {
        Thought.find({})
        .populate ({ path: 'reactions' })
        .then(thoughtData => res.json(thoughtData))
        .catch((err) => res.status(500).json(err))
    },
    // get thought by _id
    getThoughtById (req, res) {
        Thought.findOne({ _id: req.params.id })
        .populate({ path: 'reactions'})
        .then(thoughtData => 
            !thoughtData
                ? res.status(404).json({ message: 'No thought found with that ID'})
                : res.json(thoughtData))
        .catch((err) => res.status(500).json(err))
    },
    // create a thought and push the id to the associated user's thoughts array
    createThought (req, res) {
        Thought.create(req.body)
        .then(thoughtData => {
            User.findOneAndUpdate({ _id: req.body.userId }, { $push: { thoughts: thoughtData._id }}, { new: true })
            .then((userData) => 
            !userData
                ? res.status(404).json('No user found with that ID')
                : res.json(userData))
            .catch((err) => res.status(500).json(err))
        })
        .catch((err) => res.status(500).json(err))
    },
    updateThought (req, res) {
        Thought.findOneAndUpdate({ _id: req.params.id}, { $set: req.body }, { new: true })
        .then((thoughtData) =>
        !thoughtData
            ? res.status(404).json({ message: 'No thought found with that ID'})
            : res.json(thoughtData))
        .catch((err) => res.status(500).json(err))
    },
    deleteThought (req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
        .then((thoughtData) =>
        !thoughtData
            ? res.status(404).json({ message: 'No thought found with that ID'})
            // remove thought from array belonging to the associated username
            : User.findOneAndUpdate({ username: thoughtData.username }, { $pull: { thoughts: req.params.id }})
        )
        .then(() => res.json({ message: 'Thought successfully deleted' }))
        .catch((err) => res.status(500).json(err))
    },
    addReaction (req, res) {
        Thought.findOneAndUpdate({ _id: req.params.id }, { $addToSet: {reactions: req.body }}, { new: true, runValidators: true })
        .then((thoughtData) =>
        !thoughtData
            ? res.status(404).json('No thought found with that ID')
            : res.json(thoughtData))
        .catch((err) => res.status(500).json(err))
    },
    removeReaction (req, res) {
        Thought.findOneAndUpdate({ _id: req.params.id }, 
            {$pull: { reactions: { reactionId: req.params.reactionId } }}, 
            { new: true, runValidators: true })
        .then((thoughtData) => 
        !thoughtData
            ? res.status(404).json({ message: 'No thought found with that ID' })
            : res.json(thoughtData))
        .catch((err) => res.status(500).json(err))
    }
}