import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CommentAuthor from '../CommentAuthor';

configure({ adapter: new Adapter() });

describe('<CommentAuthor /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <CommentAuthor as="span" className="commentAuthor-custom" style={{}}>
        children
      </CommentAuthor>
    );
    expect(wrapper.find('CommentAuthor').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual(
      'commentAuthor commentAuthor-custom'
    );
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has content', () => {
    const wrapper = shallow(<CommentAuthor content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <CommentAuthor as="span" className="commentAuthor-custom" style={{}}>
        children
      </CommentAuthor>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<CommentAuthor content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
