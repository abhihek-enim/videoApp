import mongoose from "mongoose";

const playlistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId(),
      ref: "User",
    },
    videos: {
      type: [{ type: mongoose.Schema.Types.ObjectId(), ref: "Video" }],
      required: true,
    },
  },
  { timestamps: true }
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
