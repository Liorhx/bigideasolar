import mongoose from "mongoose";

const uri = "mongodb+srv://rahulyadav0000063_db_user:JiPGdvsiLkWhKP16@bigidea.in4hpjd.mongodb.net/lucknow_solar?retryWrites=true&w=majority&appName=bigidea";

async function testMongo() {
  console.log("Connecting to MongoDB Atlas...");
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
    console.log("✓ MongoDB Atlas Connected Successfully! State:", mongoose.connection.readyState);
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("✓ Existing Collections:", collections.map(c => c.name));
    await mongoose.disconnect();
    console.log("✓ Disconnected cleanly.");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
}

testMongo();
