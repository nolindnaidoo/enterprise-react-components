import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CommentText from '../CommentText';

configure({ adapter: new Adapter() });

describe('<CommentText /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <CommentText as="span" className="commentText-custom" style={{}}>
        children
      </CommentText>
    );
    expect(wrapper.find('CommentText').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual('commentText commentText-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('snapshot', () => {
    const component = renderer.create(
      <CommentText as="span" className="commentText-custom" style={{}}>
        children
      </CommentText>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
