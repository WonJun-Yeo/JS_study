var h1태그 = document.querySelector(".title");
var 글씨 = document.querySelector(".title").innerHTML;

$(".bt").click(function () {
  h1태그.innerHTML = "";
  for (let i = 0; i < 글씨.length; i++) {
    setTimeout(function () {
      h1태그.innerHTML = h1태그.innerHTML + 글씨[i];
    }, i * 100);
  }
});

function typewriting(h1태그, 글씨) {
  h1태그.innerHTML = "";
  for (let i = 0; i < 글씨.length; i++) {
    setTimeout(function () {
      h1태그.innerHTML = h1태그.innerHTML + 글씨[i];
    }, i * 100);
  }
}

$(".bt").click(function () {
  typewriting(h1태그, 글씨);
});
