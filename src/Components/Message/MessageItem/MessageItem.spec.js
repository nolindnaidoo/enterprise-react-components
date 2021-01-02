import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import MessageItem from '../MessageItem';

configure({ adapter: new Adapter() });

describe('<MessageItem /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <MessageItem as="span" className="messageItem-custom" style={{}}>
        children
      </MessageItem>
    );
    expect(wrapper.find('MessageItem').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual('messageItem messageItem-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has content prop', () => {
    const wrapper = shallow(<MessageItem content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <MessageItem as="span" className="messageItem-custom" style={{}}>
        children
      </MessageItem>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<MessageItem content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
