(function($) {
    "use strict";
    jQuery(document).ready(function($) {

            var contact_form = $("#contact_page_form");
            contact_form.validate({
                rules: {
                    'name': 'required',
                    'email': 'required',
                    'phone': 'required',
                    'message': 'required',
                },
                messages: {
                    name: 'Enter Your Name',
                    email: 'Enter Your Email',
                    phone: 'Enter Your Phone',
                    message: 'Enter Your Message',
                },
                submitHandler: function(form) {

                    $.ajax({
                        type: "POST",
                        url: 'contact.php',
                        data: {
                            'data': contact_form.serialize(),
                        },
                        success: function(data) {
                            contact_form.find('.alert').remove();
                            contact_form.prepend('<div class="alert alert-success">' + data + '</div>');
                        },
                        error: function(res) {

                        }
                    });
                }
            });

        }) //document ready function

}(jQuery));