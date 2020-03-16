 
  
export class Titre {
    private _libwilaya: string;
    public get libwilaya(): string {
        return this._libwilaya;
    }
    public set libwilaya(value: string) {
        this._libwilaya = value;
    }
    private _num: number;
    public get num(): number {
        return this._num;
    }
    public set num(value: number) {
        this._num = value;
    }
    private _libRub: string;
    public get libRub(): string {
        return this._libRub;
    }
    public set libRub(value: string) {
        this._libRub = value; 
    }
    private _nbVotants: number;
    public get nbVotants(): number {
        return this._nbVotants;
    }
    public set nbVotants(value: number) {
        this._nbVotants = value;
    }
}