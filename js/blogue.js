$(document).ready(function() {
    
// ******************* SECTION ACTUALITE ****************************
    
    $('#actu1').click(function(e){
        e.preventDefault();
        $('#act').load('evelist.html .actu1', function(){
        })
    })

    $('#actu2').click(function(e){
        e.preventDefault();
        $('#act').load('evelist.html .actu2', function(){
        })
    })

    $('#actu3').click(function(e){
        e.preventDefault();
        $('#act').load('evelist.html .actu3', function(){
        })
    })

    $('#actu4').click(function(e){
        e.preventDefault();
        $('#act').load('evelist.html .actu4', function(){
        })
    })


// ******************* SECTION EVENEMENT ****************************

    $('#eve1').click(function(e){
        e.preventDefault();
        $('#event').load('evelist.html .eve1', function(){
        })
    })

    $('#eve2').click(function(e){
        e.preventDefault();
        $('#event').load('evelist.html .eve2', function(){
        });
    });


// *************** SECTION FORMATION *******************************

    $('#form1').click(function(e){
        e.preventDefault();
        $('#formation').load('evelist.html .form1', function(){
        });
    });  

    $('#form2').click(function(e){
        e.preventDefault();
        $('#formation').load('evelist.html .form2', function(){
        });
    }); 
         
});