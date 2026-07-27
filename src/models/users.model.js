import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true,
            index: true,
        },

        fullname: {
            type: String,
            required: true,
            index: true,
        },

        avatar: {
            type: String,
        },

        password: {
            type: String,
            required: true,
        },

        refreshtoken: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

userSchema.pre("save", async () => {
    if (!this.isModified("password")) return;
    this.password = await bcrypt(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY,
        },
    );
};

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.Access_TOKEN_SECRET,
        {
            expiresIn: Access_TOKEN_EXPIRY,
        },
    );
};

export const User = mongoose.model("User", userSchema);
