
function error(err) {
  console.log(err.message);
};

function success(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var location = [latitude,longitude];
  console.log(location);
  $.getJSON('/business/?location=' + location, function(data) {
    business_data(data);
  });
  return location;
};

function checkGeoLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Sorry, no position available");
  }
};

function business_data(info) {
  for (var i=0; i<info.businesses.length; i++) {

    var form = document.createElement('div');
    form.setAttribute("id", "form");
    document.body.appendChild(form);

    //since image is not coming in, used the same image for all forms
    var relative = document.createElement('div');
    relative.setAttribute("class", "relative");
    relative.innerHTML = '<img src="http://content.secondspace.com/frontend-test/tile1-logo.jpg">';
    form.appendChild(relative);

    var location = document.createElement('div');
    location.setAttribute("id", "location");
    form.appendChild(location);

    var pin = document.createElement('div');
    pin.setAttribute("id", "pin");
    pin.innerHTML = '<img src="http://content.secondspace.com/frontend-test/pin.png">';
    location.appendChild(pin);

    var city = document.createElement('div');
    city.setAttribute("id", "city");
    city.innerHTML = info.businesses[i].city + ', ' + info.businesses[i].state;
    location.appendChild(city);

    var distance = document.createElement('div');
    distance.setAttribute("id", "distance");
    distance.innerHTML = info.businesses[i].distance + ' mi';
    location.appendChild(distance);

    //since image is not coming in, used the same image for all forms
    var imgdiv = document.createElement('div');
    imgdiv.setAttribute("class", "img-size");
    imgdiv.innerHTML = '<img src="http://content.secondspace.com/frontend-test/tile1-main.jpg">';
    form.appendChild(imgdiv);

    var category = document.createElement('div');
    category.setAttribute("id", "category");
    category.innerHTML = '<h2>' + info.businesses[i].category + '</h2>';
    form.appendChild(category);

    var businessname = document.createElement('div');
    businessname.setAttribute("id", "businessname");
    businessname.innerHTML = '<h2>' + info.businesses[i].businessname + '</h2>';
    form.appendChild(businessname);

    var table = document.createElement('table');
    form.appendChild(table);
    if(info.businesses[i].coupons.length <= 2) {
      for (var j=0; j < info.businesses[i].coupons.length; j++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        var firstColumn = tr.appendChild(document.createElement('td'));
        firstColumn.setAttribute("id", "first-column");
        firstColumn.innerHTML = '<h2>' + info.businesses[i].coupons[j].title + '</h2>';
        table.appendChild(firstColumn);

        var secondColumn = tr.appendChild(document.createElement('td'));
        secondColumn.setAttribute("id", "second-column");
        secondColumn.innerHTML = '<h2>&gt;</h2>';
        table.appendChild(secondColumn);
      }
    }
    if (info.businesses[i].coupons.length > 2) {
      for (var j=0; j < 2; j++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        var firstColumn = tr.appendChild(document.createElement('td'));
        firstColumn.setAttribute("id", "first-column");
        firstColumn.innerHTML = '<h2>' + info.businesses[i].coupons[j].title + '</h2>';
        table.appendChild(firstColumn);

        var secondColumn = tr.appendChild(document.createElement('td'));
        secondColumn.setAttribute("id", "second-column");
        secondColumn.innerHTML = '<h2>&gt;</h2>';
        table.appendChild(secondColumn);
      }
        var tr = document.createElement('tr');
        table.appendChild(tr);
        var seeAll = tr.appendChild(document.createElement('td'));
        seeAll.setAttribute("id", "see-all");
        seeAll.innerHTML = '<h1>See All ' + '<button>'+ (info.businesses[i].coupons.length - 2) +'</button>' + '</h1>';
        table.appendChild(seeAll);

    }
  }
 }

checkGeoLocation();
