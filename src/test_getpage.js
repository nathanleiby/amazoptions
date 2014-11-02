// <br /><br /><a href="/gp/aw/d/B007FQNLR6/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Silver</a><br />$68.47&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br /><a href="/gp/aw/d/B006Y5UV4A/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Black</a><br />$80.00&nbsp;<br /><br /><a href="/gp/aw/d/B007FQNKRC/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Blue</a><br />&nbsp;<br /><br /><a href="/gp/aw/d/B006Y5UV3G/ref=aw_d_var_2nd_pc_img?vs=1">1.5 TB - Black</a><br />$104.99&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br /><a href="/gp/aw/d/B009ZEATVM/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Blue</a><br />&nbsp;<br /><br /><a href="/gp/aw/d/B009ZEAUJI/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Red</a><br />&nbsp;<br /><br /><a href="/gp/aw/d/B005HMKKH4/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Black</a><br />$137.99&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br /><a href="/gp/aw/d/B008S4TGDM/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Silver</a><br />$170.50&nbsp;<br /><br /><a href="/gp/aw/d/B006Y5UV36/ref=aw_d_var_2nd_pc_img?vs=1">320 GB - Black</a><br />&nbsp;<br /><br />
// 1 <a href="/gp/aw/d/B006Y5UV4A/ref=aw_d_var_pri_pc_g_2_1?p=2&vid=ALL">2</a>
// <a href="/gp/aw/d/B006Y5UV4A/ref=aw_d_var_pri_pc_n_1?p=2&vid=ALL">Next</a>'

fs = require('fs');
util = require('util');

var list_o_dict_o_links = [
    {
        'link': '<a href="/gp/aw/d/B007FQNLOY/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Red</a><br />$89.99&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br />',
        'url':'/gp/aw/d/B007FQNLOY/ref=aw_d_var_2nd_pc_img?vs=1',
        'name':'1 TB - Red',
        'price':'89.99',
        'prime_status':true
    },
    {
        'link': '<a href="/gp/aw/d/B007FQNLR6/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Silver</a><br />$69.99&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br />',
        'url':'/gp/aw/d/B007FQNLR6/ref=aw_d_var_2nd_pc_img?vs=1',
        'name':'1 TB - Silver',
        'price':'69.99',
        'prime_status':true
    },
    {
        'link': '<a href="/gp/aw/d/B006Y5UV4A/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Black</a><br />$67.03&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br />',
        'url':'/gp/aw/d/B006Y5UV4A/ref=aw_d_var_2nd_pc_img?vs=1',
        'name':'1 TB - Black',
        'price':'67.03',
        'prime_status':true
    },
    {
        'link': '<a href="/gp/aw/d/B007FQNKRC/ref=aw_d_var_2nd_pc_img?vs=1">1 TB - Blue</a><br />$164.00&nbsp;<br /><br />',
        'url':'/gp/aw/d/B007FQNKRC/ref=aw_d_var_2nd_pc_img?vs=1',
        'name':'1 TB - Blue',
        'price':'164.00',
        'prime_status':false
    },
    {
        'link': '<a href="/gp/aw/d/B006Y5UV3G/ref=aw_d_var_2nd_pc_img?vs=1">1.5 TB - Black</a><br />$88.99&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br />',
        'url':'/gp/aw/d/B006Y5UV3G/ref=aw_d_var_2nd_pc_img?vs=1',
        'name':'1.5 TB - Black',
        'price':'88.99',
        'prime_status':true
    },
    {
        'link': '<a href="/gp/aw/d/B009ZEAUJI/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Red</a><br />&nbsp;<br /><br />',
        'url':'/gp/aw/d/B009ZEAUJI/ref=aw_d_var_2nd_pc_img?vs=1',
        'name':'2 TB - Red',
        'price':'?',
        'prime_status':false
    },
    {
        'link': '<a href="/gp/aw/d/B008S4TGDM/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Silver</a><br />$168.50&nbsp;<br /><br />',
        'url':'/gp/aw/d/B008S4TGDM/ref=aw_d_var_2nd_pc_img?vs=1',
        'name':'2 TB - Silver',
        'price':'168.50',
        'prime_status':false
    },
    {
        'link': '<a href="/gp/aw/d/B009ZEATVM/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Blue</a><br />&nbsp;<br /><br />',
        'url':'/gp/aw/d/B009ZEATVM/ref=aw_d_var_2nd_pc_img?vs=1',
        'name':'2 TB - Blue',
        'price':'?',
        'prime_status':false
    },
    {
        'link': '<a href="/gp/aw/d/B005HMKKH4/ref=aw_d_var_2nd_pc_img?vs=1">2 TB - Black</a><br />$129.99&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" /><br /><br />',
        'url':'/gp/aw/d/B005HMKKH4/ref=aw_d_var_2nd_pc_img?vs=1',
        'name':'2 TB - Black',
        'price':'129.99',
        'prime_status':true
    },
    {
        'link': '<a href="/gp/aw/d/B006Y5UV4U/ref=aw_d_var_2nd_pc_img?vs=1">500 GB - Black</a><br />$88.11&nbsp;<br /><br />',
        'url':'/gp/aw/d/B006Y5UV4U/ref=aw_d_var_2nd_pc_img?vs=1',
        'name':'500 GB - Black',
        'price':'88.11',
        'prime_status':false
    }
];

