import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Message from '../Message';

configure({ adapter: new Adapter() });

describe('<Message /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Message
        as="span"
        attached
        className="message-custom"
        color="red"
        compact
        error
        floating
        hidden={false}
        info
        negative
        onDismiss={Function}
        positive
        size="large"
        style={{}}
        success
        visible
        warning
      >
        children
      </Message>
    );
    expect(wrapper.find('Message').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('attached')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('message message-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('color')).toEqual('red');
    expect(wrapper.prop('compact')).toEqual(true);
    expect(wrapper.prop('error')).toEqual(true);
    expect(wrapper.prop('floating')).toEqual(true);
    expect(wrapper.prop('hidden')).toEqual(false);
    expect(wrapper.prop('info')).toEqual(true);
    expect(wrapper.prop('negative')).toEqual(true);
    expect(wrapper.prop('onDismiss')).toEqual(Function);
    expect(wrapper.prop('positive')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('success')).toEqual(true);
    expect(wrapper.prop('visible')).toEqual(true);
    expect(wrapper.prop('warning')).toEqual(true);
  });

  it('has content prop', () => {
    const wrapper = shallow(<Message content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('has header prop', () => {
    const wrapper = shallow(<Message header="header" />);
    expect(wrapper.prop('header')).toEqual('header');
  });

  it('has icon prop', () => {
    const wrapper = shallow(<Message icon="add" />);
    expect(wrapper.prop('icon')).toEqual('add');
  });

  it('has list prop', () => {
    const wrapper = shallow(<Message list={['Example1', 'Example2']} />);
    expect(wrapper.prop('list')).toEqual(['Example1', 'Example2']);
  });

  it('snapshot', () => {
    const component = renderer.create(
      <Message
        as="span"
        attached
        className="message-custom"
        color="red"
        compact
        error
        floating
        hidden={false}
        info
        negative
        onDismiss={Function}
        positive
        size="large"
        style={{}}
        success
        visible
        warning
      >
        children
      </Message>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<Message content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<Message header="header" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<Message icon="add" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(
      <Message list={['Example1', 'Example2']} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
