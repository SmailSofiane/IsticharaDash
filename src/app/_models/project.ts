
import {Titre} from './Titre'
import { Projectid } from './projectid';
import { Deserializable } from './deserializable';
export class Project  
{

	constructor ( codeArticl:number,codeprojet:number,  libprojet:string,  nbvotants:number)  {
        this._codeArticl=codeArticl;
        this._codeprojet=codeprojet;
        this._libprojet=libprojet;
        this._nbVotants=nbvotants;
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

   
  private _projectid: Projectid;
    public get projectid(): Projectid {
        return this._projectid;
    }
    public set projectid(value: Projectid) {
        this._projectid = value;
    }
     
	private _libprojet: string;
    public get libprojet(): string {
        return this._libprojet;
    }
    public set libprojet(value: string) {
        this._libprojet = value;
    }
    private _nbVotants: number;
    public get nbVotants(): number {
        return this._nbVotants;
    }
    public set nbVotants(value: number) {
        this._nbVotants = value;
    }
    
}