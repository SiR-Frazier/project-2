//

//front, ui logic
$(document).ready(function() {
  $("#preference").submit(function(event) {
    var preference = $("input:radio[name=type]:checked").val();

    if (preference === "front") {
      $(".front-end").show("front");
      $(".back-end").hide();
    } else {
      $(".back-end").show();
      $(".front-end").hide();
    };

  // $("#experience").submit(function() {
  //   var experience = $("input:radio[name=type]:checked").val();
  //
  //   if (experience === "yes") {
  //     $(".experience").show("#yes");
  //     $(".experience").hide("#no");
  //   } else {
  //     $(".experience").show("#no");
  //     $(".experience").hide("#yes");
  //   };
    event.preventDefault();
  });

});
