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

  const cardTitles = main.find(`.small-movie-card__title`);
  cardTitles.map((it) => {
    it.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
