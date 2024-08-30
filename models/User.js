import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "ایمیل از قبل وجود دارد"],
        required: [true, "وارد کردن ایمیل اجباری است"]
    },
    username: {
        type: String,
        required: [true, "وارد کردن نام کاربری اجباری است"]
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