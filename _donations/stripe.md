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
<script src="https://checkout.stripe.com/checkout.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vex-js/4.1.0/js/vex.combined.min.js"></script>
<script>vex.defaultOptions.className = 'vex-theme-os'</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vex-js/4.1.0/css/vex.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vex-js/4.1.0/css/vex-theme-os.min.css"/>

<form id="manualStripe" action="https://pmvruqtzuf.execute-api.us-east-1.amazonaws.com/prod/" method="POST">
 	<input type="hidden" id="stripeToken" name="stripeToken"/>
 	<input type="hidden" id="amount" name="amount"/>
</form>
<script src="{{ "/js/fjm.stripe.js" | relative_url }}" type="text/javascript"></script>
<img src="{{ "img/donation-with-stripe.jpg" | relative_url }}" id="btnDonate" style="cursor: pointer;"/>

