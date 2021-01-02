import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ButtonGroup from '../ButtonGroup';

configure({ adapter: new Adapter() });

describe('<ButtonGroup /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ButtonGroup
        as="a"
        attached="top"
        basic
        className="buttonGroup-custom"
        color="blue"
        compact
        floated="left"
        fluid
        icon
        inverted
        labeled
        negative
        positive
        primary
        secondary
        size="medium"
        style={{}}
        toggle
        vertical
        widths={1}
      >
        children
      </ButtonGroup>
    );
    expect(wrapper.find('ButtonGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('attached')).toEqual('top');
    expect(wrapper.prop('basic')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('buttonGroup buttonGroup-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('compact')).toEqual(true);
    expect(wrapper.prop('floated')).toEqual('left');
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('icon')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('labeled')).toEqual(true);
    expect(wrapper.prop('negative')).toEqual(true);
    expect(wrapper.prop('positive')).toEqual(true);
    expect(wrapper.prop('primary')).toEqual(true);
    expect(wrapper.prop('secondary')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('toggle')).toEqual(true);
    expect(wrapper.prop('vertical')).toEqual(true);
    expect(wrapper.prop('widths')).toEqual(1);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ButtonGroup
        as="a"
        attached="top"
        basic
        className="buttonGroup-custom"
        color="blue"
        compact
        floated="left"
        fluid
        icon
        inverted
        labeled
        negative
        positive
        primary
        secondary
        size="medium"
        style={{}}
        toggle
        vertical
        widths={1}
      >
        children
      </ButtonGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
