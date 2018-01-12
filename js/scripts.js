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
  //
    // $("#experience").submit(function(event) {
    //   var experience = $("input:radio[name=type]:checked").val();
    //
    //   if (experience === "yes") {
    //     $(".experience").show("#yes");
    //     $(".experience").hide("#no");
    //   } else {
    //     $(".experience").show("#no");
    //     $(".experience").hide("#yes");
    //   };
  $("#programLength").submit(function(event) {
    var programLength = $("input:radio[name=type]:checked").val();

    if (programLength === "Yes") {
      $(".full-length").show(".full-time");
      $(".evening-class").hide(".part-time");
    } else {
      $(".evening-class").show(".part-time");
      $(".full-length").hide(".full-time");
    };
    event.preventDefault();
  });

});
