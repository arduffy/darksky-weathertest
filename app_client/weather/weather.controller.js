(function() {

    angular
        .module('darkskyApp')
        .controller('weatherCtrl', weatherCtrl);

    weatherCtrl.$inject = ['$scope', 'DarkskyWeather'];

    function weatherCtrl($scope, DarkskyWeather) {

        var vm = this;
        console.log(window.location);

        vm.content = "Weather";

        /*vm.selectedDepartureICAO = "";
        vm.selectedArrivalICAO = "";
        vm.selectedWeight = "";nod

        //check selected Departure
        if (SelectedData.selectedDepartureICAO !== null) {
            vm.selectedDepartureICAO = SelectedData.selectedDepartureICAO;
        }
        
        //check selected Arrival
        if (SelectedData.selectedArrivalICAO !== null) {
            vm.selectedArrivalICAO = SelectedData.selectedArrivalICAO;
        }

        //check selected weight
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }
*/
        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getDepartureWeather = function() {
            
            var lat = 33.6609;
            console.log(lat);
            var lon = 95.5555;
            console.log(lon);            

            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.departureWeather = response.data;
                    console.log(vm.departureWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...        
        // vm.getArrivalWeather = function() {
            
        //     var lat = 33.6609;
        //     var lon = 95.5555;

        //     //refactored for Angular 1.6 - removed success/error, used Promises...
        //     DarkskyWeather.getWeather(lat, lon)
        //         .then(function(response) {
        //             vm.arrivalWeather = response.data;
        //             console.log(vm.arrivalWeather);
        //         })
        //         .catch(function(e) {
        //             console.log(e);
        //         });
        // }
        
        //call services
        vm.getDepartureWeather();
        //vm.getArrivalWeather();

    }

})();