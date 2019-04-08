let store = {drivers: [], passengers:[], trips: []}

let driverId = 0
let passegerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {
        return trip.driverId === this.id
      }
    )
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }
}


class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passegerId

    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {
        return trip.passengerId === this.id
      }
    )
  }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver()
    })
  }
}


class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)
  }
  driver() {
    //[store.drivers].find the driver in the array whose id === this(trip's).driverID
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }
  passenger() {
    // [store.passengers].find the passenger in the array whose id === this(trip's).passegerId
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }
}
