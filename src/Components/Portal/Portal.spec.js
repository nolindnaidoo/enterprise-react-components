import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Portal from '../Portal';

configure({ adapter: new Adapter() });

describe('<Portal /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Portal
        className="portal-custom"
        closeOnDocumentClick
        closeOnEscape
        closeOnPortalMouseLeave
        closeOnRootNodeClick
        closeOnTriggerBlur
        closeOnTriggerClick
        closeOnTriggerMouseLeave
        defaultOpen
        mountNode={Function}
        mouseEnterDelay={100}
        mouseLeaveDelay={100}
        onClose={Function}
        onMount={Function}
        onOpen={Function}
        onUnmount={Function}
        open
        openOnTriggerClick
        openOnTriggerFocus
        openOnTriggerMouseEnter
        prepend
        style={{}}
        trigger={<div />}
      >
        children
      </Portal>
    );
    expect(wrapper.find('Portal').length).toBe(1);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('portal portal-custom');
    expect(wrapper.prop('closeOnDocumentClick')).toEqual(true);
    expect(wrapper.prop('closeOnEscape')).toEqual(true);
    expect(wrapper.prop('closeOnPortalMouseLeave')).toEqual(true);
    expect(wrapper.prop('closeOnRootNodeClick')).toEqual(true);
    expect(wrapper.prop('closeOnTriggerBlur')).toEqual(true);
    expect(wrapper.prop('closeOnTriggerClick')).toEqual(true);
    expect(wrapper.prop('closeOnTriggerMouseLeave')).toEqual(true);
    expect(wrapper.prop('defaultOpen')).toEqual(true);
    expect(wrapper.prop('mountNode')).toEqual(Function);
    expect(wrapper.prop('mouseEnterDelay')).toEqual(100);
    expect(wrapper.prop('mouseLeaveDelay')).toEqual(100);
    expect(wrapper.prop('onClose')).toEqual(Function);
    expect(wrapper.prop('onMount')).toEqual(Function);
    expect(wrapper.prop('onOpen')).toEqual(Function);
    expect(wrapper.prop('onUnmount')).toEqual(Function);
    expect(wrapper.prop('open')).toEqual(true);
    expect(wrapper.prop('openOnTriggerClick')).toEqual(true);
    expect(wrapper.prop('openOnTriggerFocus')).toEqual(true);
    expect(wrapper.prop('openOnTriggerMouseEnter')).toEqual(true);
    expect(wrapper.prop('prepend')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('trigger')).toEqual(<div />);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Portal
        className="portal-custom"
        closeOnDocumentClick
        closeOnEscape
        closeOnPortalMouseLeave
        closeOnRootNodeClick
        closeOnTriggerBlur
        closeOnTriggerClick
        closeOnTriggerMouseLeave
        mountNode={Function}
        mouseEnterDelay={100}
        mouseLeaveDelay={100}
        onClose={Function}
        onMount={Function}
        onOpen={Function}
        onUnmount={Function}
        openOnTriggerClick
        openOnTriggerFocus
        openOnTriggerMouseEnter
        prepend
        style={{}}
        trigger={<div />}
      >
        children
      </Portal>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
