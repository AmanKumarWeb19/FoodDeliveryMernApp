const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://akgupta0524:akgupta0524@cluster0.2ftywhy.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
