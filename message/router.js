const express = require("express");
const Message = require("./model");

const { Router } = express;

const router = Router();

router.get("/message", async function(request, response, next) {
  try {
    const message = await Message.findAll();
    response.send(message);
  } catch (error) {
    next(error);
  }
});

router.post("/message", async function(request, response, next) {
  try {
    const { body } = request;
    const { text } = body;
    const entity = { text };
    const message = await Message.create(entity);
    response.send(message);
    // console.log(message.dataValues);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
