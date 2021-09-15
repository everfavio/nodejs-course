const event = {
  name: 'Birthday party',
  gestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList() {
    console.log('Guest List for ' + this.name)
    this.gestList.forEach(guest => {
      console.log(guest + ' is attending ' + this.name)
    });
  }
}

event.printGuestList()