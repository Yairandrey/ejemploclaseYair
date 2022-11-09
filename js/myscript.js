
var array;



function cargarpagina(){
     array=[
        { nombre:"yair", codigo:"192119", documento:"1094573540", programa:"ing. de sistemas"},
        { nombre:"jesus", codigo:"192116", documento:"109345433", programa:"ing. de sistemas"},
        { nombre:"pedro", codigo:"192156", documento:"1096546666", programa:"ing. de sistemas"}

    ];
    console.log(array);
}

function calcular(){
    let nombre= $("#nombre").val();
    for( i=0;i<array.length;i++){
        if(nombre==array[i].nombre){
            console.log("el nombre encontrado es: " + nombre);
            break;
        }
        else {
            console.log("no se encontro el nombre  "+ nombre);
        }
    }


}