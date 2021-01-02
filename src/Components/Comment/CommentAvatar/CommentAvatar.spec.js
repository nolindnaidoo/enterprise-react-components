import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CommentAvatar from '../CommentAvatar';

configure({ adapter: new Adapter() });

describe('<CommentAvatar /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <CommentAvatar
        as="span"
        className="commentAvatar-custom"
        src=""
        style={{}}
      />
    );
    expect(wrapper.find('CommentAvatar').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual(
      'commentAvatar commentAvatar-custom'
    );
    expect(wrapper.prop('src')).toEqual('');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('snapshot', () => {
    const component = renderer.create(
      <CommentAvatar
        as="span"
        className="commentAvatar-custom"
        src=""
        style={{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
