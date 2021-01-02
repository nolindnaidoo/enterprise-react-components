import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Modal from '../Modal';

configure({ adapter: new Adapter() });

describe('<Modal /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Modal
        as="a"
        basic
        className="modal-custom"
        closeIcon
        closeOnDimmerClick
        closeOnDocumentClick
        defaultOpen
        dimmer="inverted"
        eventPool="one"
        mountNode={document.body}
        onActionClick={Function}
        onClose={Function}
        onOpen={Function}
        size="fullscreen"
        style={{}}
        trigger={<div />}
      >
        children
      </Modal>
    );
    expect(wrapper.find('Modal').length).toBe(1);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('basic')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('modal modal-custom');
    expect(wrapper.prop('closeIcon')).toEqual(true);
    expect(wrapper.prop('closeOnDimmerClick')).toEqual(true);
    expect(wrapper.prop('closeOnDocumentClick')).toEqual(true);
    expect(wrapper.prop('defaultOpen')).toEqual(true);
    expect(wrapper.prop('dimmer')).toEqual('inverted');
    expect(wrapper.prop('eventPool')).toEqual('one');
    expect(wrapper.prop('mountNode')).toEqual(document.body);
    expect(wrapper.prop('onActionClick')).toEqual(Function);
    expect(wrapper.prop('onClose')).toEqual(Function);
    expect(wrapper.prop('onOpen')).toEqual(Function);
    expect(wrapper.prop('size')).toEqual('fullscreen');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('trigger')).toEqual(<div />);
  });

  it('has header prop', () => {
    const wrapper = shallow(<Modal header="example" />);
    expect(wrapper.prop('header')).toEqual('example');
  });

  it('has open prop', () => {
    const wrapper = shallow(<Modal open />);
    expect(wrapper.prop('open')).toEqual(true);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Modal
        as="a"
        basic
        className="modal-custom"
        closeIcon
        closeOnDimmerClick
        closeOnDocumentClick
        defaultOpen
        dimmer="inverted"
        eventPool="one"
        mountNode={document.body}
        onActionClick={Function}
        onClose={Function}
        onOpen={Function}
        size="fullscreen"
        style={{}}
        trigger={<div />}
      >
        children
      </Modal>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Modal header="example" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Modal open />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
