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

  public getCodeW(): string {
      return this.codeW;
  }
  public setCodeW(value: string) {
      this.codeW = value;
  }
  private libW: string;

  public getLibW(): string {
      return this.libW;
  }
  public setLibW(value: string) {
      this.libW = value;
  }
  private libWFr: string;

  public getLibWFr(): string {
      return this.libWFr;
  }
  public setLibWFr(value: string) {
      this.libWFr = value;
  }
  private nbVotansProgW: number;
  public getNbVotansProgW(): number {
      return this.nbVotansProgW;
  }
  public setNbVotansProgW(value: number) {
      this.nbVotansProgW = value;
  }
  private nbVotansProgC: number;

  public getNbVotansProgC(): number {
      return this.nbVotansProgC;
  }
  public setNbVotansProgC(value: number) {
      this.nbVotansProgC = value;
  }
  private commune: Commune[];

  public getCommune(): Commune[] {
      return this.commune;
  }
  public setCommune(value: Commune[]) {
      this.commune = value;
  }



}
