$(document).ready(function() {
	Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
	//Watch for a form submission:

	$("#form-submit-btn").click(function(event) {
		event.preventDefault();
		$('input(type-submit)').prop('disabled', true);
		var error = false;
		var ccNum = $('#card_number').val(),
			cvNum = $('#card_code').val(),
			expMonth = $('#card_month').val(),
			expYear = $('#card_year').val();

		if (!error) {

			Stripe.createToken({
				number: ccNum,
				cvc: cvNum,
				exp_month: expMonth,
				exp_year: expYear
			}, stripeResponseHandler);
		}
		return false;
	});

	function stripeResponseHandler(status, response) {
		var f = $("#new_user");

		var token = response.id;


		f.append('<input type="hidden" name="user[stripe_card_token]" value="' + token +'" />');

		f.get(0).submit();
	}

});