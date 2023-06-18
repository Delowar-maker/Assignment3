function detectBrowser() {
  var browserName = "";
  var browserVersion = "";

  var userAgent = navigator.userAgent;
  var browserMatches = userAgent.match(
    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
  );

  if (browserMatches && browserMatches.length >= 3) {
    browserName = browserMatches[1].toLowerCase();
    browserVersion = browserMatches[2];
  }

  return {
    name: browserName,
    version: browserVersion,
  };
}

var browserInfo = detectBrowser();

var browserInfoElement = document.getElementById("browser-info");
browserInfoElement.innerHTML =
  "Browser Name: " +
  browserInfo.name +
  "<br>" +
  "Browser Version: " +
  browserInfo.version;
