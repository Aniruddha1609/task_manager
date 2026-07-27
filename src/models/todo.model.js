import mongoose, { model, Schema } from "mongoose";

const todoSchema = new Schema(
    {
        todoname: {
            type: String,
            required: true,
            unique: true,
        },

        content: [{
            type: Schema.Types.ObjectId,
            ref: "Task",
        }],

        complete: {
            type: Boolean,
            default: false,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    },
);

export const Todo = mongoose.model("Todo", todoSchema);
