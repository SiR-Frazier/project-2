//

//front, ui logic
$(document).ready(function() {
  $("#preference").submit(function(event) {
    var preference = $("input:radio[name=type]:checked").val();
    console.log(preference);
    if ("#preference" === "front") {
      $(".front-end").show();
      $(".back-end").hide();
    } else {
      $(".back-end").show();
      $(".front-end").hide();
    };
    event.preventDefault();
  });

});
