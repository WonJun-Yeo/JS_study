var 지금보이는사진 = 1;

$(".slide-1").click(function () {
  $(".slide-container").css("transform", "translateX(0)");
  지금보이는사진 = 1;
});

$(".slide-2").click(function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
  지금보이는사진 = 2;
});

$(".slide-3").click(function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
  지금보이는사진 = 3;
});

$(".slide-next").click(function () {
  if (지금보이는사진 == 1) {
    $(".slide-container").css("transform", "translateX(-100vw)");
    지금보이는사진 = 2;
  } else if (지금보이는사진 == 2) {
    $(".slide-container").css("transform", "translateX(-200vw)");
    지금보이는사진 = 3;
  }
});

$(".slide-before").click(function () {
  if (지금보이는사진 == 2) {
    $(".slide-container").css("transform", "translateX(0vw)");
    지금보이는사진 = 1;
  } else if (지금보이는사진 == 3) {
    $(".slide-container").css("transform", "translateX(-100vw)");
    지금보이는사진 = 2;
  }
});

var 이미지1 = document.querySelectorAll(".slide-box img")[0];
var 이미지2 = document.querySelectorAll(".slide-box img")[1];
var 이미지3 = document.querySelectorAll(".slide-box img")[2];

var 매니저1 = new Hammer.Manager(이미지1);
var 매니저2 = new Hammer.Manager(이미지2);
var 매니저3 = new Hammer.Manager(이미지3);
매니저1.add(new Hammer.Pan({ threshold: 0 }));
매니저2.add(new Hammer.Pan({ threshold: 0 }));
매니저3.add(new Hammer.Pan({ threshold: 0 }));

매니저1.on("pan", function (e) {
  console.log(e.deltaX);
  if (e.deltaX < -1) {
    $(".slide-container").css("transform", "translateX(" + e.deltaX + "px)");
    if (e.isFinal && 지금보이는사진 == 1) {
      $(".slide-container").addClass("transforming");
      $(".slide-container").css("transform", "translateX(-100vw)");
      setTimeout(function () {
        $(".slide-container").removeClass("transforming");
      }, 500);
      지금보이는사진 = 2;
    }
  }
});
