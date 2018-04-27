//Para quitar el zoom scrolling al maps
$('#googlemaps')
.click(function(){
        $(this).find('iframe').addClass('clicked')})
.mouseleave(function(){
        $(this).find('iframe').removeClass('clicked')});