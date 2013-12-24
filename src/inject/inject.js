chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			var testItems = [{
				'url': 'amazon.whoa/123315asda',
				'swatches' : [
					{'type' : 'dropdown', 'quantity' : 5},
					{'type' : 'table', 'quantity' : 4},
					{'type' : 'ul', 'quantity' : 3},
				]
			}];
			// TODO: save example HTML to test / debug against

			function detect() {
				console.log("----Table that has list of options----");
				var output=[];
				
				var tableList = $('table.variations .swatchOuter');
				for (var i=0; i < tableList.length; i++) {
					console.log("List #", i+1, "has", tableList[i].children.length, "elements.");
					output.push(tableList[i]);
				}

				console.log("----Unordered lists of swatches----");
				var ulList = $('ul.swatches');
				for (var i=0; i < ulList.length; i++) {
					console.log("List #", i+1, "has", ulList[i].children.length, "elements.");
					output.push(ulList[i]);
				}

				console.log("----Dropdowns----");
				var selectDropdown = $('#native_dropdown_selected_size_name')
				for (var i=0; i < selectDropdown.length; i++) {
					console.log("Dropdown #", i+1, "has", selectDropdown[i].children.length, "elements.");
					output.push(selectDropdown[i]);
				}
				return output;
			}

			function getPrice() {
				// TODO: strip dollar sign? `.replace('$', '')`
				// TODO: Deal price?

				var price = "unknown";
				var selectors = ['priceblock_ourprice','actualPriceValue'];
				for (var i=0; i < selectors.length; i++) {
					if ($('#' + selectors[i]).length == 1)   {
						price = $('#' + selectors[i]).text();
					}
				}

				return price;
			}

			function allowsPrimeShipping() {
				// if not prime, has span but empty
				var hasImage = false;
				var selectors = ['ourprice_shippingmessage','actualPriceExtraMessaging'];
				for (var i=0; i < selectors.length; i++) {
					if ($('#' + selectors[i] + ' img').length == 1)   {
						hasImage = true;
					}
				}

				// if prime, in the shipping span there is an image

				return hasImage;
			}
			
			function getOptionsFromCategories(category) {
				var optionNames=[];
				for (var i=0;i<category.children.length; i++){
					optionNames.push(category.children[i].text);
					optionNames.push(category.children[i].title);
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
			var detectedCategories=detect();
			console.log('We detected these categories: ', detectedCategories);
			for (var i=0;i<detectedCategories.length;i++){
				var optionNames=getOptionsFromCategories(detectedCategories[i]);
				console.log("Category: ", detectedCategories[i], "Has options: ", optionNames);
			}
			var outputDiv = $('#price_feature_div');
			var currentHtml = outputDiv.html();
			var newHtmlArray = [
			'<div>',
				'<input type="button" value="YoButton" id="mybutton" />',
				'<div id="amazoptions_holder">',
					'<table id=\"hor-minimalist-a\">',
					'<tr><th>Name</th><th>Price</th></tr>',
					'<tr><td>name1</td><td>$10.50</td></tr>',
					'<tr><td>name2</td><td>$11.50</td></tr>',
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
			});
		}
	}, 10);
});
