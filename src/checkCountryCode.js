function checkCountryCode(nameTimeline) {
  if (nameTimeline == "usa") {
    nameTimeline = "us";
  } else if (nameTimeline == "taiwan") {
    nameTimeline = "taiwan*";
  } else if (nameTimeline == "isle of man") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline == "aruba") {
    nameTimeline = "netherlands";
  } else if (nameTimeline == "sint maarten") {
    nameTimeline = "netherlands";
  } else if (nameTimeline == "st. vincent grenadines") {
    nameTimeline = "saint vincent and the grenadines";
  } else if (nameTimeline == "timor-leste") {
    nameTimeline = "East Timor";
  } else if (nameTimeline == "montserrat") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline == "gambia") {
    nameTimeline = "gambia, the";
  } else if (nameTimeline == "cayman islands") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline == "bermuda") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline == "greenland") {
    nameTimeline = "denmark";
  } else if (nameTimeline == "st. barth") {
    nameTimeline = "saint barthelemy";
  } else if (nameTimeline == "congo") {
    nameTimeline = "congo (brazzaville)";
  } else if (nameTimeline == "saint martin") {
    nameTimeline = "france";
  } else if (nameTimeline == "gibraltar") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline == "mayotte") {
    nameTimeline = "france";
  } else if (nameTimeline == "bahamas") {
    nameTimeline = "bahamas, the";
  } else if (nameTimeline == "french guiana") {
    nameTimeline = "france";
  } else if (nameTimeline == "u.s. virgin islands") {
    nameTimeline = "us";
  } else if (nameTimeline == "curaçao") {
    nameTimeline = "netherlands";
  } else if (nameTimeline == "puerto rico") {
    nameTimeline = "us";
  } else if (nameTimeline == "french polynesia") {
    nameTimeline = "france";
  } else if (nameTimeline == "ivory coast") {
    nameTimeline = "Cote d'Ivoire";
  } else if (nameTimeline == "macao") {
    nameTimeline = "china";
  } else if (nameTimeline == "drc") {
    nameTimeline = "congo (kinshasa)";
  } else if (nameTimeline == "channel islands") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline == "réunion") {
    nameTimeline = "france";
  } else if (nameTimeline == "guadeloupe") {
    nameTimeline = "france";
  } else if (nameTimeline == "faeroe islands") {
    nameTimeline = "Denmark";
  } else if (nameTimeline == "uae") {
    nameTimeline = "United Arab Emirates";
  } else if (nameTimeline == "diamond princess") {
    nameTimeline = "australia";
  } else if (nameTimeline == "hong kong") {
    nameTimeline = "china";
  } else if (nameTimeline == "uk") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline == "car") {
    nameTimeline = "central african republic";
  }

  return nameTimeline;
}

module.exports = checkCountryCode;
