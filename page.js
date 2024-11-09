document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    document.title = "Preços especiais, volte!";
  } else {
    document.title = "Arab cafés especiais";
  }
});
