import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import MessageList from '../MessageList';

configure({ adapter: new Adapter() });

describe('<MessageList /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <MessageList as="ul" className="messageList-custom" style={{}}>
        children
      </MessageList>
    );
    expect(wrapper.find('MessageList').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('ul');
    expect(wrapper.prop('className')).toEqual('messageList messageList-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has items prop', () => {
    const wrapper = shallow(<MessageList items={['Example1', 'Example2']} />);
    expect(wrapper.prop('items')).toEqual(['Example1', 'Example2']);
  });

  it('snapshot', () => {
    const component = renderer.create(
      <MessageList as="ul" className="messageList-custom" style={{}}>
        children
      </MessageList>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(
      <MessageList items={['Example1', 'Example2']} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
