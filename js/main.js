(function () {
  var toggle = document.getElementById("nav-toggle");
  var burger = document.querySelector(".nav-burger");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function sync() {
    var open = toggle.checked;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (burger) burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("change", sync);
  sync();

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.checked = false;
      sync();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.checked) {
      toggle.checked = false;
      sync();
      if (burger) burger.focus();
    }
  });
})();
