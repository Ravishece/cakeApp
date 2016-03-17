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
    
    $('body').on('click','.js-select-shape',function(){
        $('.type-cake').show();
        $('.js-cake-type').removeClass('f-gray1');
    });
    
    $('body').on('click','.js-select-type',function(){
        $('.serve-cake').show();
        $('.js-cake-serve').removeClass('f-gray1');
    });
    
    $('body').on('click','.camera-img',function(){
        //$('.dropdown-button').click();
        alert('image captured');
    });
    
})

  $(function() {

//    // In this case the initialization function returns the already created instance
    //var inst = $('[data-remodal-id=modal2]').remodal();
//
//inst.open();
//    inst.close();
//    inst.getState();
//    inst.destroy();
  });