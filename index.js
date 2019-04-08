let store = {
  drivers: [],
  passengers: [],
  trips: []
}
let driverId = 0
let passengerId = 0
let tripId = 0
class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }
  passengers(){
    let trips = this.trips()
    // debugger
    return trips.map(trip => trip.passenger())
  }
}

class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }
  drivers(){
    let trips = this.trips()
    return trips.map(trip => trip.driver())
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    // debugger
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  passenger(){
    // debugger
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }

  driver(){
    return store.drivers.find(driver => driver.id === this.driverId)
  }

}
