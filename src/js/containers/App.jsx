import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Navitem from '../models/Navitem';

class App extends Component {

  state = {

    navitems: []

  }

  getTop($el) {
    const el = document.querySelector($el);
    return el.getBoundingClientRect().top;
  }

  componentDidMount() {

    this.add(
   [{id: 1, title: `Start`, active: `go`, location: () => this.getTop(`.header__bg`)}],
   [{id: 2, title: `1954`, active: ``, location: () => this.getTop(`.sectionOne`)}],
   [{id: 3, title: `1960`, active: ``, location: () => this.getTop(`.sectionTwo`)}],
   [{id: 4, title: `The Velvet Underground`, active: ``, location: () => this.getTop(`.sectionThree`)}],
   [{id: 5, title: `1965`, active: ``, location: () => this.getTop(`.sectionFour`)}],
   [{id: 6, title: `Going Solo`, active: ``, location: () => this.getTop(`.sectionFive`)}],
   [{id: 7, title: `1967`, active: ``, location: () => this.getTop(`.sectionSix`)}],
   [{id: 8, title: `Video`, active: ``, location: () => this.getTop(`.sectionSeven`)}],
   [{id: 9, title: `1970`, active: ``, location: () => this.getTop(`.sectionEight`)}],
   [{id: 10, title: `1974`, active: ``, location: () => this.getTop(`.sectionNine`)}],
   [{id: 11, title: `Albums`, active: ``, location: () => this.getTop(`.sectionTen`)}],
   [{id: 12, title: `Conclusie`, active: ``, location: () => this.getTop(`.sectionEleven`)}]
   );


    window.addEventListener(`scroll`, this.handleScroll);
  }

  add = (...titles) => {
    const {navitems} = this.state;

    titles.forEach(title => {
      const navitem = new Navitem(title[0].id, title[0].title, title[0].location, title[0].active);
      //push to state
      navitems.push(navitem);
    });
    this.setState({navitems});
  }

  handleScroll = () => {
    const {navitems} = this.state;
   // const scrollDistance = window.pageYOffset;

    navitems.map(t => {

      if (t.location() < (2 * window.innerHeight / 3) && t.location() > - window.innerHeight) {
        t.active = `check`;
      } else {
        t.active = ``;
      }

    });

    this.setState({navitems});
  }

  render() {

    const {navitems} = this.state;

    return (
      <nav className='navigation'>
        <Navigation navItems={navitems} onScroll={this.handleScroll} />
      </nav>
    );

  }

}

export default App;
