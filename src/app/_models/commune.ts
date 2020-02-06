import { Deserializable } from './deserializable';

export class Commune implements Deserializable{
    deserialize(input: any): this {
      return Object.assign(this,input);
    }



    private codew: string;
    public getCodew(): string {
        return this.codew;
    }
    public setCodew(value: string) {
        this.codew = value;
    }
    private codec: string;
    public getCodec(): string {
        return this.codec;
    }
    public setCodec(value: string) {
        this.codec = value;
    }
    private libelar: string;
    public getLibelar(): string {
        return this.libelar;
    }
    public setLibelar(value: string) {
        this.libelar = value;
    }
    private libelfr: string;
    public getLibelfr(): string {
        return this.libelfr;
    }
    public setLibelfr(value: string) {
        this.libelfr = value;
    }

}
