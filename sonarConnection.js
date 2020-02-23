var sonarConnection = (function () {
    'use strict';

    var sonarHub;

    var processSonarData = function (sonarData) {
        
        $.each(sonarData, function (index, item) {
            sonarImage.draw(item.Angle, item.Distance);
            sonarStats.fillTable(item.Angle, item.Distance);
        });
    };

    return {
        init: function (url) {
            $.connection.hub.url = url;

            sonarHub = $.connection.sonarHub;

            if (sonarHub) {
                sonarHub.client.sonarData = processSonarData;
                $.connection.hub.start();
            } else {
                alert('Sonar hub not found!');
            }
        }
    };
}());