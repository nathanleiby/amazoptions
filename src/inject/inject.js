chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			variants=[]

			function detect() {
				//console.log("----Table that has list of options----");
				var output=[];


				//get the contents of the script that loads the data json, parse as json
				var variationsScriptContents = $("script[data-a-state*='twisterData']");
				//add error checking?  Right now assumes that we find the script we're looking for and no others
				twisterText=variationsScriptContents[0].innerHTML
				var variationsJson=jQuery.parseJSON(twisterText);
				//console.log(variationsJson);

				//Get the list of different items available
				var asinVals=variationsJson['data']['stateData']['asin_variation_values'];
				console.log('asinVals',asinVals);

				//get the list of dimensions on which the items vary
				var variationVals=variationsJson['data']['stateData']['variation_values'];
				for (var propName in variationVals) {
					console.log("variationVals",propName, variationVals[propName]);
				}

				//get the main part of the url for the ajax request for a variant
				//The full URL seems to be of form: 
				//'http://www.amazon.com'+ajaxURLBase+asinVar+'&isFlushing=2&id='+asinVar;
				var ajaxURLBase=variationsJson['data']['contextMetaData']['full']['AJAXUrl'];


				//Iterate over each of the variants, make ajax requests for the variant data, pull the data out
				i=-1
				for (var asinVar in asinVals) {

					//insert break so it doesn't load all values while testing
					i=i+1
					if (i>2){
						break
					}

					var asinVarData=getVariationData(asinVals,asinVar,ajaxURLBase)
					console.log("varData", asinVarData);
					output.push(asinVarData);
					
				}


				return output;
				console.log('output',output)
			}



			function getVariationData(asinVals,asinVar, ajaxURLBase) {
				var ajaxURL='http://www.amazon.com'+ajaxURLBase+asinVar+'&isFlushing=2&id='+asinVar;
				console.log('ajaxurl',ajaxURL);
				//Make Ajax request for the URL here
				var asinAjaxRequest = $.ajax({type: "GET", url: ajaxURL, async: false}).responseText;
				
				//split, parse returned file here
				lines=asinAjaxRequest.split("&&&");
				asinVarData=lines[1]
				asinJSONData=jQuery.parseJSON(asinVarData);


				//get the price and other info out of the json-formatted asinJSONData 
				//first find the HTML in the json and convert to dom
				var asinDiv=asinJSONData["Value"]["content"]["price_feature_div"]
				var asinDom=jQuery.parseHTML(asinDiv)[0];

				var asinPrice=getPrice(asinDom);
				var asinPrime=allowsPrimeShipping(asinDom)


				//build the final data output structure
				asinVarData={
					"url" : ajaxURL, 
					"name" : "NameOfvariant", 
					"price" : asinPrice, 
					//TODO: match these params codes to image swatch, names in variationVals for display
					"params": {"color" : asinVals[asinVar]["color_name"], "size": asinVals[asinVar]["size_name"] },  
					"prime": asinPrime
				}

				return asinVarData

			}


			function getPrice(searchDom) {
				// TODO: strip dollar sign? `.replace('$', '')`
				// TODO: Deal price?

				var price = "unknown";
				var selectors = ['priceblock_ourprice','actualPriceValue'];
				for (var i=0; i < selectors.length; i++) {
					if ($('#' + selectors[i], searchDom).length == 1)   {
						price = $('#' + selectors[i],searchDom).text();
						console.log('price:', price)

					}
				}

				return price;
			}

			function allowsPrimeShipping() {
				// if not prime, has span but empty
				var hasImage = false;
				console.log('ship',$('img[src*=prime]'))
				if ($('img[src*=prime]').length >0)   {
					hasImage = true;
				}
				console.log('prime:', hasImage);

				// if prime, in the shipping span there is an image

				return hasImage;
			}

			function getOptionsFromCategories(category) {
				var optionNames=[];
				for (var i=0;i<category.children.length; i++){
					optionNames.push(category.children[i].text + " " + category.children[i].title);
				}
				return optionNames;
			}

			function clickThing() {
				// click stuff and see price update before your very eyes!
			}

			// Main functionality
			// <div>
			// 	<input type="button">
			// 	<div id="amazoptions_holder">

			// 	</div>
			// </div>

			// Write some tests
			//var detectedCategories=detect();
			



			var outputDiv = $('#price_feature_div');
			var currentHtml = outputDiv.html();
			var newHtmlArray = [
			'<div>',
				'<input type="button" value="YoButton" id="mybutton" />',
				'<div id="amazoptions_holder" style="display:none">',
					'<table id=\"hor-minimalist-a\">',
					'<tr><th>Name</th><th>Price</th></tr>',
					'<tr><td>name1</td><td>'+variants[0]['price']+'</td></tr>',
					'<tr><td>name2</td><td>'+variants[1]['price']+'</td></tr>',
					'</table>',
				'</div>',
			'</div>'
			];
			var newHtml = newHtmlArray.join("");
			// fetch existing content.

			// append
			outputDiv.html(currentHtml + newHtml);

			// Button handler
			$('#mybutton').click(function() {
				$('#amazoptions_holder').toggle();
				//Is variants already global?  Do we want to make it so, or pass it around
				variants=detect();

			});
		}
	}, 10);
});
