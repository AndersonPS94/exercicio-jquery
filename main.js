$(document).ready(function() {
    
    $("#form-tarefa").submit(function(e) {
      e.preventDefault();

      const Tarefa = $("#adiciona-tarefa").val();
      const novaTarefa = $("#lista-tarefa").append("<li>" + Tarefa + "</li>");
      $("#adiciona-tarefa").val("");
    });


    $("#tarefa-li").on("click", "li", function() {
      $(this).toggleClass('.risca-tarefa');
    });

});