$(document).ready(function() {
  // $("#getFlavors").submit(function(event) {
  console.log("hi");
    var flavors = ["vanilla", "chocolate", "strawberry"];

    flavors.forEach(function(flavor) {
      $(".output").append("<p>" + flavor + "</p>");
      $("targetElement").append("")

    });

    // event.preventDefault();
  // });

});
