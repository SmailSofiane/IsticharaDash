import { Serializer } from '@angular/compiler';
import { Deserializable } from './deserializable';

import { Commune } from './commune';

export class Wilaya /*implements Deserializable*/ {
   /* deserialize(input: any): this {
        Object.assign(this, input);
        this.commune = input.getCommune.map(commune => new Commune().deserialize(commune));
        return this;
    }*/


    private _nbVotants: number;
    public get nbVotants(): number {
        return this._nbVotants;
    }
    public set nbVotants(value: number) {
        this._nbVotants = value;
    }
   



    private _codew: string;
    public get codew(): string {
        return this._codew;
    }
    public set codew(value: string) {
        this._codew = value;
    }

     private _codec: string;
    public get codec(): string {
        return this._codec;
    }
    public set codec(value: string) {
        this._codec = value;
    }
 

     
    private _libelfr: string;
    public get libelfr(): string {
        return this._libelfr;
    }
    public set libelfr(value: string) {
        this._libelfr = value;
    }
   

     
    private _libelar: string;
    public get libelar(): string {
        return this._libelar;
    }
    public set libelar(value: string) {
        this._libelar = value;
    }

    
     
    private _commune: Commune[];
    public get commune(): Commune[] {
        return this._commune;
    }
    public set commune(value: Commune[]) {
        this._commune = value;
    }

     


}
