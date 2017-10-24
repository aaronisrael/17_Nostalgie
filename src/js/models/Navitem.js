export default class Navitem {
  id = 0;
  location = 0;
  title = ``;
  active = false;

  constructor(id, title, location, active) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.active = active;
  }

}
