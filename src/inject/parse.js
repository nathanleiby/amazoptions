// Goal: Fetch one response from GET

// - find network calls, e.g. http://www.amazon.com/gp/twister/ajaxv2?sid=183-9762969-9867751&ptd=SHOES&json=1&dpxAjaxFlag=1&isUDPFlag=1&twisterView=glance&ee=2&pgid=shoes_display_on_website&sr=8-1&nodeID=672123011&tagActionCode=nerdfitn-20&rid=0BCKHPDHNW7BBZGT5JHE&parentAsin=B00CM5ZUK6&enPre=1&isP=1&qid=1383459215&dStr=size_name%2Ccolor_name&auiAjax=1&storeID=shoes&psc=1&asinList=B00CM5ZXFI&isFlushing=2&id=B00CM5ZXFI&prefetchParam=0&mType=full
//     - split response on "&&&""
// - differentiate between network calls that do / don't include the price - why?
// - run the network call in the background via jquery
// - parse price out of network call
// - display info from network call in UI

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

fs = require('fs');

// TODO: Fetch the response, first... For now it's gotten from a filename passed by user
// Main
// var url = 'http://www.amazon.com/gp/twister/ajaxv2?sid=183-9762969-9867751&ptd=SHOES&json=1&dpxAjaxFlag=1&isUDPFlag=1&twisterView=glance&ee=2&pgid=shoes_display_on_website&sr=8-1&nodeID=672123011&tagActionCode=nerdfitn-20&rid=1N6AGF17BYYS7AGHPF4J&parentAsin=B00CM5ZUK6&enPre=1&isP=1&qid=1383459215&dStr=size_name%2Ccolor_name&auiAjax=1&storeID=shoes&asinList=B00CM5ZXFI&isFlushing=2&id=X_0&prefetchParam=0&mType=partial';
// $.get(url, function(data) {
  // var r = data.responseText;
// });

if (process.argv.length < 3) {
    console.log("usage: node parse.js <file>");
    return;
}

filename = process.argv[2];

// TODO: bufferize! async!
var responseText = fs.readFileSync(filename, 'utf8');

jsons = parseResponseAsJsons(responseText);
for (var i=0; i < jsons.length; i++) {
    var j = jsons[i];
    // console.log(Object.size(jsons[i].Value.content));
    if(j.FeatureName == 'price_feature_div') {
        // console.log(j);
        console.log(j.Value.content[j.FeatureName])
    }
    // console.log(Object.size(jsons[i].Value.content));
    // 'price_feature_div'
      // 'buybox_feature_div',
    //
    // 'mini-atf_feature_div'
    // { 'olp-condition-link_feature_div': '\n<div id="olpDivId">\n<span class="olpCondLink" ><a class="buyAction olpBlueLink" href="/gp/offer-listing/B00CM5ZXFI/ref=dp_olp_new?ie=UTF8&condition=new&qid=1383459215&sr=8-1">2&nbsp;new</a>&nbsp;from&nbsp;<span class="price">$47.53</span></span>\n</div>\n' }
}


// findJsonWithPrice(jsons);


function parseResponseAsJsons(responseText) {
  // return list of jsons
  var lines = responseText.split('&&&');
  var jsons = [];
  for (var i=0; i < lines.length; i++) {
    jsons.push(JSON.parse(lines[i]));
  }
  return jsons;
}

function findJsonWithPrice(listOfJsons) {
  // j0.Value.content.tellAFriendBox_feature_div.indexOf('price')
}

function isPricePresent() {
    // http://stackoverflow.com/questions/10585029/parse-a-html-string-with-js
    // <span id="priceblock_ourprice" class="a-size-medium a-color-price">$47.53</span>
    // http://api.jquery.com/jquery.parsehtml/
}

function getPriceFromResponse() {
  var listOfJsons = parseResponseAsJsons
}


