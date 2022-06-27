// Como podemos melhorar o esse código usando TS? 
// primeiro renomear a extensão de js para ts
// após isso devemos criar uma classe que será usada como modelo

class PessoaDto{
    nome: string;
    idade: number ;
    profissao: string ;

    constructor(nome: string, idade: number, profissao: string){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}
let pessoa1: PessoaDto = new PessoaDto( "maria", 29, "atriz");


let pessoa2: PessoaDto = new PessoaDto("Roberto", 19, "pedreiro");


let pessoa3:  PessoaDto = new PessoaDto("Laura", 32, "atriz"); 
   


let pessoa4:  PessoaDto = new PessoaDto("Carlos", 22, "pedreiro"); 
 