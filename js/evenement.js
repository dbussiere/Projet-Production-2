$(document).ready(function() {

    $('#eve1').click(function(e){
        e.preventDefault();
        $('#event').load('eve.html .eve1', function(){
        });
    });  

    $('#eve2').click(function(e){
        e.preventDefault();
        $('#event').load('eve.html .eve2', function(){
        });
    }); 

     $('#eve3').click(function(e){
        e.preventDefault();
        $('#event').load('eve.html .eve3', function(){
        });
    }); 

      $('#eve4').click(function(e){
        e.preventDefault();
        $('#event').load('eve.html .eve4', function(){
        });
    }); 
         
});