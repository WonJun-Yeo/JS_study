$.ajax({
  url: "./assets/store.json",
  type: "GET",
}).done(function (data) {
  for (i = 0; i < data.products.length; i++) {
    $(".card-title").eq(i).html(data.products[i].product_name);
    $(".card-text").eq(i).html(data.products[i].brand_name);
    $(".card-img-top")
      .eq(i)
      .attr("src", "./assets/" + data.products[i].photo);
    $(".price").eq(i).html(data.products[i].price);
  }
});

$(".input").on("change", function () {
  $(".card-box").html("");
  $.ajax({
    url: "./assets/store.json",
    type: "GET",
  }).done(function (data) {
    for (e = 0; e < data.products.length; e++) {
      if (data.products[e].product_name.indexOf($(".input").val()) >= 0) {
        let template = `<div class="card"><img class="card-img-top" src="./assets/${data.products[e].photo}"/><div class="card-body"><h1 class="card-title">${data.products[e].product_name}</h1><p class="card-text">${data.products[e].brand_name}</p></div><span class="price">${data.products[e].price}</span></div>`;
        $(".card-box").append(template);
      }
    }
  });
});
