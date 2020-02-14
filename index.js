const express = require("express");
// const cors = require("cors");
const router = require("./message/router");

// // const ventRouter = require("./vent/router");
// // const roomRouter = require("./room/router");

const app = express();
const port = 4000;

// const db = require("./db.js"); // just for testing, should be in router
// const Message = require("./message/model"); // just for testing, should be in router
// app.use(Message, db); // just for testing, should be in router

// const corsMiddleware = cors();
// app.use(corsMiddleware);

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.use(router);

// app.post("./message", function(req, res) {
//   const { body } = req;
//   console.log("req.body test", body);
// });

app.listen(port, () => console.log(`Listening on :${port}`));
