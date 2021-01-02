import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import MessageHeader from '../MessageHeader';

configure({ adapter: new Adapter() });

describe('<MessageHeader /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <MessageHeader as="li" className="messageHeader-custom" style={{}}>
        children
      </MessageHeader>
    );
    expect(wrapper.find('MessageHeader').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('li');
    expect(wrapper.prop('className')).toEqual(
      'messageHeader messageHeader-custom'
    );
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has content prop', () => {
    const wrapper = shallow(<MessageHeader content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <MessageHeader as="li" className="messageHeader-custom" style={{}}>
        children
      </MessageHeader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<MessageHeader content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
