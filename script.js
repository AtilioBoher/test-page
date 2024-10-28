function myFunction() {
  button = document.getElementById("button-id");
  hiddenMessage = document.getElementById("message");
  if (hiddenMessage.style.display == "block") {
    hiddenMessage.style.display = "none";
    button.innerHTML = "Mostrar mensaje oculto";
    return;
  }
  button.innerHTML = "Ocultar mensaje";
  hiddenMessage.style.display = "block";
}

document.getElementById("button-id").addEventListener("click", myFunction);
