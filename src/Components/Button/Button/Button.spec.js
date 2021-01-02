import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

configure({ adapter: new Adapter() });

describe('<Button /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Button
        active
        animated="fade"
        as="a"
        attached="top"
        basic
        circular
        className="button"
        color="blue"
        compact
        disabled
        floated="left"
        fluid
        inverted
        labelPosition="left"
        loading
        negative
        onClick={Function}
        positive
        primary
        secondary
        size="medium"
        style={{}}
        tabIndex="one"
        toggle
      >
        children
      </Button>
    );
    expect(wrapper.find('Button').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('animated')).toEqual('fade');
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('attached')).toEqual('top');
    expect(wrapper.prop('basic')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('button button');
    expect(wrapper.prop('circular')).toEqual(true);
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('compact')).toEqual(true);
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('floated')).toEqual('left');
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('labelPosition')).toEqual('left');
    expect(wrapper.prop('loading')).toEqual(true);
    expect(wrapper.prop('negative')).toEqual(true);
    expect(wrapper.prop('onClick')).toEqual(Function);
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('positive')).toEqual(true);
    expect(wrapper.prop('primary')).toEqual(true);
    expect(wrapper.prop('secondary')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('tabIndex')).toEqual('one');
    expect(wrapper.prop('toggle')).toEqual(true);
  });

  it('has label prop', () => {
    const wrapper = shallow(<Button label="name" onClick={Function} />);
    expect(wrapper.prop('label')).toEqual('name');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Button
        active
        animated="fade"
        as="a"
        attached="top"
        basic
        circular
        className="button"
        color="blue"
        compact
        disabled
        floated="left"
        fluid
        inverted
        labelPosition="left"
        loading
        negative
        onClick={Function}
        positive
        primary
        secondary
        size="medium"
        style={{}}
        tabIndex="one"
        toggle
      >
        children
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Button label="name" onClick={Function} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
