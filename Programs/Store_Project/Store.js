// Setting items for later
var array = []
var pics = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRpq2rOfwl_fW2bZfXGar5HRBYyrYykbsHpJRwem_ISNxyr4x6", "https://ii2.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/25130_XXX_v1.tif&wid=650&cvt=jpeg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI5GMGRxXO9qNMCwsHbp11iFRKMP_NYwTRcAEXHLf18JaeafrY", "https://images-na.ssl-images-amazon.com/images/I/A1kwnYzMWbL._SX425_.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn8_h2OUQLpFX2c3YP7TezC1opcE5fNOsxjKmjotOLFQimLwne", "https://images-na.ssl-images-amazon.com/images/I/61Gb8HI9FOL._SX425_.jpg"];
var caps = ["Dark Brown Chair", "Wood Chair", "w/ Pillow", "No Pillow", "Red", "Classroom set"];
var prices = [200, 200, 300, 400, 500, 600];
var items = 0;
var nums = 1;
var base = 0;
// Setting items for later


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
    array.push(nums) // now we actually have an array of items.
    console.log(array)
}






// time
// to get this to work put this in html
//
//
//    <body onload="digi()">
//    <p id="tt"></p>
//
//
function digi() {
  var date = new Date(),
      hour = date.getHours(),
      minute = checkTime(date.getMinutes()),
      ss = checkTime(date.getSeconds());

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
