
  function checkGeoLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude;
        console.log(location);
        return latitude,longitude;
      });
    } else {
      var latitude = 47.5458;
      var longitude = -122.3136;
      console.log("Sorry, no position available");
      return latitude, longitude;
    }

  };
// var url = "http://codingchallenge.datasphere.com:8084/getbusinesses/?location=47.5458,-122.31361&pg=1&pz=12&callback=mycallback";
    //$.getJSONP(url, function(data) {
      // $.each(data, function() {

        //$('button').text(obj.businessname)
        //console.log(data.city);
      //});
    //});
  function callApi() {

    var url = "http://codingchallenge.datasphere.com:8084/getbusinesses/?location=47.5458,-122.31361&pg=1&pz=12&callback=mycallback";
    $.get(url, function(data) {


      $('button').text(obj.businessname)
        console.log(data.city);
      });
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
        title: "$140 OFF Bunker Hill Security 8 Channel Surveillance DVR"
        },
        {
        title: "50% OFF CHICAGO ELECTRIC Mig-Flux Welding Cart"
        },
        {
        title: "$235 OFF WINDSOR DESIGN 60 4 Drawer Hardwood Workbench"
        },
        {
        title: "60% OFF PITTSBURGH 7-pc. Ratcheting Combination Wrench sets"
        },
        {
        title: "20% OFF any single item"
        },
        {
        title: "$75 OFF PITTSBURGH RAPID PUMP Heavy Duty Floor Jack"
        },
        {
        title: "$341 OFF CENTRAL PNEUMATIC Air Compressor"
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
        title: "65% OFF drillmaster 18 Volt Cordless 3/8 Drill/Driver"
        },
        {
        title: "70 OFF HaulMaster 40  72 Movers Blanket"
        },
        {
        title: "40 OFF 30 Service Cart with Locking Drawer"
        },
        {
        title: "Up to 60% OFF Liquidation sale"
        },
        {
        title: "59% OFF drillmaster 3/8 Reversible Drill"
        },
        {
        title: "$79 OFF drillmaster 18 Volt 3/8 Drill/Driver & Flashlight Kit"
        },
        {
        title: "83% OFF PITTSBURGH 16 oz. Hammers"
        },
        {
        title: "$60 OFF CEN-TECH Digital Inspection Camera with Recorder"
        },
        {
        title: "Up to 89% OFF Liquidation sale"
        }
        ]
        }
    ];

    for (var i=0; i<array.length; i++) {

      var form = document.createElement('div');
      form.setAttribute('id', "form");
      document.body.appendChild(form);

      var relative = document.createElement('div');
      relative.setAttribute('id', "relative");
      relative.appendChild = '<img src="http://content.secondspace.com/frontend-test/tile1-logo.jpg">';
      document.body.appendChild(relative);

      var location = document.createElement('div');
      location.setAttribute('id', "location");
      document.body.appendChild(location);

      var pin = document.createElement('div');
      pin.setAttribute('id', "pin");
      pin.innerHTML = '<img src="http://content.secondspace.com/frontend-test/pin.png">';
      document.body.appendChild(pin);

      var city = document.createElement('div');
      city.setAttribute('id', "city");
      city.innerHTML = array[i].city;
      document.body.appendChild(city);

      var distance = document.createElement('div');
      distance.setAttribute('id', "distance");
      distance.innerHTML = array[i].distance;
      document.body.appendChild(distance);

      var imgdiv = document.createElement('div');
      imgdiv.innerHTML = '<img src="http://content.secondspace.com/frontend-test/tile1-main.jpg">';
      document.body.appendChild(imgdiv);

      var category = document.createElement('div');
      category.setAttribute('id', "category");
      category.innerHTML = array[i].category;
      document.body.appendChild(category);

      var businessname = document.createElement('div');
      businessname.setAttribute('id', "businessname");
      businessname.innerHTML = array[i].businessname;
      document.body.appendChild(businessname);

      var table = document.createElement('table');
      for (var j=0; j< array[i].coupons.length; j++) {
        var tr = document.createElement('tr');
        var title = tr.appendChild(document.createElement('td'));
        title.setAttribute('id', "first-column");
        title.innerHTML = array[i].coupons[j].title;
        document.body.appendChild(title);

        var secondColumn = tr.appendChild(document.createElement('td'));
        secondColumn.setAttribute('id', "second-column");
        secondColumn.innerHTML = '&gt;';
        document.body.appendChild(secondColumn);
      }

    }
    console.log("Testing");
  }

  callApi();
