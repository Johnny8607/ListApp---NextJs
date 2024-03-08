import mongoose, { Schema, models } from "mongoose";

const topicSchema = new Schema (
    {
        title: {
            type: String,
            default: "",
            required: true
        },
        description: {
            type: String,
            default: "",
            required: true
        }
    },
    { timestamps: true }
)

const Topic = models.Topic ||  mongoose.model("Topic", topicSchema);
export default Topic;