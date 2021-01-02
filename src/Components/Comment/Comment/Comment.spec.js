import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Comment from '../Comment';

configure({ adapter: new Adapter() });

describe('<Comment /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Comment as="span" className="comment-custom" collapsed style={{}}>
        children
      </Comment>
    );
    expect(wrapper.find('Comment').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual('comment comment-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('collapsed')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has content', () => {
    const wrapper = shallow(<Comment content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <Comment as="span" className="comment-custom" collapsed style={{}}>
        children
      </Comment>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<Comment content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
