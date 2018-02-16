// Creando la función que llamará a las frases de modo random
this.randomtip = function() {
  var length = $('#tips li').length;
  var ran = Math.floor(Math.random() * length) + 1;
  $('#tips li:nth-child(' + ran + ')').show();
};
// Función para redireccionar a la vista home
$(document).ready(function() {
  randomtip();
  setTimeout(function() {
    window.location.href = '../views/home.html';
  }, 3000);
});
