import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CommentMetadata from '../CommentMetadata';

configure({ adapter: new Adapter() });

describe('<CommentMetadata /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <CommentMetadata as="span" className="commentMetaData-custom" style={{}}>
        children
      </CommentMetadata>
    );
    expect(wrapper.find('CommentMetadata').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual(
      'commentMetaData commentMetaData-custom'
    );
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has content', () => {
    const wrapper = shallow(<CommentMetadata content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <CommentMetadata as="span" className="commentMetadata-custom" style={{}}>
        children
      </CommentMetadata>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<CommentMetadata content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
