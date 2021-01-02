import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TransitionablePortal from '../TransitionablePortal';

configure({ adapter: new Adapter() });

describe('<TransitionablePortal /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <TransitionablePortal
        className="transitionablePortal-custom"
        closeOnTriggerClick
        onClose={Function}
        onHide={Function}
        onOpen={Function}
        onStart={Function}
        open={false}
        openOnTriggerClick
        style={{}}
        transition={{}}
        trigger={<div />}
      >
        <div />
      </TransitionablePortal>
    );
    expect(wrapper.find('TransitionablePortal').length).toBe(1);
    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('className')).toEqual(
      'transitionablePortal transitionablePortal-custom'
    );
    expect(wrapper.prop('closeOnTriggerClick')).toEqual(true);
    expect(wrapper.prop('onClose')).toEqual(Function);
    expect(wrapper.prop('onHide')).toEqual(Function);
    expect(wrapper.prop('onOpen')).toEqual(Function);
    expect(wrapper.prop('onStart')).toEqual(Function);
    expect(wrapper.prop('open')).toEqual(false);
    expect(wrapper.prop('openOnTriggerClick')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('transition')).toEqual({});
    expect(wrapper.prop('trigger')).toEqual(<div />);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <TransitionablePortal
        className="transitionablePortal-custom"
        closeOnTriggerClick
        onClose={Function}
        onHide={Function}
        onOpen={Function}
        onStart={Function}
        open={false}
        openOnTriggerClick
        style={{}}
        transition={{}}
        trigger={<div />}
      >
        <div />
      </TransitionablePortal>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
