import { Deserializable } from './deserializable';

export class Commune implements Deserializable{
    deserialize(input: any): this {
      return Object.assign(this,input);
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
    
    private _libelleC: string;
    public get libelleC(): string {
        return this._libelleC;
    }
    public set libelleC(value: string) {
        this._libelleC = value;
    }
    
     
    private _libelleC_AR: string;
    public get libelleC_AR(): string {
        return this._libelleC_AR;
    }
    public set libelleC_AR(value: string) {
        this._libelleC_AR = value;
    }
     
     

}
