const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://JokerHin:Kar%40050506@cluster0.wfssf.mongodb.net/test"
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
