$(document).ready(function() {

    $('#form1').click(function(e){
        e.preventDefault();
        $('#event').load('formlist.html .form1', function(){
        });
    });  

    $('#form2').click(function(e){
        e.preventDefault();
        $('#event').load('formlist.html .form2', function(){
        });
    }); 

     $('#form3').click(function(e){
        e.preventDefault();
        $('#event').load('formlist.html .form3', function(){
        });
    }); 

      $('#form4').click(function(e){
        e.preventDefault();
        $('#event').load('formlist.html .form4', function(){
        });
    }); 

      $('#form5').click(function(e){
        e.preventDefault();
        $('#event').load('formlist.html .form5', function(){
        });
    }); 
         
});