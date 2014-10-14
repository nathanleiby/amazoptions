// console.log ("hello");
// var quest = require('quest');

// var listing_page = "http://www.amazon.com/gp/aw/d/B006Y5UV4A/ref=aw_d_v_pc?vid=ALL"
// var options = {
//   "uri": listing_page,
//   "method": "GET"
// }

// var quest_callback = function(err, response, body) {
//   console.log ("in the callback");
//   if (! err && response.statusCode === 200) {
//     console.log(body);
//   }
// }

// console.log ("about to quest");
// quest(options, quest_callback);

var htmlparser = require('htmlparser');
var sys = require('sys');

// var priceRegex = "^\d+(.\d{1,2})?";

var getPriceFromLink = function getPriceFromLink(link) {
  var rawHtml = link;
  var handler = new htmlparser.DefaultHandler(function (error, dom) {
    if (error) {
      console.log("error");
    }
    else {

    }

  });
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(rawHtml);

  var dom = handler.dom;
  for (i = 0; i < dom.length; i++) {
    if (dom[i].type == 'text' && dom[i].raw[0] == "$") {
      return dom[i].raw.substr(0,dom[i].raw.length - 5)
    }
  }
  // TODO: Handle no price found
  return "?";
}

module.exports = {
  "getPriceFromLink" : getPriceFromLink
}
