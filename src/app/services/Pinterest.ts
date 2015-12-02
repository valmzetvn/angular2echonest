
import {Service} from './Service';

export class Pinterest extends Service {

  private appKey:String = "4804709578944031636";

  public constructor() {
    super();

  }

  public get ready():boolean {
    return false;
  }

}