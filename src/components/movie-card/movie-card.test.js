import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const mock = {
  id: `22`,
  name: `Bohemian`,
  src: `img/bohemian.jpg`,
  preview: {
    mp4: `https://download.trailer-480p.mp4`,
    webm: `https://Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
};

it(`Render MovieCard`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MovieCard
      movie={mock}
      clickHandler={clickHandler}
      focusHandler={clickHandler}
      leaveHandler={clickHandler}
    />, {
      createNodeMock: (element) => element
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
