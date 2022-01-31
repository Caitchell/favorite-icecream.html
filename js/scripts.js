$(document).ready(function(event) {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const flavor1 = $("flavor1").val();
    const flavor2 = $("flavor2").val();
    const flavor3 = $("flavor3").val();

    const array = [flavor1, flavor2, flavor3]

    $("#favoriteFlavors").append("<li>" + array[0] + " " + array[1] + " " + array[2] + "</li>");
  });
});