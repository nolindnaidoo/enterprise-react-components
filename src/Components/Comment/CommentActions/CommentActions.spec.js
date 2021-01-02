import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CommentActions from '../CommentActions';

configure({ adapter: new Adapter() });

describe('<CommentActions /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <CommentActions as="span" className="commentActions-custom" style={{}}>
        children
      </CommentActions>
    );
    expect(wrapper.find('CommentActions').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual(
      'commentActions commentActions-custom'
    );
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has content', () => {
    const wrapper = shallow(<CommentActions content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <CommentActions as="span" className="commentActions-custom" style={{}}>
        children
      </CommentActions>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<CommentActions content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
