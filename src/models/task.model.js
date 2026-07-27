import mongoose, { model, Schema } from "mongoose";

const taskSchema = new Schema(
    {
        taskname: {
            type: String,
            required: true,
            unique: true,
        },

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

export const Task = mongoose.model("Task", taskSchema);
