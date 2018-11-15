$(document).ready(function() {
    var hiddenBox = $( "#table" );
    $( "#close_btn" ).on( "click", function( event ) {
        hiddenBox.show();
    });
});

$(document).ready(function() {
    var hiddenBox = $( "#table" );
    $( "#open_btn" ).on( "click", function( event ) {
        hiddenBox.hide();
    });
});