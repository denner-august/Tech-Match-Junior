import { Request, Response, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const router = Router();

const corsOptions = {
  origin: "*", // alterar para url que podem acessar a api
  methods: "GET,PUT,POST,DELETE",
  optionsSuccessStatus: 204,
};

router.use(cors(corsOptions));

router.get("/", (Req: Request, Res: Response) => {
  Res.send("mudando minha rota");
});
