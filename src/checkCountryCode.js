export function checkCountryCode(nameTimeline) {
  if (nameTimeline === "usa") {
    nameTimeline = "us";
  } else if (nameTimeline === "taiwan") {
    nameTimeline = "taiwan*";
  } else if (nameTimeline === "isle of man") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline === "aruba") {
    nameTimeline = "netherlands";
  } else if (nameTimeline === "sint maarten") {
    nameTimeline = "netherlands";
  } else if (nameTimeline === "st. vincent grenadines") {
    nameTimeline = "saint vincent and the grenadines";
  } else if (nameTimeline === "timor-leste") {
    nameTimeline = "East Timor";
  } else if (nameTimeline === "montserrat") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline === "gambia") {
    nameTimeline = "gambia, the";
  } else if (nameTimeline === "cayman islands") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline === "bermuda") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline === "greenland") {
    nameTimeline = "denmark";
  } else if (nameTimeline === "st. barth") {
    nameTimeline = "saint barthelemy";
  } else if (nameTimeline === "congo") {
    nameTimeline = "congo (brazzaville)";
  } else if (nameTimeline === "saint martin") {
    nameTimeline = "france";
  } else if (nameTimeline === "gibraltar") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline === "mayotte") {
    nameTimeline = "france";
  } else if (nameTimeline === "bahamas") {
    nameTimeline = "bahamas, the";
  } else if (nameTimeline === "french guiana") {
    nameTimeline = "france";
  } else if (nameTimeline === "u.s. virgin islands") {
    nameTimeline = "us";
  } else if (nameTimeline === "curaçao") {
    nameTimeline = "netherlands";
  } else if (nameTimeline === "puerto rico") {
    nameTimeline = "us";
  } else if (nameTimeline === "french polynesia") {
    nameTimeline = "france";
  } else if (nameTimeline === "ivory coast") {
    nameTimeline = "Cote d'Ivoire";
  } else if (nameTimeline === "macao") {
    nameTimeline = "china";
  } else if (nameTimeline === "drc") {
    nameTimeline = "congo (kinshasa)";
  } else if (nameTimeline === "channel islands") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline === "réunion") {
    nameTimeline = "france";
  } else if (nameTimeline === "guadeloupe") {
    nameTimeline = "france";
  } else if (nameTimeline === "faeroe islands") {
    nameTimeline = "Denmark";
  } else if (nameTimeline === "uae") {
    nameTimeline = "United Arab Emirates";
  } else if (nameTimeline === "diamond princess") {
    nameTimeline = "australia";
  } else if (nameTimeline === "hong kong") {
    nameTimeline = "china";
  } else if (nameTimeline === "uk") {
    nameTimeline = "united kingdom";
  } else if (nameTimeline === "car") {
    nameTimeline = "central african republic";
  }

  return nameTimeline;
}

export const countryCodes = {
  Afghanistan: "AF",
  "Aland Islands": "AX",
  Albania: "AL",
  Algeria: "DZ",
  "American Samoa": "AS",
  Andorra: "AD",
  Angola: "AO",
  Anguilla: "AI",
  Antarctica: "AQ",
  "Antigua And Barbuda": "AG",
  Argentina: "AR",
  Armenia: "AM",
  Aruba: "AW",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bermuda: "BM",
  Bhutan: "BT",
  Bolivia: "BO",
  "Bosnia and Herzegovina": "BA",
  Botswana: "BW",
  "Bouvet Island": "BV",
  Brazil: "BR",
  "British Indian Ocean Territory": "IO",
  Brunei: "BN",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  "Cape Verde": "CV",
  "Cayman Islands": "KY",
  "Central African Republic": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  "Christmas Island": "CX",
  "Cocos (Keeling) Islands": "CC",
  Colombia: "CO",
  Comoros: "KM",
  Congo: "CG",
  DRC: "CD",
  "Cook Islands": "CK",
  "Costa Rica": "CR",
  "Ivory Coast": "CI",
  Croatia: "HR",
  Cuba: "CU",
  Cyprus: "CY",
  Czechia: "CZ",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Republic": "DO",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Ethiopia: "ET",
  "Falkland Islands": "FK",
  "Faeroe Islands": "FO",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  "French Guiana": "GF",
  "French Polynesia": "PF",
  "French Southern Territories": "TF",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Gibraltar: "GI",
  Greece: "GR",
  Greenland: "GL",
  Grenada: "GD",
  Guadeloupe: "GP",
  Guam: "GU",
  Guatemala: "GT",
  Guernsey: "GG",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  "Heard Island & Mcdonald Islands": "HM",
  "Holy See (Vatican City State)": "VA",
  Honduras: "HN",
  "Hong Kong": "HK",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Ireland: "IE",
  "Isle Of Man": "IM",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  "Channel Islands": "JE",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Korea: "KR",
  "S. Korea": "KR",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  "Lao People's Democratic Republic": "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  "Libyan Arab Jamahiriya": "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Macao: "MO",
  Macedonia: "MK",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  "Marshall Islands": "MH",
  Martinique: "MQ",
  Mauritania: "MR",
  Mauritius: "MU",
  Mayotte: "YT",
  Mexico: "MX",
  "Micronesia, Federated States Of": "FM",
  Moldova: "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Montserrat: "MS",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  Netherlands: "NL",
  "Netherlands Antilles": "AN",
  "New Caledonia": "NC",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  Niue: "NU",
  "Norfolk Island": "NF",
  "North Macedonia": "MP",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  Palestine: "PS",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  Pitcairn: "PN",
  Poland: "PL",
  Portugal: "PT",
  "Puerto Rico": "PR",
  Qatar: "QA",
  Réunion: "RE",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  "Saint Barthelemy": "BL",
  "St. Barth": "BL",
  "Saint Helena": "SH",
  "Saint Kitts And Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Martin": "MF",
  "Saint Pierre And Miquelon": "PM",
  "St. Vincent Grenadines": "VC",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome And Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Georgia And Sandwich Isl.": "GS",
  Spain: "ES",
  "Sri Lanka": "LK",
  Sudan: "SD",
  Suriname: "SR",
  "Svalbard And Jan Mayen": "SJ",
  Swaziland: "SZ",
  Sweden: "SE",
  Switzerland: "CH",
  "Syrian Arab Republic": "SY",
  Taiwan: "TW",
  Tajikistan: "TJ",
  Tanzania: "TZ",
  Thailand: "TH",
  "Timor-Leste": "TL",
  Togo: "TG",
  Tokelau: "TK",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  "Turks And Caicos Islands": "TC",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  UAE: "AE",
  UK: "GB",
  USA: "US",
  "United States Outlying Islands": "UM",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  Venezuela: "VE",
  Vietnam: "VN",
  "Virgin Islands, British": "VG",
  "U.S. Virgin Islands": "VI",
  "Wallis And Futuna": "WF",
  "Western Sahara": "EH",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
  Curaçao: "CW",
};
