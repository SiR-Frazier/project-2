//

//front, ui logic
$(document).ready(function(e) {
  // var preferredGender = prompt("Do you prefer men or women?");
    // if ((men))
  $("#preferredGender").submit(function(event) {
    var preferredGender = $("input:radio[name=gender]:checked").val();
    console.log(preferredGender);
    if (preferredGender === "men") {
      $(".men").show();
      $(".women").hide();
    } else {
      $(".women").show();
      $(".men").hide();
    };
    event.preventDefault();
  });

});
