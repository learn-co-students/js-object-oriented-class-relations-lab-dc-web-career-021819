let driverIds = 0;
let passengerIds = 0;
let tripIds = 0;

const store = { drivers: [], passengers: [], trips: [] };

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverIds;
    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(e => e.driver() === this);
  }
  passengers() {
    return this.trips().map(e => e.passenger());
  }
}
class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerIds;
    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(e => e.passenger() === this);
  }
  drivers() {
    return this.trips().map(e => e.driver());
  }
}
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripIds;
    this.passengerId = passenger.id;
    this.driverId = driver.id;
    store.trips.push(this);
  }

  passenger() {
    return store.passengers.find(e => e.id === this.passengerId);
  }
  driver() {
    return store.drivers.find(e => e.id == this.driverId);
  }
}
