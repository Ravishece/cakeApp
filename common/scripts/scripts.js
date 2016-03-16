$(function(){
    $('body').on('click','.dropdown-button',function(e){
        e.preventDefault();
        if($('#dropdown1').css('display') === 'none'){
            $('#dropdown1').addClass('dropdown-show');
        }else{
             $('#dropdown1').removeClass('dropdown-show');   
        }
            
    });

    
     $('body').on('click','#dropdown1 a ',function(e){
        e.preventDefault();
        //alert(this.text);
        $('.dropdown-button').click();
    });
    
})
