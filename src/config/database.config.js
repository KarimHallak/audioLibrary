const mongoose = require("mongoose");

const databaseConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/audio-library-example?readPreference=primary&serverSelectionTimeoutMS=2000&appname=MongoDB%20Compass&directConnection=true&ssl=false",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log(`Connected to Database`);
  } catch (err) {
    console.log(`error`);
  }
};

module.exports=databaseConnection;