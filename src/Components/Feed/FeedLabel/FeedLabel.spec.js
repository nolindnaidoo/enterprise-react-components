import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FeedLabel from '../FeedLabel';

configure({ adapter: new Adapter() });

describe('<FeedLabel /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <FeedLabel as="span" className="feedLabel-custom" style={{}}>
        children
      </FeedLabel>
    );
    expect(wrapper.find('FeedLabel').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('feedLabel feedLabel-custom');
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has content prop', () => {
    const wrapper = shallow(<FeedLabel content="example" />);
    expect(wrapper.prop('content')).toEqual('example');
  });
  it('has icon and image prop', () => {
    const wrapper = shallow(<FeedLabel icon="like" image="path/to/image" />);
    expect(wrapper.prop('icon')).toEqual('like');
    expect(wrapper.prop('image')).toEqual('path/to/image');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <FeedLabel as="span" className="feedLabel-custom" style={{}}>
        children
      </FeedLabel>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<FeedLabel content="example" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(
      <FeedLabel icon="like" image="path/to/image" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
