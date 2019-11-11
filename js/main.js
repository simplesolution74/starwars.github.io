$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});


$(document).ready(function(){
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});

			
      $(function(){
  $('.menu-item').on('click', function(event) {

    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    
  });
});


      //contacts-form

        $(document).ready(function(){
 



$( 'form#contanct' ).submit(function( event ) {
    

       
     event.preventDefault();

     var name = $("#name").val();
    var email = $("#email").val();
    var text= $('#text').val();

    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var pattern1 = /^([A-Za-z0-9_\-\.])/;
   // var pattern2 = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;

      if(pattern.test(email) == false || pattern1.test(name) == false || pattern1.test(text) == false) {

        
           
     
        formError();
      
        return false;
     
    } else {
    $("input").removeClass('is-invalid');
    $("textarea").removeClass('is-invalid');
        submitForm();
        formSuccessmrk();
  
    }        
   });

function submitForm(){
    // Initiate Variables With Form Content
     var name = $("#name").val();
    var email = $("#email").val();
    var text= $('#text').val();

$.ajax({
        type: "POST",
        url: "php/form.php",
        data: "&name=" + name + "&email=" + email + "&text=" + text,
        success: function(data){
                
                 formSuccessmrk();
                 $( 'form#contanct' ).trigger( 'reset' );
            },
            error: function() {
            
            formError();
          },
            dataType: "json"
       });

}

function formSuccessmrk(){
   $('#msgSubmitmrk').css("display","block");
}

function formError(){
    $("input").addClass('is-invalid');
    $("textarea").addClass('is-invalid');
  
}

});