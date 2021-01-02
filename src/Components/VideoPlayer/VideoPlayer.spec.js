import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from '../VideoPlayer';

configure({ adapter: new Adapter() });

describe('<VideoPlayer /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <VideoPlayer
        aspectRatio="auto"
        autoPlay
        className="videoPlayer-custom"
        fluid
        height={100}
        muted
        playsInline
        poster="./src/poster"
        preload="auto"
        src="https://src"
        startTime={1}
        style={{}}
        width={100}
      />
    );
    expect(wrapper.find('Player').length).toBe(1);
    expect(wrapper.prop('aspectRatio')).toEqual('auto');
    expect(wrapper.prop('autoPlay')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('videoPlayer videoPlayer-custom');
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('height')).toEqual(100);
    expect(wrapper.prop('muted')).toEqual(true);
    expect(wrapper.prop('playsInline')).toEqual(true);
    expect(wrapper.prop('poster')).toEqual('./src/poster');
    expect(wrapper.prop('preload')).toEqual('auto');
    expect(wrapper.prop('src')).toEqual('https://src');
    expect(wrapper.prop('startTime')).toEqual(1);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('width')).toEqual(100);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <VideoPlayer
        aspectRatio="auto"
        autoplay
        className="videoPlayer-custom"
        fluid
        height={100}
        muted
        playsInline
        poster="./src/poster"
        preload="auto"
        src="https://src"
        startTime={1}
        style={{}}
        width={100}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
