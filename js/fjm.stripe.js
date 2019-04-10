$(document).ready(function() {
   $('#btnDonate').click(function() {
		vex.dialog.open({
		    message: 'Thank you for your donation!',
		    input: [
		        '<input name="amount" type="number" placeholder="Donation amount" required />',
		    ].join(''),
		    buttons: [
		        $.extend({}, vex.dialog.buttons.YES, { text: 'Donate' }),
		        $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
		    ],
		    callback: function (data) {
		        if (!data) {
		            //console.log('Cancelled')
		        } else {
		            //console.log('Amount', data.amount);
		            data.amount = data.amount * 100;
		            $('input#amount').val(data.amount);
		            
		            if (data.amount < 500) {
		            	vex.dialog.alert('The minimum donation amount is $5.00');
		            	return;
		            }
		            console.log('### TEST MODE ###');
		            var handler = StripeCheckout.configure({
		            	//key: 'pk_live_QUqhIKbjYN5t9kYRVYWWHnHW'
		            	key:'pk_test_La2cZOeKLanoVmecpAkb4wEg'
		            	,locale: 'auto'
		            	,name: 'FJ Ministries'
		            	,description: 'One-time donation'
		            	,amount: data.amount
		            	,token: function(token) {
		            		$('input#stripeToken').val(token.id);
		            		$('input#amount').val(data.amount);
		            		//$('form#manualStripe').submit();
		            		stripePay(token.id, data.amount);
		            	}
		            });
		            handler.open({amount: Math.round(amount)});
		        }
		    }
		});
   });
 });
 function stripePay(stripeToken, amount) {
 	var data = {};
 	data.stripeToken = stripeToken;
 	data.amount = amount;
 	
 	$.post('https://pmvruqtzuf.execute-api.us-east-1.amazonaws.com/prod/', data, function(result) {
 		if (result.err) {
 			vex.dialog.alert('There was a problem processing with Stripe. Please contact FJ Ministries.');
 		}
 		else {
 			vex.dialog.alert('Stripe processing is complete. Thank you for your donation!')
 		}
 	}).fail(function(result) {
 		console.log(result);
		vex.dialog.alert('There was a problem processing with Stripe. Please contact FJ Ministries.');
 	})
 }
 