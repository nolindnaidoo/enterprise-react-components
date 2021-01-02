import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FeedExtra from '../FeedExtra';

configure({ adapter: new Adapter() });

describe('<FeedExtra /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <FeedExtra as="span" className="feedExtra-custom" style={{}}>
        children
      </FeedExtra>
    );
    expect(wrapper.find('FeedExtra').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual('feedExtra feedExtra-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has props', () => {
    const wrapper = shallow(<FeedExtra content="example" text />);
    expect(wrapper.prop('content')).toEqual('example');
    expect(wrapper.prop('text')).toEqual(true);
  });

  it('has images prop', () => {
    const wrapper = shallow(<FeedExtra images={['image']} />);
    expect(wrapper.prop('images')).toEqual(['image']);
  });

  it('snapshot', () => {
    const component = renderer.create(
      <FeedExtra as="span" className="feedExtra-custom" style={{}}>
        children
      </FeedExtra>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<FeedExtra content="example" text />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<FeedExtra images={['image']} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
