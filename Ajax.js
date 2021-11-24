$("#bt").on("click", function () {
  $.ajax({
    url: "https://codingapple1.github.io/hello.txt",
    type: "GET",
  }).done(function (데이터) {
    $("#hello").html(데이터);
  });
});

$("#productShow").on("click", function () {
  $.ajax({
    url: "https://codingapple1.github.io/data.json",
    type: "GET",
  }).done(function (data) {
    $(".card-title").html(data.model);
    $(".card-text").html(data.price);
    $(".card-img-top").attr("src", data.img);
  });
});
