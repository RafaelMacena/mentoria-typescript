// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// primeiro renomear a extensão de js para ts
// após isso devemos criar uma classe que será usada como modelo
class Employee{
   code: number = 0;
   name: string = "";
 }
let employee = new Employee();
employee.code = 10;
employee.name = "John";
console.log(employee);