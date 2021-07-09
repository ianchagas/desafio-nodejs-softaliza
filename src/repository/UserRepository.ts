import { EntityRepository, Repository } from "typeorm";
import { User } from "../model/User";


//O repository no caso do TypeORM tem duas funções.:
//- Estender a classe criada com a classe nativa Repository que vai ter funções promise nativa, como save, update, delete, find
//- Permitir que eu importe essa classe para outras partes da aplicação e utilizar dessas funções (como por exemplo, services e controller)

//O metadata  utiliza do decorator pra setar que é uma entidade de repositório que eu to usando do Model User criado

@EntityRepository(User)
class UserRepository extends Repository<User> {

}

export { UserRepository }