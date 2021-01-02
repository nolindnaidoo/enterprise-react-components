import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FeedMeta from '../FeedMeta';

configure({ adapter: new Adapter() });

describe('<FeedMeta /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <FeedMeta as="a" className="feedMeta-custom" style={{}}>
        children
      </FeedMeta>
    );
    expect(wrapper.find('FeedMeta').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('feedMeta feedMeta-custom');
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has content & like prop', () => {
    const wrapper = shallow(<FeedMeta content="example" like="3 likes" />);
    expect(wrapper.prop('content')).toEqual('example');
    expect(wrapper.prop('like')).toEqual('3 likes');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <FeedMeta as="a" className="feedMeta-custom" style={{}}>
        children
      </FeedMeta>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(
      <FeedMeta content="example" like="3 likes" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
