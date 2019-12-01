var array = []
var pics = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRpq2rOfwl_fW2bZfXGar5HRBYyrYykbsHpJRwem_ISNxyr4x6", "https://ii2.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/25130_XXX_v1.tif&wid=650&cvt=jpeg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI5GMGRxXO9qNMCwsHbp11iFRKMP_NYwTRcAEXHLf18JaeafrY", "https://images-na.ssl-images-amazon.com/images/I/A1kwnYzMWbL._SX425_.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn8_h2OUQLpFX2c3YP7TezC1opcE5fNOsxjKmjotOLFQimLwne", "https://images-na.ssl-images-amazon.com/images/I/61Gb8HI9FOL._SX425_.jpg"];
var caps = ["Dark Brown Chair", "Wood Chair", "w/ Pillow", "No Pillow", "Red", "Classroom set"];
var prices = [200, 200, 300, 400, 500, 600];
var divs =["main_page","locandhour","aboutus","cart"];
var items = 0;
var nums = 1;
var base = 0;


function Pic(num) {
    nums = num;
    document.getElementById("mainImg").src = pics[num];
    document.getElementById("caps").innerHTML = caps[num];
    document.getElementById("price").innerHTML = prices[num];
}

function ToCart() {
    var total = prices[nums];
    document.getElementById("items").innerHTML = items + 1;
    document.getElementById("total").innerHTML = total + base;
    items = items + 1;
    base = total + base;
    updatewhatisincart(nums)
}

function updatewhatisincart(nums) {
    array.push(nums) // TODO: Cart
}

function toggleBackground(num){
for(var i = 0; i < 4; i++)
  (i==num) ? document.getElementById(divs[i]).style.display = "block" : document.getElementById(divs[i]).style.display = "none";
}

function digi() {
  var date = new Date(),
      hour = date.getHours(),
      day = date.getDay();
      minute = checkTime(date.getMinutes()),
      ss = checkTime(date.getSeconds());
      document.getElementById("day" + day).style.fontWeight = "bolder";
      document.getElementById("day" + day + "_").style.fontWeight = "bolder";
  function checkTime(i) {
    if( i < 10 ) {
      i = "0" + i;
    }
    return i;
  }

if ( hour >= 12 ) {
  if(hour != 12){
    hour = hour - 12;
  }
    hour = checkTime(hour);
    document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" PM";
}
else {
  document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" AM";;
}
var time = setTimeout(digi,1000);
}


$(document).ready(function() {

  const date = new Date(),
    day = date.getDay(),
    hour = date.getHours(),
    minutes = date.getMinutes(),
    minFrom60 = 60 - minutes,
    openMT = (8 < hour && hour < 18) && (0 < day && day < 5) ? true : false,
    openFS = (8 < hour && hour < 20) && (day === 5 || day === 6) ? true : false,
    closedMT = (hour > 17 || hour < 9) && (0 < day && day < 5) ? true : false,
    closedFS = (hour > 19 || hour < 9) && (day === 5 || day === 6) ? true : false,
    open = $('<strong>Open</strong>').css('color', '#0FC1A1'),
    closed = $('<strong>Closed</strong>').css('color', '#5D414D');
  const openFor = (() => {
    let x = 0;
    if (openMT) {
      x = 17 - hour;
    }
    if (openFS) {
      x = 19 - hour;
    }
    return x;
  })();

  const closedFor = (() => {
    var x = 0;
    if (closedMT || closedFS) {
      if (hour === 0) {
        x = 9;
      } else if (hour > 0 && hour < 17) {
        x = 8 - hour;
      } else if (hour > 17) {
        x = 33 - hour;
      }
    } else { //if Sunday
      if (hour === 0) {
        x = 33;
      } else if (hour > 0 && hour < 24) {
        x = 33 - hour;
      }
    }
    return x;
  })();

  if (openMT || openFS) {
    $("span").html(open);
    $("body").css("background", "#0FC1A1");
    if (openFor === 0) {
      $(".info").html("<h1>We're open for " + minFrom60 + " more minutes</h1>");
    } else if (openFor === 1) {
      $(".info").html("<h1>We're open for another 1 hour and " + minFrom60 + " minutes</h1>");
    } else {
      $(".info").html("<h1>We're open for another " + openFor + " hours and " + minFrom60 + " minutes</h1>");
    }
  } else {
    $("span").html(closed);
    $("body").css("background", "#5D414D");
    if (closedFor === 0) {
      $(".info").html("<h1>We'll be closed for another " + minFrom60 + " minutes</h1>");
    } else if (closedFor === 1) {
      $(".info").html("<h1>We'll be closed for another 1 hour and " + minFrom60 + " minutes</h1>");
    } else {
      $(".info").html("<h1>We'll be closed for another " + closedFor + " hours and " + minFrom60 + " minutes</h1>");
    }
  }

});
