var Links = {
    setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //   alist[i].style.color = color;
        //   i = i + 1;
        // }
        $('a').css("color", color)
    }
}
var Body = {
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color},
        $('body').css("background-color", color)
    },
    setColor: function (color) {
        //   document.querySelector('body').style.color = color
        $('body').css("color", color)
    }

}

function nightDayhandler(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('yellow');
    } else {
        Body.setBackgroundColor('beige');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('black');
    }
}