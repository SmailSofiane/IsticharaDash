import { Serializer } from '@angular/compiler';
import { Deserializable } from './deserializable';

import {Commune} from './commune';

export class Wilaya implements Deserializable {
    deserialize(input: any): this {
            Object.assign(this, input);
     this.commune=input.getCommune.map(commune=>new Commune().deserialize(commune));
   return this;
  }

  public codeW: string;

  private _libelar: string;

  private _libelfr: string;



  private _comms: Commune[];

  get comms(): Commune[] {
    return this._comms;
  }

  set comms(comms: Commune[]) {
    this._comms = comms;
  }

  get libelar(): string {
    return this._libelar;
  }

  set libelar(libelar: string) {
    this._libelar = libelar;
  }

  get libelfr(): string {
    return this._libelfr;
  }

  set libelfr(libelfr: string) {
    this._libelfr = libelfr;
  }


}
