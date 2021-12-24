document.addEventListener("DOMContentLoaded", function () {
  spoilerBtnListener();
});

function spoilerBtnListener() {
  $(".js--spoiler-btn").on("click", spoilerHandler);
}

function spoilerHandler(evt) {
  $(evt.currentTarget).toggleClass("opened");
  $(evt.currentTarget).siblings(".js--spoiler-content").slideToggle(200);
}
