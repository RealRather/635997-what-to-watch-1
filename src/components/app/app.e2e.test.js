import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Simulate event in App`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<App
    moviesCardsNames={
      [{
        filmName: `Fantastic Beasts: The Crimes of Grindelwald`,
        src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
      },
      {
        filmName: `Bohemian Rhapsody`,
        src: `img/bohemian-rhapsody.jpg`
      }]
    }
    onClick={clickHandler}
  />);

  const cardTitles = app.find(`.small-movie-card__title`);
  cardTitles.map((it) => {
    it.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
