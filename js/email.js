$().ready(function(){
	$("#email_form").validate({
		rules:{
			email: {
				required: true,
				email: true
			},
			email_confirm: {
				required: true,
				email: true,
				equalTo:"#email"
			},
			zip: {
				required: true,
				minlength:5,
				maxlength:5,
			}
		},
		messages:{
			email: "Please enter an email address",
			email_confirm:{
				required: "Please enter an email address.",
				equalTo: "Enter the same email as above."
			},
			zip:{
				required: "Please enter a zip code.",
				minlength: "Please enter a 5 digit zip code",
				maxlength: "Please enter a 5 digit zip code"
			}
		}
	});
});
