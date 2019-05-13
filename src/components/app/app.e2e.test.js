import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app.jsx';

configure({adapter: new Adapter()});

it(`Simulate event in App`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<App
    moviesCardsNames={
      [{
        filmName: `Fantastic`,
        src: `img/fantastic.jpg`
      },
      {
        filmName: `Bohemian`,
        src: `img/bohemian.jpg`
      },
      {
        filmName: `Macbeth`,
        src: `img/macbeth.jpg`
      },
      {
        filmName: `We need to`,
        src: `img/we-need-to.jpg`
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
