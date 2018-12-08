(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            cardata : [],
            carsingledata : [],

            carEngine : "",
			carSuspension : "",
			carBreak : "",
			carSteering : "",
			carPerformance : "",
            carBattery : "",
            carDimensions : "",
            carVideo : "",
            
            showDetails : false
        },

        created : function() {
            this.fetchCarData(null);
        },

        methods : {
            fetchOne(e) {
                this.fetchCarData(e.currentTarget.dataset.car);
            },

            loadCar(e) {
                // stub
                e.preventDefault();

                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.cardata.filter(car => car.car_video === dataKey);

                this.carEngine = currentData[0].car_engine;
                this.carSuspension = currentData[0].car_suspension;
				this.carBreak = currentData[0].car_break;
				this.carSteering = currentData[0].car_steering;
				this.carPerformance = currentData[0].car_performance;
                this.carBattery = currentData[0].car_battery;
                this.carDimensions = currentData[0].car_dimension;
                this.carVideo = dataKey;

                this.showDetails = true;
            },

            fetchMovieData(car) {
                url = car ? `./includes/index.php?car=${car}` : './includes/index.php';

                fetch(url)
                .then(res => res.json())
                .then(data => {
                    if (car) {
                        this.cardata = data;
                    } else {
                        this.carsingledata = data;
                    }
                })
                .catch(function(error) {
                    //console.log(error);
                });
            }
        }
    });
})();