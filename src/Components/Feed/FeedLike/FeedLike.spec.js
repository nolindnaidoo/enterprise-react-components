import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FeedLike from '../FeedLike';

configure({ adapter: new Adapter() });

describe('<FeedLike /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <FeedLike as="a" className="feedLike-custom" style={{}}>
        children
      </FeedLike>
    );
    expect(wrapper.find('FeedLike').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('feedLike feedLike-custom');
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has content prop', () => {
    const wrapper = shallow(<FeedLike content="example" />);
    expect(wrapper.prop('content')).toEqual('example');
  });
  it('has icon prop', () => {
    const wrapper = shallow(<FeedLike icon="like" />);
    expect(wrapper.prop('icon')).toEqual('like');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <FeedLike as="a" className="feedLike-custom" style={{}}>
        children
      </FeedLike>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<FeedLike content="example" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<FeedLike icon="like" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
