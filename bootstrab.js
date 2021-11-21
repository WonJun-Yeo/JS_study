// 탭기능
// $(".tab-button")
//   .eq(0)
//   .on("click", function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(0).addClass("active");
//     $(".tab-content").eq(0).addClass("show");
//   });

// $(".tab-button")
//   .eq(1)
//   .on("click", function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(1).addClass("active");
//     $(".tab-content").eq(1).addClass("show");
//   });

// $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(2).addClass("active");
//     $(".tab-content").eq(2).addClass("show");
//   });

// 반복문 축약

for (let i = 0; i < $(".tab-button").length; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      $(".tab-button").removeClass("active");
      $(".tab-content").removeClass("show");
      $(".tab-button").eq(i).addClass("active");
      $(".tab-content").eq(i).addClass("show");
    });
}

// 이벤트버블링

$(".form-group").on("click", function (e) {
  if (e.target == e.currentTarget) {
    $(".form-control").hide();
  }
});

// 이벤트 버블링을 이용한 탭기능

$(".list").on("click", function (e) {
  if (e.target == document.querySelectorAll(".tab-button")[0]) {
    TabOpen(0);
  }
  if (e.target == document.querySelectorAll(".tab-button")[1]) {
    TabOpen(1);
  }
  if (e.target == document.querySelectorAll(".tab-button")[2]) {
    TabOpen(2);
  }
});

function TabOpen(Number) {
  $(".tab-button").removeClass("active");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(Number).addClass("active");
  $(".tab-content").eq(Number).addClass("show");
}

// Array 및 Object 자료형

// var 어레이 = ["BMW", 520];
// var 오브젝트 = { brand: "BMW", model: 520 };

// document.getElementById("title").innerHTML = 어레이[0];
// $("#title").html(어레이[0]);

// document.getElementById("desc").innerHTML = 어레이[1];
// $("#desc").html(어레이[1]);
// $("#desc").html(오브젝트.model);

var 자료 = [{ brand: "BMW" }, { model: 520 }];

document.getElementById("title").innerHTML = 자료[0].brand;
$("#title").html(자료[0].brand);

// interactive form

// $("#option1").on("change", function () {
//   if ($("#option1").val() == "셔츠") {
//     $("#option2").html("");
//     var 셔츠사이즈 =
//       "<option>95</option><option>100</option><option>105</option>";
//     $("#option2").append(셔츠사이즈);

//   } else if ($("#option1").val() == "바지") {
//     $("#option2").html("");
//     var 바지사이즈 =
//       "<option>28</option><option>30</option><option>32</option>";
//     $("#option2").append(바지사이즈);
//   }
// });

var 사이즈 = [26, 28, 30, 32, 34, 36];

$("#option1").on("change", function () {
  if ($("#option1").val() == "바지") {
    $("#option2").html("");
    for (var i = 0; i < 6; i++) {
      var 템플릿 = `<option>${사이즈[i]}</option>`;
      $("#option2").append(템플릿);
    }
  }
});

$("#option1").on("change", function () {
  if ($("#option1").val() == "바지") {
    $("#option2").html("");
    사이즈.forEach(function (i) {
      var 템플릿 = `<option>${i}</option>`;
      $("#option2").append(템플릿);
    });
  }
});

var 출석부 = ["흥민", "영희", "철수", "재석"];

function 이름찾기(e) {
  for (var i = 0; i < 4; i++) {
    if (e == 출석부[i]) {
      console.log("있어요");
      return;
    }
  }
}

이름찾기("철수");

for (var i = 1; i < 10; i++) {
  for (var k = 1; k < 10; k++) {
    console.log(k * i);
  }
}

function 목표량계산기(판매실적어레이, 평균월별판매량) {
  var 실적5개월 = 0;

  for (var i = 0; i < 5; i++) {
    실적5개월 = 실적5개월 + 판매실적어레이[i];
  }

  var 실적12월 = 6 * 평균월별판매량 - 실적5개월;
  console.log(실적12월);
}

목표량계산기([10, 20, 30, 40, 50], 35);
