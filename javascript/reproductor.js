var duracion = document.getElementById("micancion").duration;
console.log(duracion);

function play(){
  document.getElementById("micancion").play();
}

function pausa(){
  document.getElementById("micancion").pause(true);
}

function volumenMenos(){
  document.getElementById("micancion").volume -=0.1;
}

function volumenMas(){
  document.getElementById("micancion").volume +=0.1;
}
