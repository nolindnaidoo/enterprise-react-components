import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CommentAction from '../CommentAction';

configure({ adapter: new Adapter() });

describe('<CommentAction /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <CommentAction active as="a" className="commentAction-custom" style={{}}>
        children
      </CommentAction>
    );
    expect(wrapper.find('CommentAction').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual(
      'commentAction commentAction-custom'
    );
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has content', () => {
    const wrapper = shallow(<CommentAction content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <CommentAction active as="a" className="commentAction-custom" style={{}}>
        children
      </CommentAction>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<CommentAction content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
