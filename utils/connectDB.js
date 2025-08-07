import mongoose from "mongoose";

export default async function connectDB() {
  if (mongoose.connections[0].readyState === 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected ✅");
  } catch (error) {
    console.log("Error in connecting to DB ❌");
  }
}
