//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends VehicleModule {
    constructor(make, model, year, color, mileage, maximumPassengers, maximumSpeed, fuel) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = maximumPassengers;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true                    
        }
    }

    start() {
        if (this.fuel > 0) {            
            return this.start = true
        } else {
            return this.start = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            let roomAvailable = true
            return roomAvailable

        }
    }


}


let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000, 5, 160, 10)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)