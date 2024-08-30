import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "ایمیل از قبل وجود دارد"],
        required: [true, "نام کاربری از قبل وجود دارد"]
    },
    username: {
        type: String,
        required: [true, "نام کاربری از قبل وجود دارد"]
    },
    image: {
        type: String
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: ['Property']
        },

    ]
}, {
    timestamp: true
}
);

const User = models.User || model('User', UserSchema);

export default User;