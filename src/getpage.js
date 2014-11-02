// console.log ("hello");
// var quest = require('quest');

// var listing_page = "http://www.amazon.com/gp/aw/d/B006Y5UV4A/ref=aw_d_v_pc?vid=ALL"
  // http://www.amazon.com/gp/aw/ol/B009ZEAUJI/ref=mw_dp_olp?o=New&op=1&vs=1 <-- this product is 2TB red HD
  // it has no price listed on the main page but does have prices from 3rd party sellers
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

var getItemsFromPage = function getItemsFromPage(rawHtml) {
  try {
    var items = _parsePage(rawHtml)['items'];
    return items;
  } catch (e) {
    return [];
  }
}

var getPagingFromPage = function getItemsFromPage(rawHtml) {
  try {
    var paging = _parsePage(rawHtml)['paging'];
    return paging;
  } catch (e) {
    return [];
  }
}

var _parsePage = function(rawHtml) {
  // find all HTML written between the first and second 'go' buttons
  var goButtonHtml = '<input type="submit" value="Go" />';
  var rawHtml = String(rawHtml);
  var firstIndex = rawHtml.indexOf(goButtonHtml);
  if (firstIndex === -1) {
    return [];
  }
  var restOfRawHtml = rawHtml.substr(firstIndex + goButtonHtml.length);
  var secondIndex = restOfRawHtml.indexOf(goButtonHtml);
  if (secondIndex === -1) {
    return [];
  }
  var itemsHtml = restOfRawHtml.substr(0, secondIndex);

  // Remove characters before the first item link
  var itemsHtml = itemsHtml.substr(itemsHtml.indexOf('<a href'));
  // Remove things after the links
  var itemsHtml = itemsHtml.substr(0, itemsHtml.indexOf('<form action='));
  // Items are separated by double line breaks
  var itemLinks = itemsHtml.split('<br /><br />');
  // Last item in the '<a href' format is "paging" (1 of 2 pages, Next)
  var pagingLinks = itemLinks.pop();

  return {
    'items' : itemLinks,
    'paging' : pagingLinks
  };
}

var parseLink = function parseLink(link){
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
  return dom;
}


var getPriceFromLink = function getPriceFromLink(link) {

  var dom = parseLink(link);
  for (i = 0; i < dom.length; i++) {
    if (dom[i].type == 'text' && dom[i].raw[0] == "$") {
      var text = dom[i].raw;
      return text.substr(1,(text.indexOf('&')-1))
    }
  }
  // TODO: Handle no price found
  return "?";
}


var getNameFromLink = function getNameFromLink(link) {
  var dom = parseLink(link);

  try {
    if (dom[0].children === undefined){
      return "?";
    }
    else {
      return dom[0].children[0].data;
    }
  }

  catch(e) {
    console.log('what?', e, dom);
    return "?";
  }
}


var getURLFromLink = function getURLFromLink(link) {
  var dom = parseLink(link);
  for (i = 0; i < dom.length; i++) {
      if (dom[i].type == 'tag' && dom[i].name == 'a') {
        return dom[i].attribs['href']
      }
  }

}

var getPrimeStatusFromLink = function getPrimeStatusFromLink(link) {
  var dom = parseLink(link);

  try {
    for (i = 0; i < dom.length; i++) {
        if (dom[i].type == 'tag' && dom[i].name == 'img' && dom[i]['attribs']['alt'] == 'Prime') {
          return true
        }
    }
    return false
  }

  catch(e){
    console.log('what?', e, dom)
    return false
  }
}

module.exports = {
  "getPriceFromLink" : getPriceFromLink,
  "getNameFromLink" : getNameFromLink,
  "getURLFromLink" : getURLFromLink,
  "getPrimeStatusFromLink" : getPrimeStatusFromLink,
  "getItemsFromPage" : getItemsFromPage,
}


