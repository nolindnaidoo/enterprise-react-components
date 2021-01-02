import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import MessageContent from '../MessageContent';

configure({ adapter: new Adapter() });

describe('<MessageContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <MessageContent as="span" className="messageContent-custom" style={{}}>
        children
      </MessageContent>
    );
    expect(wrapper.find('MessageContent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual(
      'messageContent messageContent-custom'
    );
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has content prop', () => {
    const wrapper = shallow(<MessageContent content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <MessageContent as="span" className="messageContent-custom" style={{}}>
        children
      </MessageContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<MessageContent content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
