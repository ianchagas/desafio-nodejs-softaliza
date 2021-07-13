import { EntityRepository, Repository } from "typeorm";
import { Blogspots} from "../model/Blogspots";

/**
 * O mesmo esquema explicado do UserRepository
 */

@EntityRepository(Blogspots)
class BlogspotsRepository extends Repository<Blogspots> {

}

export { BlogspotsRepository }