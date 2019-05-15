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
  const movieName = mock;
  const clickHandler = jest.fn();
  const movie = shallow(<MovieCard
    movieName={movieName}
    onClick = {clickHandler}
  />);
  const cardTitle = movie.find(`.small-movie-card__title`);
  const playButton = movie.find(`.small-movie-card__play-btn`);
  cardTitle.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
  playButton.simulate(`click`, {targetInst: movieName.id});
  expect(clickHandler).toHaveBeenCalledWith({targetInst: movieName.id});
});
