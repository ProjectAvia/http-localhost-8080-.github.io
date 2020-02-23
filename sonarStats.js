var sonarStats = (function () {
    'use strict';

    return {       
        fillTable: function (angle, distance ) {                     

            $('#angle').text(angle);
            $('#distance').text(distance);
        }
    };
}());