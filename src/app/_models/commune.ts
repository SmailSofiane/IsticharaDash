import { Deserializable } from './deserializable';

export class Commune implements Deserializable{
    deserialize(input: any): this {
      return Object.assign(this,input);
    }



    private _codew: string;

    private _codec: string;

    private _libelar: string;

    private _libelfr: string;

    get codew(): string {
      return this._codew;
    }

    set codew(codew: string) {
      this._codew = codew;
    }

    get codec(): string {
      return this._codec;
    }

    set codec(codec: string) {
      this._codec = codec;
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
