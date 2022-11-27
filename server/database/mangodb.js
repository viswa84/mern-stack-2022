const { default: mongoose} = require("mongoose")

// url = mongodb+srv://viswa:viswa@cluster0.wgfk0br.mongodb.net/?retryWrites=true&w=majority
  async function connext(params) {

    const username=process.env.MONGO_DB_USER_NAME;
    const password=process.env.MONGO_DB_USER_PASSWORD;
    const url = process.env.MONGO_DB_URL;
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@${url}/?retryWrites=true&w=majority`
    );
    console.log("mangoDb is connected");
  }

  module.exports = connext
  
