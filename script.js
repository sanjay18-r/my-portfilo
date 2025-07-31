function toggleTheme() {
  const body = document.body;
  const isDark = body.style.backgroundColor === "white";

  if (isDark) {
    body.style.backgroundColor = "#1c1f26";
    body.style.color = "#ffffff";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "#000000";
  }
}
