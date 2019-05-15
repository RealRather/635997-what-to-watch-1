import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app.jsx';

configure({adapter: new Adapter()});
const mocks = [
  {
    id: `11`,
    filmName: `Fantastic`,
    src: `img/fantastic.jpg`
  },
  {
    id: `22`,
    filmName: `Bohemian`,
    src: `img/bohemian.jpg`
  },
  {
    id: `33`,
    filmName: `Macbeth`,
    src: `img/macbeth.jpg`
  },
  {
    id: `44`,
    filmName: `We need to`,
    src: `img/we-need-to.jpg`
  }
];

it(`Simulate event in App`, () => {
  const {moviesCardsNames} = mocks;
  const clickHandler = jest.fn();
  const onFocusClickHndler = jest.fn();
  const app = shallow(<App
    moviesCardsNames={moviesCardsNames}
    onClick={clickHandler}
    _onFocusHandler={onFocusClickHndler}
  />);

  const cardTitles = app.find(`.small-movie-card__title`);
  cardTitles.map((it) => {
    it.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
