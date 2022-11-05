const { default: mongoose} = require("mongoose")


  async function connext(params) {
    await mongoose.connect(
      "mongodb+srv://viswa:viswa@cluster0.wgfk0br.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("mangoDb is connected");
  }

  module.exports = connext
  
