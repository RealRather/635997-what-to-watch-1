import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Simulate click event in MovieCard`, () =>{
  const clickHandler = jest.fn();
  const movie = shallow(<MovieCard
    movieName={
      {
        filmName: `Fantastic Beasts: The Crimes of Grindelwald`,
        src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
      }
    }
    onClick = {clickHandler}
  />);

  const cardTitle = movie.find(`.small-movie-card__title`);
  cardTitle.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
