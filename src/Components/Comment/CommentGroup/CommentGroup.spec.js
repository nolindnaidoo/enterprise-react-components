import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CommentGroup from '../CommentGroup';

configure({ adapter: new Adapter() });

describe('<CommentGroup /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <CommentGroup
        as="div"
        className="commentGroup-custom"
        collapsed
        minimal
        size="big"
        style={{}}
        threaded
      >
        children
      </CommentGroup>
    );
    expect(wrapper.find('CommentGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('div');
    expect(wrapper.prop('className')).toEqual(
      'commentGroup commentGroup-custom'
    );
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('collapsed')).toEqual(true);
    expect(wrapper.prop('minimal')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('big');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('threaded')).toEqual(true);
  });
  it('has content', () => {
    const wrapper = shallow(<CommentGroup content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <CommentGroup
        as="div"
        className="commentGroup-custom"
        collapsed
        minimal
        size="big"
        style={{}}
        threaded
      >
        children
      </CommentGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<CommentGroup content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
