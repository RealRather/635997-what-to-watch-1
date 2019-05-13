import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from './main-page.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Simulate event in MainPage`, () => {
  const clickHandler = jest.fn();
  const main = shallow(<MainPage
    movieNames={
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

  const cardTitles = main.find(`.small-movie-card__title`);
  cardTitles.map((it) => {
    it.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
