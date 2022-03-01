import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["songName", "song"]

  connect() {
    console.log(this.songNameTarget.id)
    console.log(this.songTargets)
    this.changeSong()
  }

  changeSong() {
    console.log("Next song!")
    let counter = this.songNameTarget.id
    const minutes = this.songTargets[counter].dataset.time
    const milliseconds = parseInt(minutes) * 1000
    this.songNameTarget.innerText = this.songTargets[counter].innerText
    this.songNameTarget.id = parseInt(counter) + 1
    setTimeout(() => { this.changeSong() }, milliseconds);
  }
}