var assert = require('assert');
var getpage = require('./getpage');
var htmlparser = require("htmlparser");

describe('get page', function(){
  describe('parseItem', function() {
    list_o_dict_o_links.forEach(function(item) {
      it('return a dollar value if a price exists for ' + item['name'], function(){
        var link = item['link'];
        var price = getpage.getPriceFromLink(link);
        assert.equal(price, item['price']);
      });

      it("return prime status for item" + item['name'], function(){
        var link = item['link']
        var primeStatus = getpage.getPrimeStatusFromLink(link);
        assert.equal(primeStatus, item['prime_status']);
      });

      it("return url for item" + item['name'] , function(){
        var link = item['link'];
        var url = getpage.getURLFromLink(link);
        assert.equal(url, item['url']);
      });

      it('return a name of the item' + item['name'], function(){
        var link = item['link'];
        var name = getpage.getNameFromLink(link);
        assert.equal(name, item['name']);
      });

    });
  });

  it("return ? if the name of the item cannot be found", function(){
    var link = '<a href="/gp/aw/d/B007FQNLOY/ref=aw_d_var_2nd_pc_img?vs=1"></a><br />$99.99&nbsp;<img src="http://g-ecx.images-amazon.com/images/G/01/anywhere/smart/prime_badge._V192208257_.gif" width="45" alt="Prime" extraStyle="vertical-align:text-top;" height="17" border="0" />'
    var name = getpage.getNameFromLink(link);
    assert.equal(name, '?');
  });

  describe('getItemsFromPage', function(){
    it('returns the dom for a page', function(){
      var html = fs.readFileSync('src/product1-p1.html');
      var dom = getpage.getItemsFromPage(html);
      assert(dom);
    });

    var pages = [
      {
        'page':'src/product1-p1.html',
        'expected_item_count': 10
      },
      {
        'page':'src/product1-p2.html',
        'expected_item_count': 5
      }
    ];

    pages.forEach(function(item) {
      it('gets ' + item['expected_item_count'] + ' items from page ' + item['page'], function(){
        var html = fs.readFileSync('src/product1-p1.html');
        var items = getpage.getItemsFromPage(html.toString());
        assert(items.length, item['expected_item_count']);
      });
    });

  });

  // describe('isLastPage', function(){
  //   it('returns False if additional pages remain', function(){
  //     assert.equal(false);
  //   });
  //   it('returns True if no pages remain', function(){
  //     assert.equal(false);
  //   });
  // });

});
