const app = require(".");
const { connectDb } = require("./config/db");

const PORT = 5454;
app.listen(PORT, async() => {
  // Connect to MongoDB database
  await connectDb();
  console.log(`Server listening on ${PORT}`);
});
