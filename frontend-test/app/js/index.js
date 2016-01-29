function error(err) {
  console.log(err.message);
};

function success(position) {
  console.log('getposition');
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var location = [latitude,longitude];
  console.log(location);
  return location;
};

function checkGeoLocation() {
  if ("geolocation" in navigator) {
    console.log('pass');
    var location = navigator.geolocation.getCurrentPosition(success, error)
    return location;
  } else {
    var latitude = 47.5458;
    var longitude = -122.3136;
    var location = [latitude,longitude];
    console.log("Sorry, no position available");
    return location;
  }

};

function callApi() {
  var loc = checkGeoLocation();

  // //api call did not work due to cross origin request
  // //var url = "codingchallenge.datasphere.com:8084/getbusinesses/?location=47.5458,-122.31361&pg=1&pz=12&callback=mycallback";
  // $.getJSON('/loc/', function(data) {
  // //example test to generate obj.businessname
  // var button = document.createElement('button');
  // button.setAttribute("id", "button");
  // button.innerHTML = data[0].city;
  // document.body.appendChild(button);
  // });

  //hard coded the data here
  var array = [{
      businessname: "Revolver Vintage Interiors",
      city: "Seattle",
      state: "WA",
      category: "Furniture Stores",
      distance: "0.6",
      coupons: [
      {
      title: "$50 for $75 Certificate"
      }
      ]
    },
    {
      businessname: "Seattle Pilot Academy",
      city: "Seattle",
      state: "WA",
      category: "Flight Instruction",
      distance: "0.1",
      coupons: [
      {
      title: "49% Off Lesson from Seattle Pilot Academy"
      }
      ]
    },
      {
      businessname: "Guitar Lessons with Darren Loucas",
      city: "Seattle",
      state: "WA",
      category: "Musical Instruments & Teachers",
      distance: "0.1",
      coupons: [
      {
      title: "$55 for $65 Certificate"
      }
      ]
    },
      {
      businessname: "Sound Organizing, LLC",
      city: "Seattle",
      state: "WA",
      category: "Home Organization",
      distance: "0.3",
      coupons: [
      {
      title: "$65 for $130 Certificate"
      }
      ]
    },
      {
      businessname: "Seaplane Scenics LLC",
      city: "Seattle",
      state: "WA",
      category: "Car Dealers",
      distance: "0.2",
      coupons: [
      {
      title: "31% Off Scenic Landplane Flight"
      }
      ]
    },
      {
      businessname: "Harbor Freight Tools",
      city: "Seattle",
      state: "WA",
      category: "Hardware Stores",
      distance: "0.4",
      coupons: [
      {
      title: "$78 OFF CENTRAL PNEUMATIC 1/2 Twin Hammer Air Impact Wrench"
      },
      {
      title: "50% OFF CHICAGO ELECTRIC Mig-Flux Welding Cart"
      },
      {
      title: "$341 OFF CENTRAL PNEUMATIC Air Compressor"
      },
      {
      title: "60% OFF PITTSBURGH 7-pc. Ratcheting Combination Wrench sets"
      },
      {
      title: "$78 OFF CENTRAL PNEUMATIC 1/2&quot; Twin Hammer Air Impact Wrench"
      },
      {
      title: "$140 OFF Bunker Hill Security 8 Channel Surveillance DVR"
      },
      {
      title: "20% OFF any single item"
      },
      {
      title: "$40 OFF 30&quot; Service Cart with Locking Drawer"
      },
      {
      title: "$60 OFF CEN-TECH Digital Inspection Camera with Recorder"
      },
      {
      title: "Up to 89% OFF Liquidation sale"
      },
      {
      title: "70% OFF HaulMaster 40&quot; x 72&quot; Mover's Blanket"
      },
      {
      title: "$75 OFF PITTSBURGH RAPID PUMP Heavy Duty Floor Jack"
      },
      {
      title: "$79 OFF drillmaster 18 Volt 3/8&quot; Drill/Driver & Flashlight Kit"
      },
      {
      title: "59% OFF PITTSBURGH 32-pc. Screwdriver set"
      },
      {
      title: "49% OFF Haul Master 1000 lb. Capacity Swing-Back Trailer Jack"
      },
      {
      title: "$132 OFF Electric Winch with Remote Control & Automatic Brake"
      },
      {
      title: "59% OFF drillmaster 3/8&quot; Reversible Drill"
      },
      {
      title: "65% OFF drillmaster 18 Volt Cordless 3/8&quot; Drill/Driver"
      },
      {
      title: "$235 OFF WINDSOR DESIGN 60&quot; 4 Drawer Hardwood Workbench"
      },
      {
      title: "83% OFF PITTSBURGH 16 oz. Hammers"
      }
      ]
    }
  ];

  for (var i=0; i<array.length; i++) {

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
    city.innerHTML = array[i].city + ', ' + array[i].state;
    location.appendChild(city);

    var distance = document.createElement('div');
    distance.setAttribute("id", "distance");
    distance.innerHTML = array[i].distance + ' mi';
    location.appendChild(distance);

    //since image is not coming in, used the same image for all forms
    var imgdiv = document.createElement('div');
    imgdiv.setAttribute("class", "img-size");
    imgdiv.innerHTML = '<img src="http://content.secondspace.com/frontend-test/tile1-main.jpg">';
    form.appendChild(imgdiv);

    var category = document.createElement('div');
    category.setAttribute("id", "category");
    category.innerHTML = '<h2>' + array[i].category + '</h2>';
    form.appendChild(category);

    var businessname = document.createElement('div');
    businessname.setAttribute("id", "businessname");
    businessname.innerHTML = '<h2>' + array[i].businessname + '</h2>';
    form.appendChild(businessname);

    var table = document.createElement('table');
    form.appendChild(table);
    if(array[i].coupons.length < 2) {
      for (var j=0; j < array[i].coupons.length; j++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        var firstColumn = tr.appendChild(document.createElement('td'));
        firstColumn.setAttribute("id", "first-column");
        firstColumn.innerHTML = '<h2>' + array[i].coupons[j].title + '</h2>';
        table.appendChild(firstColumn);

        var secondColumn = tr.appendChild(document.createElement('td'));
        secondColumn.setAttribute("id", "second-column");
        secondColumn.innerHTML = '<h2>&gt;</h2>';
        table.appendChild(secondColumn);
      }
    }
    if (array[i].coupons.length > 2) {
      var tr = document.createElement('tr');
      table.appendChild(tr);
      var firstColumn = tr.appendChild(document.createElement('td'));
      firstColumn.setAttribute("id", "first-column");
      firstColumn.innerHTML = '<h2>' + array[i].coupons[j].title + '</h2>';
      table.appendChild(firstColumn);

      var secondColumn = tr.appendChild(document.createElement('td'));
      secondColumn.setAttribute("id", "second-column");
      secondColumn.innerHTML = '<h2>&gt;</h2>';
      table.appendChild(secondColumn);

      var tr = document.createElement('tr');
      table.appendChild(tr);
      var seeAll = tr.appendChild(document.createElement('td'));
      seeAll.setAttribute("id", "see-all");
      seeAll.innerHTML = '<h1>See All ' + '<button>4</button>' + '</h1>';
      table.appendChild(seeAll);
    }
  }
}

callApi();
