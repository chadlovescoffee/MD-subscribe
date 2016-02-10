
subscribe = {

  app: function() {

    // Required Js
    var required_js = '/js/materialize.min.js';

    // Append Required JS
    if (!$('head script[src="' + required_js + '"]').length > 0) {
      $('head').append('<script type="text/javascript" src="' + required_js + '"></script>');
    }



    // Required CSS
    var required_css = [
      'http://fonts.googleapis.com/icon?family=Material+Icons',
      '/css/materialize.min.css',
      '/css/subscribe.min.css'
    ];


    // Append Required CSS
    var i = 0;
    var css_html = '';

    $(required_css).each(function () {
      if (!$('head link[href="' + required_css[i] + '"]').length > 0) {
        css_html += '<link href="' + required_css[i] + '" rel="stylesheet">';
      }
      ++i;
    });

    $('head').append(css_html);




    // Destination
    var destination = subscribe_setup.destination;


    // Initial Form
    var initial_form_html =
    '<div class="initial_form_container">' +
    ' <div class="row">' +

    // Email Input Container
    '   <div class="col s12 m9">' +
    '    <div class="email_container input-field">' +
    '      <input id="email" type="email" class="validate email_input">' +
    '      <label class="email_label" for="email">Email</label>' +
    //'       <label class="email_label" for="email" data-error="wrong" data-success="right">Email</label>' +
    '    </div>' +

    // Agree to terms checkbox
    '    <p>' +
    '      <input type="checkbox" id="check_terms" />' +
    '      <label for="check_terms" class="check_terms">I agree with the <a class="modal-trigger link terms" href="#terms_modal">Terms of Use</a> and <a class="modal-trigger link privacy" href="#privacy_modal">Privacy Policy</a>.</label>' +
    '    </p>' +

    '   </div>' +

    // Subscribe Button Container
    '   <div class="first subscribe_container col s12 m3 blocked">' +
    '    <button class="first subscribe_button btn waves-effect waves-light disabled browser-default" type="submit" name="action">' +
    '       Subscribe' +
    '     </button>' +
    '   </div>' +

    ' </div>' + //end row

    '</div>'; //end initial_form_container



    // Secondary form HTML
    var secondary_form_html =
    '<div class="secondary_form_container">' +

    // Name
    '<div class="row">' +
    '    <div class="input-field col s12">' +
    '      <input id="name" type="text">' +
    '      <label for="name" class="name_label">First Name</label>' +
    '    </div>' +
    '</div>' +


    '<div class="row">' +

    // Postal Code
    '    <div class="input-field col s6">' +
    '      <input id="postal" type="text">' +
    '      <label for="postal">Postal Code</label>' +
    '    </div>' +

    //Birth Date select
    '   <div class="input-field col s6">' +
    '     <input type="date" class="datepicker">' +
    '     <label class="date_label" for="date">Birth Date</label>' +
    '   </div>' +

    '</div>' + // end row


    '<div class="row">' +

    // Checkbox Warner
    '  <div class="col s12 check_warner">' +
    '    <p>' +
    '      <input type="checkbox" id="check_warner" />' +
    '      <label for="check_warner">Subscribe to Warner Music Canada for updates, contests, and music.</label>' +
    '    </p>' +
    '  </div>' +

    '</div>' + //end row


    // finish Button
    ' <div class="row">' +
    '   <div class="last subscribe_container col s12 m3 blocked">' +
    '    <button class="last subscribe_button btn waves-effect waves-light disabled browser-default modal-action modal-close" type="submit" name="action">' +
    '       Finish' +
    '     </button>' +
    '   </div>' +
    ' </div>' +

    '</div>'; // end secondary_form_container



    // Terms Modal
    var terms_modal =
    '<div id="terms_modal" class="modal modal-fixed-footer">' +
    '  <div class="modal-content">' +

    '     <div class="valign-wrapper">' +
    '      <div class="preloader-wrapper small active">' +
    '      <div class="spinner-layer spinner-green-only">' +
    '        <div class="circle-clipper left">' +
    '          <div class="circle"></div>' +
    '        </div><div class="gap-patch">' +
    '          <div class="circle"></div>' +
    '        </div><div class="circle-clipper right">' +
    '          <div class="circle"></div>' +
    '        </div>' +
    '      </div>' +
    '      </div>' +
    '     </div>' +

    '  </div>' +
    '  <div class="modal-footer">' +
    '    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>' +
    '  </div>' +
    '</div>';


    // Privacy Modal
    var privacy_modal =
    '<div id="privacy_modal" class="modal modal-fixed-footer">' +
    '  <div class="modal-content">' +

    '     <div class="valign-wrapper">' +
    '      <div class="preloader-wrapper small active">' +
    '      <div class="spinner-layer spinner-green-only">' +
    '        <div class="circle-clipper left">' +
    '          <div class="circle"></div>' +
    '        </div><div class="gap-patch">' +
    '          <div class="circle"></div>' +
    '        </div><div class="circle-clipper right">' +
    '          <div class="circle"></div>' +
    '        </div>' +
    '      </div>' +
    '      </div>' +
    '     </div>' +

    '   </div>' +
    '  <div class="modal-footer">' +
    '    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>' +
    '  </div>' +
    '</div>';




    // Document Ready
    $(document).ready(function() {
      $(destination).html('<div class="subscribe_pkg" style="display: none;">' + initial_form_html + secondary_form_html + terms_modal + privacy_modal + '</div>');
    });


    // INITIAL FORM -------------

    //Email unfocus / unblock subscribe
    $(destination + ' .email_input').focusout(function() {
      setTimeout(function(){
        unblock_subscribe();
      }, 400);
    });

    // Agree to Terms check
    $(document).on('click', destination + ' #check_terms', function() {
      $(destination + ' .check_terms').toggleClass('checked');
        unblock_subscribe();
    });

    // terms link
    $(document).on('click', destination + ' .terms.link', function() {
      $(destination + ' #terms_modal .modal-content').load('terms.html');
      $(destination + ' #terms_modal').openModal();
    });

    // privacy link
    $(document).on('click', destination + ' .privacy.link', function() {
      $(destination + ' #privacy_modal .modal-content').load('privacy.html');
      $(destination + ' #privacy_modal').openModal();
    });


    // Unblock first subscribe button
    function unblock_subscribe() {
      if( $(destination + ' .email_input').hasClass('valid') && $(destination + ' .check_terms').hasClass('checked')){
        $(destination + ' .first.subscribe_button').removeClass('disabled');
        $(destination + ' .first.subscribe_container  ').css('pointer-events', 'auto');

      } else {
        $(destination + ' .first.subscribe_button').addClass('disabled')
        $(destination + ' .first.subscribe_container').css('pointer-events', 'none');
      }
    }

    // Initial Submit Click
    $(document).on('click', destination + ' .first.subscribe_button', function() {

      var initial_form_results = {
        'cdc_id': subscribe_setup.cdc_id,
        'datasource': subscribe_setup.datasource,
        'email': $(destination + ' #email').val()
      }

      $.getJSON('http://www.warnermusic.ca/feeds/cdc_subscribe.php?callback=?', initial_form_results, function(data) {
         $(destination + ' .initial_form_container').css('display', 'none');
         $(destination + ' .secondary_form_container').slideToggle(800);
      })
    });



    // SECONDARY FORM -------------

    // Date Picker
    $(destination + ' .datepicker').pickadate({
      onOpen: function() {
        $(destination + ' .date_label').addClass('active');
      },
      onClose: function() {
        unblock_subscribe_last();
        if($(destination + ' .datepicker').val().length == 0){
         $(destination + ' .date_label').removeClass('active');
        }
      },
      format: 'yyyy-mm-dd',
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 100, // Creates a dropdown of 99 years to control year
      max: true
    })


    // Check Warner Toggle
    var warner_check = '';
    $(document).on('click', destination + ' #check_warner', function() {
      $(destination + ' .check_warner').toggleClass('checked');

      if( $(destination + ' .check_warner').hasClass('checked') ){
        warner_check = 1;
      } else {
        warner_check = 0;
      }

      unblock_subscribe_last();
    });


    // Inputs focus-out
    $(destination + ' .secondary_form_container input').focusout(function() {
      unblock_subscribe_last();
    });


    // unblock subscribe last
    function unblock_subscribe_last() {
      if( $(destination + ' #name').val().length > 0 || $(destination + ' #postal').val().length > 0 || $(destination + ' .datepicker').val().length > 0 || $(destination + ' .check_warner').hasClass('checked') ){
        $(destination + ' .last.subscribe_button').removeClass('disabled');
        $(destination + ' .last.subscribe_container').css('pointer-events', 'auto');
      } else {
        $(destination + ' .last.subscribe_button').addClass('disabled')
        $(destination + ' .last.subscribe_container').css('pointer-events', 'none');
      }
    }


    // final submit click
    $(document).on('click', destination + ' .last.subscribe_button', function() {

      var final_form_results = {
        'cdc_id': subscribe_setup.cdc_id,
        'datasource': subscribe_setup.datasource,
        'email': $(destination + ' #email').val(),
        'name': $(destination + ' #name').val(),
        'postal': $(destination + ' #postal').val(),
        'birth_date': $.trim($(destination + ' .datepicker').val()),
        'warner_subscribe': warner_check
      }


      $.getJSON('http://www.warnermusic.ca/feeds/cdc_subscribe.php?callback=?', final_form_results, function(data) {
        Materialize.toast('Thanks for subscribing!', 4000);

        // Reset Initial Form
        $(destination + ' .initial_form_container').fadeIn();
        $(destination + ' .initial_form_container #email').val('').removeClass('valid');
        $(destination + ' .initial_form_container .email_label').removeClass('active');
        $(destination + ' .initial_form_container .check_terms').removeClass('checked');
        $(destination + ' .initial_form_container #check_terms').attr('checked', false);
        unblock_subscribe();

        // Reset Secondary form
        $(destination + ' .secondary_form_container').slideToggle(500);
        $(destination + ' .secondary_form_container #name').val('');
        $(destination + ' .secondary_form_container #postal').val('');
        $(destination + ' .secondary_form_container .datepicker').val('');
        $(destination + ' .secondary_form_container .check_warner').removeClass('checked');
        $(destination + ' .secondary_form_container #check_warner').attr('checked', false);
        $(destination + ' .secondary_form_container .last.subscribe_button').addClass('disabled');
        $(destination + ' .secondary_form_container .last.subscribe_container').css('pointer-events', 'none');
        $(destination + ' .secondary_form_container label').removeClass('active');
      });
    });

  } //end app

};
