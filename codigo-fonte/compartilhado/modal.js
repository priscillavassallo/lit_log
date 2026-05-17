function abrirModalLog() {
  var modal = document.getElementById("modalLog");
  modal.classList.add("modalAberto");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("livroLog").focus();
}

function fecharModalLog() {
  var modal = document.getElementById("modalLog");
  modal.classList.remove("modalAberto");
  modal.setAttribute("aria-hidden", "true");
}

function fecharModalPorFora(event) {
  if (event.target.id === "modalLog") {
    fecharModalLog();
  }
}

function salvarLog(event) {
  event.preventDefault();
  event.target.reset();
  fecharModalLog();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    fecharModalLog();
  }
});
