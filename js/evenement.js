$(document).ready(function() {

    $('#eve1').click(function(e){
        e.preventDefault();
        $('#event').load('eve.html .eve1', function(){
            window.location="#test";
        });
    });  

    $('#eve2').click(function(e){
        e.preventDefault();
        $('#event').load('eve.html .eve2', function(){
            window.location="#test";
        });
    }); 

     $('#eve3').click(function(e){
        e.preventDefault();
        $('#event').load('eve.html .eve3', function(){
            window.location="#test";
        });
    }); 

      $('#eve4').click(function(e){
        e.preventDefault();
        $('#event').load('eve.html .eve4', function(){
            window.location="#test";
        });
    }); 
         
});