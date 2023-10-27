var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  },
};

var Body = {
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
};

function dayNightHandler(self) {
  if (self.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";
    Links.setColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("purple");
    self.value = "night";
    Links.setColor("purple");
  }
}
