import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

const mocks = [
  {
    id: `11`,
    name: `Fantastic`,
    src: `img/fantastic.jpg`,
    preview: {
      mp4: `https://download.trailer-480p.mp4`,
      webm: `https://Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    }
  },
  {
    id: `22`,
    name: `Bohemian`,
    src: `img/bohemian.jpg`,
    preview: {
      mp4: `https://download.trailer-480p.mp4`,
      webm: `https://Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    }
  },
  {
    id: `33`,
    name: `Macbeth`,
    src: `img/macbeth.jpg`,
    preview: {
      mp4: `https://download.trailer-480p.mp4`,
      webm: `https://Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    }
  },
  {
    id: `44`,
    name: `We need to`,
    src: `img/we-need-to.jpg`,
    preview: {
      mp4: `https://download.trailer-480p.mp4`,
      webm: `https://Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    }
  }];

it(`Render MoviesList`, () => {
  const tree = renderer
    .create(<MoviesList
      movies={mocks}
    />,
    {
      createNodeMock: (element) => element
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});


