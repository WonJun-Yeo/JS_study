var productsOrigin = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
for (i = 0; i < products.length; i++) {
  $(".title").eq(i).html(products[i].title);
  $(".price")
    .eq(i)
    .html("가격 : " + products[i].price);
}

// 가격정렬 낮은순
$("#sortPrice").on("click", function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  for (i = 0; i < products.length; i++) {
    $(".title").eq(i).html(products[i].title);
    $(".price")
      .eq(i)
      .html("가격 : " + products[i].price);
  }
});

// 가격정렬 높은순
$("#longPrice").on("click", function () {
  products.sort(function (a, b) {
    return b.price - a.price;
  });
  for (i = 0; i < products.length; i++) {
    $(".title").eq(i).html(products[i].title);
    $(".price")
      .eq(i)
      .html("가격 : " + products[i].price);
  }
});

// 문자정렬 가나다순
$("#sortText").on("click", function () {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.title == b.title) {
      return 0;
    }
  });
  for (i = 0; i < products.length; i++) {
    $(".title").eq(i).html(products[i].title);
    $(".price")
      .eq(i)
      .html("가격 : " + products[i].price);
  }
});

// 문자정렬 다나가순
$("#longText").on("click", function () {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return 1;
    }
    if (a.title > b.title) {
      return -1;
    }
    if (a.title == b.title) {
      return 0;
    }
  });
  for (i = 0; i < products.length; i++) {
    $(".title").eq(i).html(products[i].title);
    $(".price")
      .eq(i)
      .html("가격 : " + products[i].price);
  }
});

// 가격필터링 6만원이하
$("#maxFive").on("click", function () {
  $(".card-group").html("");
  let maxFiveProducts = products.filter(function (a) {
    return a.price <= 60000;
  });
  for (i = 0; i < maxFiveProducts.length; i++) {
    let template = `<div class="card">
    <img src="https://via.placeholder.com/600" />
    <div class="card-body">
      <h5 class="title"></h5>
      <p class="price"></p>
      <button class="btn btn-danger">주문하기</button>
    </div>
  </div>`;
    $(".card-group").append(template);
    $(".title").eq(i).html(maxFiveProducts[i].title);
    $(".price")
      .eq(i)
      .html("가격 : " + maxFiveProducts[i].price);
  }

  // maxFiveProducts.forEach(function (a) {
  //   let template = `<div class="card">
  //   <img src="https://via.placeholder.com/600" />
  //   <div class="card-body">
  //     <h5 class="title">${a.title}</h5>
  //     <p class="price">가격 : ${a.price}</p>
  //     <button class="btn btn-danger">주문하기</button>
  //   </div>
  // </div>`;
  //   $(".card-group").append(template);
  // });
});

// 가격필터링 input 이용
$("#inputFilterBT").on("click", function () {
  $(".card-group").html("");
  let inputProducts = products.filter(function (a) {
    return a.price <= $("#inputFilter").val();
  });
  for (i = 0; i < inputProducts.length; i++) {
    let inputtemplate = `<div class="card">
    <img src="https://via.placeholder.com/600" />
    <div class="card-body">
      <h5 class="title"></h5>
      <p class="price"></p>
      <button class="btn btn-danger">주문하기</button>
    </div>
  </div>`;
    $(".card-group").append(inputtemplate);
    $(".title").eq(i).html(inputProducts[i].title);
    $(".price")
      .eq(i)
      .html("가격 : " + inputProducts[i].price);
  }
});

// 가격필터링 원상태
$("#originProducts").on("click", function () {
  $(".card-group").html("");
  for (i = 0; i < productsOrigin.length; i++) {
    let template = `<div class="card">
    <img src="https://via.placeholder.com/600" />
    <div class="card-body">
      <h5 class="title"></h5>
      <p class="price"></p>
      <button class="btn btn-danger">주문하기</button>
    </div>
  </div>`;
    $(".card-group").append(template);
    $(".title").eq(i).html(productsOrigin[i].title);
    $(".price")
      .eq(i)
      .html("가격 : " + productsOrigin[i].price);
  }
});

var 어레이 = [7, 3, 5, 2, 40];
var 뉴어레이 = 어레이.filter(function (a) {
  return a < 4;
});

var 뉴어레이 = 어레이.map(function (a) {
  return a * 2;
});

var 문자 = ["abdfg", "casddf", "basfdsf", "zasg"];
문자.sort();
