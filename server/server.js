const express = require("express");
const { default: mongoose } = require("mongoose");
  const cors = require("cors");
const PORT = 4000;
const app = express();
app.use(cors)


app.get("/", (req, res) => {
  res.send("Hello world");
});

     
   async function connext(params) {
    await   mongoose.connect(
        "mongodb+srv://viswa:viswa@cluster0.wgfk0br.mongodb.net/?retryWrites=true&w=majority"
      )
      console.log("mangoDb is connected");
    
}
connext()


app.listen(PORT, (req, res) => {
  // res.send("hallom welcome to backend")
  console.log("servr runing at http://localhost:4000 ");
});
