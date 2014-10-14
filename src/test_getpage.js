// <br /><br /><a href="/gp/aw/d/B007FQNLR6/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Silver</a><br />$68.47&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br /><a href="/gp/aw/d/B006Y5UV4A/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Black</a><br />$80.00&nbsp;<br /><br /><a href="/gp/aw/d/B007FQNKRC/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Blue</a><br />&nbsp;<br /><br /><a href="/gp/aw/d/B006Y5UV3G/ref=aw_d_var_2nd_pc_img?vs=1">1.5 TB - Black</a><br />$104.99&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br /><a href="/gp/aw/d/B009ZEATVM/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Blue</a><br />&nbsp;<br /><br /><a href="/gp/aw/d/B009ZEAUJI/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Red</a><br />&nbsp;<br /><br /><a href="/gp/aw/d/B005HMKKH4/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Black</a><br />$137.99&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br /><a href="/gp/aw/d/B008S4TGDM/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Silver</a><br />$170.50&nbsp;<br /><br /><a href="/gp/aw/d/B006Y5UV36/ref=aw_d_var_2nd_pc_img?vs=1">320 GB - Black</a><br />&nbsp;<br /><br />
// 1 <a href="/gp/aw/d/B006Y5UV4A/ref=aw_d_var_pri_pc_g_2_1?p=2&vid=ALL">2</a>
// <a href="/gp/aw/d/B006Y5UV4A/ref=aw_d_var_pri_pc_n_1?p=2&vid=ALL">Next</a>'

var assert = require('assert');
var getpage = require('./getpage');
var htmlparser = require("htmlparser");

describe('get price', function(){
  it('return a dollar value if a price exists', function(){
    var link = '<a href="/gp/aw/d/B007FQNLOY/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Red</a><br />$99.99&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" />'
    var price = getpage.getPriceFromLink(link);
    assert(price, '$99.99');
  })
})

