(function ($) {
	"use strict";

	// JS Index
	//----------------------------------------
	// 1. preloader
	// 2. background image
	// 3. Animate the scroll to top
	// 4. Contact form
	//-------------------------------------------------



	// 1. preloader
	//---------------------------------------------------------------------------
	$(window).load(function () {
		$('#preloader').fadeOut('slow', function () { $(this).remove(); });
	});

	// 2. background image
	//---------------------------------------------------------------------------
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
	});

	// 3. Animate the scroll to top
	// --------------------------------------------------------------------------
	// Show or hide the sticky footer button
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('#scroll').addClass('show');
		} else {
			$('#scroll').removeClass('show');
		}
	});

	$('#scroll').on('click', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0,
		}, 600);
	});



















	// 8. Contact form 
	//---------------------------------------------------------------------------
	$(function () {
		// Here is the form
		var form = $('#contact-form');

		// Getting the messages div
		var formMessages = $('.form-message');


		// Setting up an event listener for the contact form
		$(form).submit(function (event) {
			// Stopping the browser to submit the form
			event.preventDefault();

			// Serializing the form data
			var formData = $(form).serialize();

			// Submitting the form using AJAX
			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			}).done(function (response) {

				// Making the formMessages div to have the 'success' class
				$(formMessages).removeClass('error');
				$(formMessages).addClass('success');

				// Setting the message text
				$(formMessages).text(response);

				// Clearing the form after successful submission 
				$('#inputName').val('');
				$('#inputEmail').val('');
				$('#inputPhone').val('');
				$('#inputMessage').val('');
			}).fail(function (data) {

				// Making the formMessages div to have the 'error' class
				$(formMessages).removeClass('success');
				$(formMessages).addClass('error');

				// Setting the message text
				if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text('Oops! An error occurred and your message could not be sent.');
				}
			});

		});

	});




})(jQuery);