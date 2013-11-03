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

			function detect() {
				var output = [];
				console.log("----Table that has list of options----")
				var tableList = $('table.variations .swatchOuter')
				console.log(tableList);

				console.log("----Unordered lists of swatches----")
				ulList = $('ul.swatches');
				for (var i=0; i < ulList.length; i++) {
					console.log("List #", i+1, "has", ulList[i].children.length, "elements.")
				}

				console.log("----Dropdowns----")
				var selectDropdown = $('#native_dropdown_selected_size_name')
				for (var i=0; i < selectDropdown.length; i++) {
					console.log("Dropdown #", i+1, "has", selectDropdown[i].children.length, "elements.")
				}
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

			function clickThing() {
				// click stuff and see price update before your very eyes!
			}

			// Write some tests
			console.log('js!');

			var outputDiv = $('#price_feature_div');
			outputDiv.html("<table id=\"hor-minimalist-a\">  <tr><th>Name</th><th>Price</th></tr> <tr><td>name1</td><td>$10.50</td></tr>  <tr><td>name2</td><td>$11.50</td></tr>  </table>")

		}
	}, 10);
});