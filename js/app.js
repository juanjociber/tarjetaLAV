let escritura = str =>{
    let arrayStr = str.split('');
    let i = 0;
    let printStr = setInterval(function () {
       let texto = document.getElementById('idText');
       if(arrayStr[i] === ''){
           texto.innerHTML += arrayStr[i];
           texto.innerHTML += arrayStr[i + 1];
           i +=2;
       }else{
           texto.innerHTML += arrayStr[i];
           i++
       }
       if(i=== arrayStr.length){
           clearInterval(printStr);
       }
   },200);
}
escritura('Liz Flores Reyes');