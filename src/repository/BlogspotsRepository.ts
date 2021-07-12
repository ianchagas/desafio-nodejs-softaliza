import { EntityRepository, Repository } from "typeorm";
import { Blogspots} from "../model/Blogspots";

@EntityRepository(Blogspots)
class BlogspotsRepository extends Repository<Blogspots> {

}

export { BlogspotsRepository }