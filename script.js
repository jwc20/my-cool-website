/******************************************
 * Snow Effect Script- By Altan d.o.o. (http://www.altan.hr/snow/index.html)
 * Visit Dynamic Drive DHTML code library (http://www.dynamicdrive.com/) for full source code
 * Last updated Nov 9th, 05' by DD. This notice must stay intact for use
 ******************************************/
function openwindow() {
  window.open("autumn_effect.htm", "", "width=350,height=500");
}
//Configure below to change URL path to the snow image
var snowsrc = "./img/money.gif";
// Configure below to change number of snow to render
var no = 8;
// Configure whether snow should disappear after x seconds (0=never):
var hidesnowtime = 0;
// Configure how much snow should drop down before fading ("windowheight" or "pageheight")
var snowdistance = "pageheight";
///////////Stop Config//////////////////////////////////
var ie4up = document.all ? 1 : 0;
var ns6up = document.getElementById && !document.all ? 1 : 0;

function iecompattest() {
  return document.compatMode && document.compatMode != "BackCompat"
    ? document.documentElement
    : document.body;
}
var dx, xp, yp; // coordinate and position variables
var am, stx, sty; // amplitude and step variables
var i,
  doc_width = 800,
  doc_height = 600;
if (ns6up) {
  doc_width = self.innerWidth;
  doc_height = self.innerHeight;
} else if (ie4up) {
  doc_width = iecompattest().clientWidth;
  doc_height = iecompattest().clientHeight;
}
dx = new Array();
xp = new Array();
yp = new Array();
am = new Array();
stx = new Array();
sty = new Array();
snowsrc = snowsrc.indexOf("dynamicdrive.com") != -1 ? "snow.gif" : snowsrc;
for (i = 0; i < no; ++i) {
  dx[i] = 0; // set coordinate variables
  xp[i] = Math.random() * (doc_width - 50); // set position variables
  yp[i] = Math.random() * doc_height;
  am[i] = Math.random() * 20; // set amplitude variables
  stx[i] = 0.02 + Math.random() / 10; // set step variables
  sty[i] = 0.7 + Math.random(); // set step variables
  if (ie4up || ns6up) {
    if (i == 0) {
      document.write(
        '<div id="dot' +
          i +
          '" style="POSITION: absolute; Z-INDEX: ' +
          i +
          '; VISIBILITY: visible; TOP: 15px; LEFT: 15px;"><a href="http://dynamicdrive.com"><img src=\'' +
          snowsrc +
          '\' border="0"></a></div>'
      );
    } else {
      document.write(
        '<div id="dot' +
          i +
          '" style="POSITION: absolute; Z-INDEX: ' +
          i +
          "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" +
          snowsrc +
          '\' border="0"></div>'
      );
    }
  }
}

function snowIE_NS6() {
  // IE and NS6 main animation function
  doc_width = ns6up ? window.innerWidth - 10 : iecompattest().clientWidth - 10;
  doc_height =
    window.innerHeight && snowdistance == "windowheight"
      ? window.innerHeight
      : ie4up && snowdistance == "windowheight"
      ? iecompattest().clientHeight
      : ie4up && !window.opera && snowdistance == "pageheight"
      ? iecompattest().scrollHeight
      : iecompattest().offsetHeight;
  if (snowdistance == "windowheight") {
    doc_height = window.innerHeight || iecompattest().clientHeight;
  } else {
    doc_height = iecompattest().scrollHeight;
  }
  for (i = 0; i < no; ++i) {
    // iterate for every dot
    yp[i] += sty[i];
    if (yp[i] > doc_height - 50) {
      xp[i] = Math.random() * (doc_width - am[i] - 30);
      yp[i] = 0;
      stx[i] = 0.02 + Math.random() / 10;
      sty[i] = 0.7 + Math.random();
    }
    dx[i] += stx[i];
    document.getElementById("dot" + i).style.top = yp[i] + "px";
    document.getElementById("dot" + i).style.left =
      xp[i] + am[i] * Math.sin(dx[i]) + "px";
  }
  snowtimer = setTimeout("snowIE_NS6()", 10);
}

function hidesnow() {
  if (window.snowtimer) clearTimeout(snowtimer);
  for (i = 0; i < no; i++)
    document.getElementById("dot" + i).style.visibility = "hidden";
}
if (ie4up || ns6up) {
  snowIE_NS6();
  if (hidesnowtime > 0) setTimeout("hidesnow()", hidesnowtime * 1000);
}

/******************************JS DOM*******************************************/
const h2 = document.createElement("h2");
h2.textContent = "Welcome to my COOL WEBSITE";
h2.appendChild(document.createElement("br"));
h2.appendChild(document.createElement("br"));
h2.appendChild(document.createElement("br"));
document.querySelector("body").appendChild(h2);



var sound = new Howl({
  xhr: {
    method: 'GET',
  },
  src: ['./audio/ohshitimfeelingit.mp3']
});

sound.play();


const fatCat = document.createElement("img");
fatCat.src = "./img/fatcat.webp";
document.querySelector("body").appendChild(fatCat);
fatCat.addEventListener("click", function () {
  alert("Meow!");
});

const about_1 = document.createElement("h2");
about_1.textContent = "About me";
document.querySelector("body").appendChild(about_1);

// here you see the life of a person with woefully misaligned priorities
const about_2 = document.createElement("p");
about_2.textContent =
  "Jae is a highly motivated, result-oriented, self-proclaimed software engineer with a background in applied mathematics. He has interest in building tracking applications for health/sport, finance, and time management since excel spreadsheets are boring. Furthermore, he has made scraper API's such as fcis-api and iwf-api since grabbing data from a website without the owners' permission is exciting. Jae claims to love exercise despite never doing any.";
document.querySelector("body").appendChild(about_2);

const desc = document.createElement("p");
desc.textContent =
  "Jae love cats, programming, pizza, and writing about himself in third-person";
document.querySelector("body").appendChild(desc);
