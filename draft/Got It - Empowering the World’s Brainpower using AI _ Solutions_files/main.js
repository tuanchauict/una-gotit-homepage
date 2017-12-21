$(document).ready(function() {
    $("#frm_contact").validate({
      errorClass: 'text-danger',
      errorElement: 'em',
      submitHandler: function(form) {
        $('#submit_contact_btn').text('SENDING...').prop('disabled', true);
        $.ajax({
          type: 'POST',
          url: '/contact.php',
          data: $(form).serialize(),
          success: function(data, textStatus, xhr)
          {
            $('#submit_contact_btn').text('SEND MESSAGE').prop('disabled', false);
            showSuccess('#page_message', data.scalar);

            // ga('send', 'event', 'button', 'click', 'Contact Us');

            $(form).find('textarea[name="message"]').val('');
          },
          error: function(data)
          {
            console.log(data);
            $('#submit_contact_btn').text('SEND MESSAGE').prop('disabled', false);
            if (data.responseText){
                var res = JSON.parse(data.responseText);
                if (res && res.message) {
                    showError('#page_message', res.message);
                    return true;
                }
            }
            showError('#page_message', 'There is an unexpected error. Please try again.');
          }
        })
      }
    });
});

$(document).ready(function() {
    $("#frm_request_subject").validate({
      errorClass: 'text-danger',
      errorElement: 'em',
      submitHandler: function(form) {
        $('#submit_request_btn').text('SENDING...').prop('disabled', true);
        $.ajax({
          type: 'POST',
          url: '/request-subject.php',
          data: $(form).serialize(),
          success: function(data, textStatus, xhr)
          {
            $('#submit_request_btn').text('SEND MESSAGE').prop('disabled', false);
            showSuccess('#page_message', data.scalar);

            // ga('send', 'event', 'button', 'click', 'Contact Us');

            $(form).find('textarea[name="notes"]').val('');
          },
          error: function(data)
          {
            console.log(data);
            $('#submit_request_btn').text('SEND MESSAGE').prop('disabled', false);
            if (data.responseText){
                var res = JSON.parse(data.responseText);
                if (res && res.message) {
                    showError('#page_message', res.message);
                    return true;
                }
            }
            showError('#page_message', 'There is an unexpected error. Please try again.');
          }
        })
      }
    });
});

$(document).ready(function() {
    $("#frm_request_expert").validate({
      errorClass: 'text-danger',
      errorElement: 'em',
      submitHandler: function(form) {
        $('#submit_request_btn').text('SENDING...').prop('disabled', true);
        $.ajax({
          type: 'POST',
          url: '/request-expert.php',
          data: $(form).serialize(),
          success: function(data, textStatus, xhr)
          {
            $('#submit_request_btn').text('SEND MESSAGE').prop('disabled', false);
            showSuccess('#page_message', data.scalar);

            // ga('send', 'event', 'button', 'click', 'Contact Us');

            $(form).find('textarea[name="message"]').val('');
          },
          error: function(data)
          {
            console.log(data);
            $('#submit_request_btn').text('SEND MESSAGE').prop('disabled', false);
            if (data.responseText){
                var res = JSON.parse(data.responseText);
                if (res && res.message) {
                    showError('#page_message', res.message);
                    return true;
                }
            }
            showError('#page_message', 'There is an unexpected error. Please try again.');
          }
        })
      }
    });
});

function showAlert(selector, msg, type) {
  $(selector).show();
  var template = "<div class=\"alert alert-"+type+" alert-dismissible\" role=\"alert\">";
    template += "<button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>";
    template += msg + "</div>";

  var e = $(template);
  e.appendTo(selector);
  e.fadeTo(7000, 500).slideUp();
}
function showSuccess(selector, msg) {
  showAlert(selector, msg, 'success');
}
function showError(selector, msg) {
  showAlert(selector, msg, 'danger');
}
function hideAlert(selector) {
  $(selector).hide();
}