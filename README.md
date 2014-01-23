amazoptions
===========

![All of the Pants](http://i.imgflip.com/4jxpi.jpg)

Amazon Chrome Extension - Project "Optimal Pants Selection"

Test Set:

- http://www.amazon.com/iBeats-Headphones-ControlTalk-From-Monster%C2%AE/dp/B004477OB8/ref=pd_sim_e_3
    - table
- http://www.amazon.com/Rampage-Womens-Brixee-Bootie-Black/dp/B00CM5ZW04/ref=sr_1_1?ie=UTF8&qid=1383459215&sr=8-1&keywords=rampage+womens+brixee+booties
    - dropdown
    - ul
- http://www.amazon.com/Passport-Portable-External-Drive-Storage/dp/B006Y5UV4A/ref=sr_1_1?s=electronics&ie=UTF8&qid=1383457602&sr=1-1&keywords=western+digital
    - 2 tables


```
// Dropdowns
s = $('#native_dropdown_selected_size_name')
s.val(s.children()[1].value)

// Boxes / swatches
$('ul.swatches').children().length

// Table
$('table .swatchOuter')

// Other useful classes...
$('.swatchSelect')
$('.swatchAvailable')
$('.swatchUnavailable')
```

```
// a = $('.swatchOuter')[0]
// a.attributes.key.value // Group by this, if you have multiple types of swatches

// Detect possible selections

// Select a dropdown option
var lastChildVal = selectDropdown.first().children().last().val()
selectDropdown.first().val(lastChildVal).change()

// ss.selectedOptions
// ss.selectedIndex
```

Sends a message between between tabs?
```
chrome.tabs.query({active:true,currentWindow:true},funciton(tabs){
  chrome.tabs.sendMessage(tabs[0].id,{message:"text"}, function(response){
    //If you need a response, do stuff with it here
    console.log("got response!")
    console.log(response);
  });
});
```


## Acknowledgements

Created with the awesome [extensionizr](http://extensionizr.com).

CSS from: http://coding.smashingmagazine.com/2008/08/13/top-10-css-table-designs
