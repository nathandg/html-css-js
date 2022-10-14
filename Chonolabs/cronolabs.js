const horas = document.querySelector('.hora')
const minutos = document.querySelector('.minuto')
const segundos = document.querySelector('.segundo')
const button = document.querySelector('.btn-start')

let segundo = 0;
let minuto = 0;
let hora = 0;
let click = 0;
let meuIntervalo;

button.onclick = () => {
   click++;
  
   if (click === 1) {
       
       meuIntervalo = setInterval(() => {
              
        segundo++
        if (segundo == 60) {
            minuto++
            segundo = 0
        }
        if (minuto == 60) {
            hora++
            minuto = 0
        }
    
        segundos.innerHTML = ("00" + segundo).slice(-2);
        minutos.innerHTML = ("00" + minuto).slice(-2);
        horas.innerHTML = ("00" + hora).slice(-2);
       
       }, 1000);
       button.innerHTML = "Parar";
       button.classList.remove('btn-start');
       button.classList.add('btn-stop');

   }else if (click === 2 ) {
        clearInterval(meuIntervalo);
        button.innerHTML = "Reiniciar"
        button.classList.remove('btn-stop')
        button.classList.add('btn-reset');

   }else if (click == 3) {
        button.innerHTML = "Iniciar"
        button.classList.remove('btn-reset');
        button.classList.add('btn-start');

        segundos.innerHTML = "00";
        minutos.innerHTML = "00"; 
        horas.innerHTML = "00";
        segundo = 0;
        minuto = 0;
        hora = 0;
        click = 0;
   }

}