declare var PDK: any;

import { Injectable } from 'angular2/angular2';
import {Service} from './Service';

@Injectable()
export class Pinterest extends Service {

  private appKey:String = "4804709578944031636";

  public constructor() {
    super();
    PDK.init({
        appId: this.appKey,
        cookie: true
    });
  }

  public get ready():boolean {
    return false;
  }

}