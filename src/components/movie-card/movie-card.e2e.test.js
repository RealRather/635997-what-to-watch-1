import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});
const mock = {
  id: `33`,
  name: `Bohemian`,
  src: `img/bohemian.jpg`
};

it(`Simulate click event in MovieCard`, () =>{
  const clickHandler = jest.fn();
  const movie = shallow(<MovieCard
    movie={mock}
    onClick = {clickHandler}
    onFocus={clickHandler}
  />);
  const cardTitle = movie.find(`.small-movie-card__title`);
  const playButton = movie.find(`.small-movie-card__play-btn`);
  cardTitle.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
  playButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledWith(mock.id);
});
