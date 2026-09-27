(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }

  btn.addEventListener("click", function () {
    var current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(current === "light" ? "dark" : "light");
  });
})();
