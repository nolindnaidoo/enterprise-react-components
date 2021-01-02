import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CommentContent from '../CommentContent';

configure({ adapter: new Adapter() });

describe('<CommentContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <CommentContent as="span" className="commentContent-custom" style={{}}>
        children
      </CommentContent>
    );
    expect(wrapper.find('CommentContent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual(
      'commentContent commentContent-custom'
    );
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has content', () => {
    const wrapper = shallow(<CommentContent content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <CommentContent as="span" className="commentContent-custom" style={{}}>
        children
      </CommentContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<CommentContent content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
