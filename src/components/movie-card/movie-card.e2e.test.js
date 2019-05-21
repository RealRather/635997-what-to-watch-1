import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});
const mock = {
  id: `33`,
  name: `Bohemian`,
  src: `img/bohemian.jpg`,
  preview: {
    mp4: `https://download.trailer-480p.mp4`,
    webm: `https://Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
};

it(`Simulate click event in MovieCard`, () =>{
  const handler = jest.fn();
  const movie = shallow(<MovieCard
    movie={mock}
    isVideoPlaying={false}
    clickHandler={handler}
    focusHandler={handler}
    leaveHandler={handler}
  />);
  const cardTitle = movie.find(`.small-movie-card`);
  cardTitle.simulate(`pointerEnter`, {preventDefault() {}});
  expect(handler).toHaveBeenCalledTimes(1);
});
