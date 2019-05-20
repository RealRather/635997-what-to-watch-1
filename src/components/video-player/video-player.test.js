import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const mock = {
  id: `22`,
  name: `Bohemian`,
  src: `img/bohemian.jpg`,
  preview: {
    mp4: `https://download.trailer-480p.mp4`,
    webm: `https://Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
};

it(`Render VideoPlayer`, () => {
  const clickHandler = jest.fn();
  const focusHandler = jest.fn();
  const tree = renderer
    .create(<VideoPlayer
      movie={mock}
      onClick={clickHandler}
      onFocus={focusHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
