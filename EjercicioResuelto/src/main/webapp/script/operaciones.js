/*Realiza un script que escriba una pirámide del 1 al 20 cuando le des al boton lo imprima en pantalla pùedes hacer varios
botones para imrprimir piramides mas pequeñas dentro de cada boton pon el valor para el parametro */
function bucle(numeroveces){
	    //DECLARAMOS LAS VARIABLES    
    let i, rep;
    //BUCLE FOR PARA RECORRER DE 1 A 30
    for (i = 1; i <= numeroveces; i++) {
        //BUCLE INTERIOR PARA HACER LAS REPETICIONES
        for (rep = 0; rep < i; rep++) {
            //IMPRIMIMOS EL NÚMERO i, i VECES
            document.write(i);
        }
        document.write("<br>");
    }
	
}


