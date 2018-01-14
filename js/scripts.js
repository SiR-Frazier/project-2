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

  //Experience form//
  $("#experience").submit(function(event) {
    var experience = $("input:radio[name=type]:checked").val();

    if (experience === "background") {
      $(".experience").show("#yes");
      $(".inexperience").hide();
    } else {
      $(".inexperience").show();
      $(".experience").hide();
    };
  //End//
  // //programLength form//
  // $("#programLength").submit(function(event) {
  //   var programLength = $("input:radio[name=length]:checked").val();
  //
  //   if (programLength === "Yes") {
  //     $(".full-length").show(".full-time");
  //     $(".evening-class").hide(".part-time");
  //   } else {
  //     $(".evening-class").show(".part-time");
  //     $(".full-length").hide(".full-time");
  //   };
  //   //End//
  //   // Pairs form//
  // $("#pairs").submit(function(event) {
  //   var pairs = $("input:radio[name=pairs]:checked").val();
  //
  //   if (pairs === "Yes") {
  //     $(".pairs-yes").show("#yes-pairs");
  //     $(".pairs-no").hide("#not-so-much");
  //   } else {
  //     $(".pairs-no").show();
  //     $(".pairs-yes").hide();
  //   };
  //   //end//
  });

    event.preventDefault();
  });

});
