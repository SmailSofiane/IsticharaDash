import { Deserializable } from './deserializable';

export class Projectid implements Deserializable {
    deserialize(input: any): this {
        Object.assign(this,input);
        return this;
    }
    private _codeArticl: number;
    public get codeArticl(): number {
        return this._codeArticl;
    }
    public set codeArticl(value: number) {
        this._codeArticl = value;
    }
    private _codeprojet: number;
    public get codeprojet(): number {
        return this._codeprojet;
    }
    public set codeprojet(value: number) {
        this._codeprojet = value;
    }
}
