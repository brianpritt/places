function Place(name, year, activity, notes){
  this.name = name;
  this.year = year;
  this.activity = activity;
  this.notes = notes;
}

Place.prototype.nameYear = function() {
  return this.name + ", " + this.year;
}

$(document).ready(function(){

  $("form").submit(function(event){
  event.preventDefault();

  var name = $("#name").val();
  var year = $("#year").val();
  var activity = $("#activity").val();
  var notes = $("#notes").val();

  var newPlace = new Place(name, year, activity, notes);
  $("#name").val("");
  $("#year").val("");
  $("#activity").val("");
  $("#notes").val("");

  $("#places").append("<li><span class='placeName'>" + newPlace.nameYear() + "</span></li>");

  $(".placeName").last().click(function(){
    $("#called").show();
    $(".location").text(newPlace.name);
    $(".year").text(newPlace.year);
    $(".activities").text(newPlace.activity);
    $(".notes").text(newPlace.notes);
  });
  });
});
