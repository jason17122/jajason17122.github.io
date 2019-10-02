jQuery(document).ready(function($){

  $('.1').on({
       'click': function(){
           $('#change-image').attr('src','mapphoto1.jpg');
       }
   });
   
  $('.2').on({
       'click': function(){
           $('#change-image').attr('src','mapphoto2.jpg');
       }
   });
   
  $('.3').on({
       'click': function(){
           $('#change-image').attr('src','mapphoto3.jpg');
       }
   });
   
  $('.4').on({
       'click': function(){
           $('#change-image').attr('src','mapphoto4.jpg');
       }
   });
   
  $('.5').on({
    'click': function(){
        $('#change-image').attr('src','mapphoto5.jpg');
    }
});

$('.6').on({
  'click': function(){
      $('#change-image').attr('src','mapphoto6.jpg');
  }
});

$('.7').on({
  'click': function(){
      $('#change-image').attr('src','mapphoto7.jpg');
  }
});

$('.8').on({
  'click': function(){
      $('#change-image').attr('src','mapphoto8.jpg');
  }
});

$('.9').on({
  'click': function(){
      $('#change-image').attr('src','mapphoto9.jpg');
  }
});

$('.10').on({
  'click': function(){
      $('#change-image').attr('src','mapphoto10.jpg');
  }
});

$('.11').on({
  'click': function(){
      $('#change-image').attr('src','mapphoto11.jpg');
  }
});

$('.12').on({
  'click': function(){
      $('#change-image').attr('src','map photo.jpg');
  }
});
  });
  
  $(document).ready(function() {
    var f = document.getElementById('blink');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 1000);

});

var target = document.getElementById('blink');
var targetHeight = target.outerHeight();