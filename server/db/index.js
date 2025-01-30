const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv:"
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
