const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const router = require("./event/router");

// // const ventRouter = require("./vent/router");
// // const roomRouter = require("./room/router");

const app = express();
const port = 4000;

// // const db = require("./db.js");

// const corsMiddleware = cors();
// app.use(corsMiddleware);

// const parserMiddleware = bodyParser.json();
// app.use(parserMiddleware);

// // app.use(ventRouter);
// // app.use(roomRouter);
// app.use(router);

// const Event = require("./event/model");
// // app.use(Event, db);

app.listen(port, () => console.log(`Listening on :${port}`));
