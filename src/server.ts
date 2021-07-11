import "reflect-metadata"; // permite o uso de metadata (decorators)
import express, {Request, Response, NextFunction} from "express"; // permite uso dos middlewares
import "express-async-errors"; // suporte para erros asyncs (retira o looping dos erros que acontecem e gera um retorno)
import { router } from "./routes"; // importa as rotas
import "./database"; // importa a conexão com a database

const app = express(); // usa express
app.use(express.json()); // seta que o express usará JSON por padrão
app.use(router); // usa as rotas

// Ao rodar a aplicação o servidor ficará "ouvindo" o localhost na porta 5000
// Gera um console log para avisar que o servidor está funcionando e eu não ter que testar se já está funcionando
const PORT = 5000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => console.log("Server is running"));