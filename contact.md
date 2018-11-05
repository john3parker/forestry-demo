---
title: Contact
date: 2017-11-01 03:00:00 +0000
banner_image: "/uploads/2018/02/17/college-building.jpg"
heading: Contact FJ Ministries
publish_date: 2017-12-01 04:00:00 +0000
show_staff: false
textline: description goes here
services:
- heading: Stripe
  description: Donate via credit card
  icon: ''
- heading: PayPal
  description: Give with PayPal
  icon: ''
- heading: Mail a Donation
  description: Priority Bank FJ Ministries 3401 E. Mission Blvd Fayetteville, AR 72703
  icon: ''
hero_button:
  text: Hero Button goes here
  href: http://www.paypal.com
menu:
  navigation:
    identifier: _contact
    weight: 5

---
## Priority Bank
FJ Ministries  
3401 E. Mission Blvd  
Fayetteville, AR 72703

''Make checks payable to FJ MInistries''

## Stripe

<form action="https://pmvruqtzuf.execute-api.us-east-1.amazonaws.com/prod/" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_TYooMQauvdEDq54NiTphI7jx"
    data-amount="999"
    data-name="Stripe.com"
    data-description="Example charge"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-zip-code="true">
  </script>
</form>


## PayPal

<form style="display: flex; justify-content: left;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input name="cmd" type="hidden" value="_s-xclick"><br>

<input name="hosted_button_id" type="hidden" value="KKHC5KC5QCR7Q"><br>

<input alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://moneypantry.com/wp-content/uploads/2013/11/paypal-donate-button.jpg" type="image" style="height:20%; width:20%;"><br>

<img src="./give_files/pixel.gif" alt="" width="1" height="1" border="0"></form>

## Correspondence
{% include address.html %}