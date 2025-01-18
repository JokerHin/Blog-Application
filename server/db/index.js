const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://JokerHin:Kar@050506@cluster0.wfssf.mongodb.net/")
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
