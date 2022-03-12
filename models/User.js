const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema ( {
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please use a valid e-mail address']
    },
    thoughts: [{
        type: Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON: {
        getters: true,
        virtuals: true  }
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
