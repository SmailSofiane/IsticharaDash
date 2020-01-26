
export class AvisCitoyen {

    private num: string;
    private nin: string;
    private codeCR: string;
    private codeTitre: number;
    private libRub: string;
    private codeprojet: number;
    private libprojet: string;
    private libprojetFr: string;
    private remarque: string;
    private adress: String;

    /**
     * Getter $adress
     * @return {String}
     */
	public get $adress(): String {
		return this.adress;
	}

    /**
     * Setter $adress
     * @param {String} value
     */
	public set $adress(value: String) {
		this.adress = value;
	}

    /**
     * Getter $remarque
     * @return {string}
     */
	public get $remarque(): string {
		return this.remarque;
	}

    /**
     * Setter $remarque
     * @param {string} value
     */
	public set $remarque(value: string) {
		this.remarque = value;
	}

    /**
     * Getter $libprojetFr
     * @return {string}
     */
	public get $libprojetFr(): string {
		return this.libprojetFr;
	}

    /**
     * Setter $libprojetFr
     * @param {string} value
     */
	public set $libprojetFr(value: string) {
		this.libprojetFr = value;
	}

    /**
     * Getter $libprojet
     * @return {string}
     */
	public get $libprojet(): string {
		return this.libprojet;
	}

    /**
     * Setter $libprojet
     * @param {string} value
     */
	public set $libprojet(value: string) {
		this.libprojet = value;
	}

    /**
     * Getter $codeprojet
     * @return {number}
     */
	public get $codeprojet(): number {
		return this.codeprojet;
	}

    /**
     * Setter $codeprojet
     * @param {number} value
     */
	public set $codeprojet(value: number) {
		this.codeprojet = value;
	}

    /**
     * Getter $libRub
     * @return {string}
     */
	public get $libRub(): string {
		return this.libRub;
	}

    /**
     * Setter $libRub
     * @param {string} value
     */
	public set $libRub(value: string) {
		this.libRub = value;
	}

    /**
     * Getter $codeTitre
     * @return {number}
     */
	public get $codeTitre(): number {
		return this.codeTitre;
	}

    /**
     * Setter $codeTitre
     * @param {number} value
     */
	public set $codeTitre(value: number) {
		this.codeTitre = value;
	}


    /**
     * Getter $codeCR
     * @return {string}
     */
	public get $codeCR(): string {
		return this.codeCR;
	}

    /**
     * Setter $codeCR
     * @param {string} value
     */
	public set $codeCR(value: string) {
		this.codeCR = value;
	}

    /**
     * Getter $nin
     * @return {string}
     */
	public get $nin(): string {
		return this.nin;
	}

    /**
     * Setter $nin
     * @param {string} value
     */
	public set $nin(value: string) {
		this.nin = value;
	}

    /**
     * Getter $num
     * @return {string}
     */
	public get $num(): string {
		return this.num;
	}

    /**
     * Setter $num
     * @param {string} value
     */
	public set $num(value: string) {
		this.num = value;
	}

}