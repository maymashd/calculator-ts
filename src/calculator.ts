

export class Calculator {
    constructor(a:number,b:number){
        this.a=a
        this.b=b
    }
    a:number;
    b:number;
    result:number;
    public add(){
        this.result=this.a+this.b;
        return this.result;
    }
    public minus(){
        this.result=this.a-this.b;
        return this.result;
    }
    public multiply(){
        this.result=this.a*this.b;
        return this.result;
    }
    public divide(){
        this.result=this.a/this.b;
        return this.result;
    }

}
