import mongoose, { Schema } from "mongoose";

const scheduleSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            ref: "User",
            trim: true,
        },
        subject: {
            type: String,
            required: true,
            trim: true,
        },
        room: {
            type: String,
            required: true,
            trim: true,
        },
        time: {
            type: String,
            required: true,
            trim: true,
        },
        day: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Schedule = mongoose.model("Schedule", scheduleSchema);