import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kuljotrajpal:96305382@cluster0.5qxdv.mongodb.net/food-del').then(() => console.log("DB Connected"));
}