$(document).ready(function(){

	$('#californiaBtn').click(function(){

                var totalAdd = 'pizzaName'

                 $('ol').append('<li>' + totalAdd + '<a><i class="fa fa-times" aria-hidden="true"></i></a>' + '</li>');
            });

	 $(document).on('click','li', function(){
        $(this).hide();    
      });
});