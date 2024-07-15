import { Router } from "express";
import { testOpenAiService } from "../controllers/wordController.js";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).send({message: true});
})

routes.get("/word", testOpenAiService);


export default routes;