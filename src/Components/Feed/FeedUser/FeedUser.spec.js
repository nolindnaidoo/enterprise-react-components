import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FeedUser from '../FeedUser';

configure({ adapter: new Adapter() });

describe('<FeedUser /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <FeedUser as="a" className="feedUser-custom" style={{}}>
        children
      </FeedUser>
    );
    expect(wrapper.find('FeedUser').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('feedUser feedUser-custom');
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has content prop', () => {
    const wrapper = shallow(<FeedUser content="example" />);
    expect(wrapper.prop('content')).toEqual('example');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <FeedUser as="a" className="feedUser-custom" style={{}}>
        children
      </FeedUser>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<FeedUser content="example" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
