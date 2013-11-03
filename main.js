
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
