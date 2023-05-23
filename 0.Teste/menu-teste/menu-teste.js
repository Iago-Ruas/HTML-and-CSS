/*Alterna entre adicionar e remover a classe "responsiva" ao menu quando o usuário clicar no ícone.*/
function abreMenu() {
  let x = document.getElementById("meuMenu");
  if (x.className === "menu") {
    x.className += " responsivo";
  } else {
    x.className = "menu";
  }
}