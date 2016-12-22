/**
 * Created by mamoruohara on 12/18/16.
 */
$('.nav-button').on('click', function() {
    $('.nav-button').removeClass('active');
    $(this).addClass('active');
    $(this).transition('jiggle');
});

var waypoint = new Waypoint({
    element: document.getElementById('main-container'),
    handler: function(direction) {
        if (direction === 'up') {
            $('#nav').fadeTo( "fast", 1 );
        } else {
            $('#nav').fadeTo( "fast", 0.8 );
        }
    },
    offset: $('#nav').height()
});