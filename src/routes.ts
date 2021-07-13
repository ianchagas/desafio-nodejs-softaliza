import { Router } from "express";
import { UserController } from "./controller/UserController";
import { ensureAuth } from "./middleware/ensureAuth"; // importa middleware de autenticação
import { ensureAdmin } from "./middleware/ensureAdmin"; // importa middleware de validação se o usuário é admin ou não
import { catchErrors } from "./middleware/catchErrors"; // importa middleware que vai verificar os erros criados e informa-los na API
import { AuthUserController } from "./controller/AuthUserController";
import { CreateBlogspotController } from "./controller/CreateBlogspotController";
import { ListAllBlogspostController } from "./controller/ListAllBlogspotController";
import { ListBlogspotBySlugController } from "./controller/ListBlogspotBySlugController";
import { UpdateBlogspotController } from "./controller/UpdateBlogspotController";
import { DeleteBlogspotController } from "./controller/DeleteBlogspotController";

// Aqui nas rotas é onde vai ficar toda minha comunicação do endpoint com o restante das funções da aplicação
// Especificamente ela é responsável por gerar a distribuição dos parâmetros de acordo com a necessidade
// Também é utilizado como modo de abstrair essa função do arquivo de server, para organização das rotas e middlewares em um único local
// Se for um post, ela tende a criar, um get tende a recuperar e assim por diante

const router = Router(); // recebe função nativa de uso de rotas do express

/**
 * Comunicação entre Rota e Controller
 */
const CreateUsers = new UserController();
const AuthUsers = new AuthUserController(); 
const CreateBlogs = new CreateBlogspotController(); 
const ListAllBlogs = new ListAllBlogspostController(); 
const ListBlogsBySlug = new ListBlogspotBySlugController(); 
const UpdateBlogs = new UpdateBlogspotController();
const DeleteBlogs = new DeleteBlogspotController();

/**
 * Middlewares:
 * 
 * Para utilização dos middlewares deverá fazer sentido a sequência: autêntica usuário, verifica admin, captura erros
 */


/**
 * METHOD POST
 */
router.post("/api/v1/create-user", ensureAuth, ensureAdmin, CreateUsers.handle);
router.post("/api/v1/login-user", AuthUsers.handle);
router.post("/api/v1/create-new-blog", ensureAuth, ensureAdmin, CreateBlogs.handle);


/**
 * METHOD GET
 */
router.get("/api/v1/list-all-blogs", ListAllBlogs.handle);
router.get("/api/v1/list-blogs-by-slug/:slug", ListBlogsBySlug.handle);

/**
 * METHOD PUT
 */
router.put("/api/v1/update-blogs-by-slug/:slug", ensureAuth, ensureAdmin, UpdateBlogs.handle);

/**
 * METHOD DELETE
 */
router.delete("/api/v1/delete-blogs-by-slug/:slug", ensureAuth, ensureAdmin, DeleteBlogs.handle);

router.use(catchErrors);

export { router }