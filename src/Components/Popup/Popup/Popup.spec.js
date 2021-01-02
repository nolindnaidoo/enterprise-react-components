import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Popup from '../Popup';

configure({ adapter: new Adapter() });

describe('<Popup /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Popup
        as="span"
        basic
        className="popup-custom"
        flowing
        hideOnScroll
        horizontalOffset={1}
        hoverable
        inverted
        on={['hover', 'click', 'focus']}
        onClose={Function}
        onMount={Function}
        onOpen={Function}
        onUnmount={Function}
        position="top center"
        size="large"
        style={{}}
        trigger={<div />}
        verticalOffset={1}
        wide="very"
      >
        children
      </Popup>
    );
    expect(wrapper.find('Popup').length).toBe(1);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('basic')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('popup popup-custom');
    expect(wrapper.prop('flowing')).toEqual(true);
    expect(wrapper.prop('hideOnScroll')).toEqual(true);
    expect(wrapper.prop('horizontalOffset')).toEqual(1);
    expect(wrapper.prop('hoverable')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('on')).toEqual(['hover', 'click', 'focus']);
    expect(wrapper.prop('onClose')).toEqual(Function);
    expect(wrapper.prop('onMount')).toEqual(Function);
    expect(wrapper.prop('onOpen')).toEqual(Function);
    expect(wrapper.prop('onUnmount')).toEqual(Function);
    expect(wrapper.prop('position')).toEqual('top center');
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('trigger')).toEqual(<div />);
    expect(wrapper.prop('verticalOffset')).toEqual(1);
    expect(wrapper.prop('wide')).toEqual('very');
  });

  it('has header prop', () => {
    const wrapper = shallow(<Popup header="example" />);
    expect(wrapper.prop('header')).toEqual('example');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Popup
        as="span"
        basic
        className="popup-custom"
        flowing
        hideOnScroll
        horizontalOffset={1}
        hoverable
        inverted
        on={['hover', 'click', 'focus']}
        onClose={Function}
        onMount={Function}
        onOpen={Function}
        onUnmount={Function}
        position="top center"
        size="large"
        style={{}}
        trigger={<div />}
        verticalOffset={1}
        wide="very"
      >
        children
      </Popup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Popup header="example" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
