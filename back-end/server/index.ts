import express from "express";

import { router } from "../router/router";

const app = express();
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () =>
  console.log("app rodando na porta", process.env.PORT)
);
