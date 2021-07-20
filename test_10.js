let num_old = 1;
let num_cur = 0;
let aux = 0;
let number = 144;
let bool = false;

while( num_cur < number ){
    num_cur = num_old + aux;
    aux = num_old;
    num_old = num_cur;
    if( number == num_cur ){
        bool = true
    }
}

if(bool){
    console.log("El numer pertence a la secuencia fibonacci");
} else {
    console.log("El numer no pertence a la secuencia fibonacci");
}