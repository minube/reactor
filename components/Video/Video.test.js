import React from 'react';
import renderer from 'react-test-renderer';

import Video from './Video';

const VIDEO_PLACEHOLDER = 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4';


describe('<Video>', () => {
  it('renders', () => {
    const tree = renderer.create(<Video />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {source}', () => {
    const tree = renderer.create(<Video source={VIDEO_PLACEHOLDER} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {source} (youtube)', () => {
    const tree = renderer.create(<Video source="https://www.youtube.com/watch?v=cx4MxQcD8Fk" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {source} (vimeo)', () => {
    const tree = renderer.create(<Video source="https://vimeo.com/225434434" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {autoplay}', () => {
    const tree = renderer.create(<Video source={VIDEO_PLACEHOLDER} autoplay />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onLoad}', () => {
    // @TODO: Test <Video /> {onLoad}
  });

  it('when {style}', () => {
    const tree = renderer.create(<Video style={{ width: 640, height: 400,}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

