function detect() {
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