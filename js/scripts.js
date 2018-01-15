$(document).ready(function() {
  $("#preference").submit(function(event) {
    event.preventDefault();
    var preference = $("input:radio[name=type]:checked").val();

    if (preference === "front") {
      $(".front-end").show();
      $(".back-end").hide();
    } else {
      $(".back-end").show();
      $(".front-end").hide();
    };
  });

  //Experience form//

  $("#experience").submit(function(event) {
    event.preventDefault();
    var experience = $(".expRadio:checked").val();
    console.log(experience)

    if (experience === "yes") {
      $(".experience").show("#yes");
      $(".inexperience").hide("#no");
    } else {
      $(".inexperience").show("#no");
      $(".experience").hide("#yes");
    };
  });
  //End//
  // //programLength form//
  $("#programLength").submit(function(event) {
    event.preventDefault();
    var programLength = $(".plRadio:checked").val();
    console.log(programLength)
    if (programLength === "Yes") {
      console.log("hi")
      $(".full-time").show();
      $(".evening-class").hide();
    } else {
      $(".evening-class").show();
      $(".full-time").hide();
    };
  });
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
