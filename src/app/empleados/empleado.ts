export class Empleado{
    /*
    public nombre:string;
    public edad:number;

    constructor(nombre:string, edad:number){

        this.nombre= nombre;
        this.edad= edad;

    }
    */
    constructor(
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contratado:boolean
    ){

    }
}