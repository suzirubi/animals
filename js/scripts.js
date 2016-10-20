/* $(function() {
  $("#turtle").click(function() {
    $("#turtle-info").toggle();
    $("#snake-info").hide();
    $("#insect-info").hide();
  })
    $("#snake").click(function() {
      $("#snake-info").toggle();
      $("#turtle-info").hide();
      $("#insect-info").hide();
  })
    $("#insect").click(function() {
      $("#insect-info").toggle();
      $("#turtle-info").hide();
      $("#snake-info").hide();
  })
}) */


$(function() {
 $("#select form").submit(function(event) {
   var animal = $("input:radio[name=animal]:checked").val();


   event.preventDefault();
 });
});
