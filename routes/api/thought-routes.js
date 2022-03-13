const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router.route('/').get(getAllThoughts).post(createThought);
// /api/thoughts/:thoughtId 
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
// /api/thoughts/:thoughtId/reactions
router.route('/:id/reactions').post(addReaction);
// / api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:id/reactions/:reactionId').delete(removeReaction);

module.exports = router;