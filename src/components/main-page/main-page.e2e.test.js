import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from './main-page.jsx';

Enzyme.configure({adapter: new Adapter()});
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

it(`Simulate event in MainPage`, () => {
  const {movieNames} = mocks;
  const onClickHandler = jest.fn();
  const onFocusClickHndler = jest.fn();
  const main = shallow(<MainPage
    movieNames={movieNames}
    onClick={onClickHandler}
    _onFocusHandler={onFocusClickHndler}
  />);

  const cardTitles = main.find(`.small-movie-card__title`);
  cardTitles.map((it) => {
    it.simulate(`click`, {preventDefault() {}});
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
