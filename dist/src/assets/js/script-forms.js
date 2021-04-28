
//$("#qaisar-form #errors").html("");

$("#feedback-form #form-submit").click(function(e){
    $('.gif-loader').css('visibility', 'visible');
    e.preventDefault();
    $("#form-errors").addClass('show-error-msg');
    var data	=	$("#feedback-form").serialize();
    $.post("feedback_form.php", data).done(function( response ) {

        if(response=='ok')
        {
            document.getElementById("feedback-form").reset();
            //event.preventDefault();
            $("#form-errors").html('');
            $('.gif-loader').css('visibility', 'hidden');
            $("#content_name_email").css('display','none');
            $("#PopupThankYouQaisar").css('display','block');
            //$('.dialog__content4').addClass('popup-sent-msg');

            //$("#qaisar-form").reset();
            $("#name").html('');
            $("#email").html('');
            //$("#phone").html('');
            //$("#company").html('');
            //$("#message").html('');
        }

        else{
            $("#form-errors").html(response);
            $('.gif-loader').css('visibility', 'hidden');
        }
    });

    return false;
});


//CONTACT-FORM)

$("#contact-form #contact-submit").click(function(e){
    $('.gif-loader').css('visibility', 'visible');
    e.preventDefault();
    $("#contact-errors").addClass('show-error-msg');
    var data	=	$("#contact-form").serialize();
    $.post("contact_form.php", data).done(function( response ) {

        if(response=='ok')
        {
            document.getElementById("contact-form").reset();
            //event.preventDefault();
            $("#contact-errors").html('');
            $('.gif-loader').css('visibility', 'hidden');
            $("#test_project_hide").css('display','none');
            $("#ContactThankYou").css('display','block');
            //$('.dialog__content4').addClass('popup-sent-msg');

            //$("#qaisar-form").reset();
            $("#name").html('');
            $("#email").html('');
            //$("#phone").html('');
            //$("#company").html('');
            //$("#message").html('');
        }

        else{
            $("#contact-errors").html(response);
            $('.gif-loader').css('visibility', 'hidden');
        }
    });

    return false;
});