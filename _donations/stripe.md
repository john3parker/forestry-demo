---
title: Stripe
tags:
- donate
- stripe
date: 2018-11-04 19:44:29 +0000
sub_heading: Donate securely with credit card
use_content_as_image: true
---
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<img class="w-75" src="/img/stripe.png"/>
<div id="skus" class="d-flex flex-wrap"></div>

<script src="https://js.stripe.com/v3"></script>
<script>
var ap = ap();
var sk = g(ur());

var stripe = Stripe('pk_live_QUqhIKbjYN5t9kYRVYWWHnHW');
$(document).ready(function() {
	loadSkus();
});

function e(f) {
  return atob(f);
}

function checkout(config) {
	//console.log(config.data);
	stripe.redirectToCheckout({
    	items: [
	      {sku: config.data.id, quantity: 1},
    	],
	    successUrl: "{{ "/thankyou/ " | absolute_url }}",
	    cancelUrl: "{{ "/donate/ " | absolute_url }}"
	  })
  	.then(function(result) {
	    alert(result.error.message);
	  });
}
function ur() {
	return "YUhSMGNITTZMeTloY0drdWMzUnlhWEJsTG1OdmJTOTJNUzl6YTNWeg";
}
function loadSkus() {

	$.ajax({
		crossDomain: true,
		type: 'GET',
		dataType: 'json',
		beforeSend: function(xhr) {
			xhr.setRequestHeader(g("QXV0aG9yaXphdGlvbg=="), 'Bearer '+ e(ap) );
		},

		url: e(sk)
	}).done(function(result) {
		//console.log(result);
		result.data.sort((a,b) => (a.price > b.price)?1:-1);
		for(var x=0; x < result.data.length; x++) {
			var sku = result.data[x];
			var btn = $('<button></button>').addClass('btn btn-info m-1').text(Number(sku.price/100).toLocaleString('en-US',{'style':'currency','currency' : 'USD', 'minimumFractionDigits':0, 'maximumFractionDigits': 0}));

			btn.click({id: result.data[x].id}, checkout);
			$('#skus').append(btn);

		}
	});

}
function g(f) {
  return atob(f);
}
function ap() {
	//return g("YzJ0ZmRHVnpkRjlsU1dJNGMxWjFRalpWZDFwQlYwbDBZbEpUYVhaTE1rMD0");
	return g("YzJ0ZmJHbDJaVjlOZDJ0cldWZFJRblZEWVZoUFdqWlRlVVZCWjA5Rk9XOD0");
}
</script>