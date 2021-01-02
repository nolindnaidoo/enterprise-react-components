import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FeedEvent from '../FeedEvent';

configure({ adapter: new Adapter() });

describe('<FeedEvent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <FeedEvent as="span" className="feedEvent-custom" style={{}}>
        children
      </FeedEvent>
    );
    expect(wrapper.find('FeedEvent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual('feedEvent feedEvent-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has props', () => {
    const wrapper = shallow(
      <FeedEvent
        content="example"
        date="29/01/2018"
        extraImages={[]}
        extraText="text"
        icon="like"
        image="path/to/image"
        meta="test"
        summary="summary"
      />
    );
    expect(wrapper.prop('content')).toEqual('example');
    expect(wrapper.prop('date')).toEqual('29/01/2018');
    expect(wrapper.prop('extraImages')).toEqual([]);
    expect(wrapper.prop('extraText')).toEqual('text');
    expect(wrapper.prop('icon')).toEqual('like');
    expect(wrapper.prop('image')).toEqual('path/to/image');
    expect(wrapper.prop('meta')).toEqual('test');
    expect(wrapper.prop('summary')).toEqual('summary');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <FeedEvent as="span" className="feedEvent-custom" style={{}}>
        children
      </FeedEvent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(
      <FeedEvent
        content="example"
        date="29/01/2018"
        extraImages={[]}
        extraText="text"
        icon="like"
        image="path/to/image"
        meta="test"
        summary="summary"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
