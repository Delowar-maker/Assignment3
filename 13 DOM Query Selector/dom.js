function changeColor() {
  var paragraphs = document.querySelectorAll(".class1");
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
  }
}

changeColor();
