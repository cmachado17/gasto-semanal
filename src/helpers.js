export const revisarSaldo = (saldo, restante) => {
    let clase;

    if((saldo / 4) > restante){
        clase = "status bg-rojo"
    }else if( (saldo / 2) > restante){
        clase= "status bg-amarillo"
    }else{
        clase= "status bg-verde"
    }
    return clase;
}
