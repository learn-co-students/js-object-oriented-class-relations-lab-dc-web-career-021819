// `Driver` class:
//   + A driver has many trips, and has many passengers through trips.
//   + `new Driver()` - initialized with a name; returns a JavaScript object that has attributes of `id`, and `name`
//   + `trips()` - returns all of the trips that a driver has taken
//   + `passengers()` - returns all of the passengers that a driver has taken on a trip
//

store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trips) {
        return trips.driverId === this.id;
      }.bind(this)
    );
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}


let passengerId = 0;
class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(
      function(trips) {
        return trips.passengerId === this.id;
      }.bind(this)
    );
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

// `Trip` class:
//   + A trip belongs to a driver and belongs to a passenger.
//   + `new Trip()` - initialized with an instance of driver and an instance of passenger; returns a JavaScript that object has attributes `id`, `driverId`, and `passengerId`
//   + `driver()` - returns the driver associated with the trip
//   + `passenger()` - returns the passenger associated with the trip


let tripId = 0
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    if(driver) {
      this.driverId = driver.id;
      //this.setDriver(driver)
    }
    if(passenger) {
      this.passengerId = passenger.id
      //this.setPassenger(passenger)
    }
    store.trips.push(this)
  }
  setDriver(driver) {
    this.driverId = driver.id
  }

  setPassenger(passenger) {
    this.passengerId = passenger.id
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );
  }

}
