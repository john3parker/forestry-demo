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

## Stripe v4

<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
<script
  src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"
  integrity="sha256-xNjb53/rY+WmG+4L6tTl9m6PpqknWZvRt0rO1SRnJzw="
  crossorigin="anonymous"></script>

<div id="dialog-form" title="Create new user">
  <p class="validateTips">All form fields are required.</p>
 
  <form>
    <fieldset>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" value="Jane Smith" class="text ui-widget-content ui-corner-all">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" value="jane@smith.com" class="text ui-widget-content ui-corner-all">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" value="xxxxxxx" class="text ui-widget-content ui-corner-all">
 
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
  </form>
</div>


<button id="btnDonate">click me</button>
<script>
 $(document).ready(function() {
   var dialog = dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 400,
      width: 350,
      modal: true,
      buttons: {
        "Create an account": addUser,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
   $('#btnDonate').click(function() {
     dialog.dialog('show');
   });
 });
  
 </script>

<form action="https://pmvruqtzuf.execute-api.us-east-1.amazonaws.com/prod/" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_TYooMQauvdEDq54NiTphI7jx"
    data-amount="50000"
    data-name="FJ Ministries"
    data-description="Donation"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-zip-code="true">
  </script>
  <form type="hidden" name="amount" value="50000"/>
  <form type="hidden" name="currency" value="usd"/>
</form>


## PayPal

<form style="display: flex; justify-content: left;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input name="cmd" type="hidden" value="_s-xclick"><br>

<input name="hosted_button_id" type="hidden" value="KKHC5KC5QCR7Q"><br>

<input alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://moneypantry.com/wp-content/uploads/2013/11/paypal-donate-button.jpg" type="image" style="height:20%; width:20%;"><br>

<img src="./give_files/pixel.gif" alt="" width="1" height="1" border="0"></form>

## Correspondence
{% include address.html %}