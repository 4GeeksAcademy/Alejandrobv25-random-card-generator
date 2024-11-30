/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let palos = ["♦", "♥", "♠", "♣"];
  let valores = [
    "A",
    "1",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palosRandom = palos[Math.floor(Math.random() * palos.lenght)];
  let valoresRandom = valores[Math.floor(Math.random() * valores.lenght)];

  let iconoArriba = document.querySelector("#iconoArriba");
  let iconoAbajo = document.querySelector("#iconoAbajo");
  let valor = document.querySelector("#valor");

  iconoArriba.innerText = palosRandom;
  iconoAbajo.innerText = palosRandom;
  valor.innerText = valoresRandom;

  if (palosRandom === "♥" || palosRandom === "♦") {
    iconoArriba.style.color = "red";
    iconoAbajo.style.color = "red";
  } else {
    iconoArriba.style.color = "black";
    iconoAbajo.style.color = "black";
  }
};
