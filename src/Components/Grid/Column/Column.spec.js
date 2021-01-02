import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Column from '../Column';

configure({ adapter: new Adapter() });

describe('<Column /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Column
        as="a"
        className="column-custom"
        color="blue"
        computer={1}
        floated="left"
        largeScreen={1}
        mobile={1}
        only="mobile"
        stretched
        style={{}}
        tablet={1}
        textAlign="justified"
        verticalAlign="top"
        widescreen={1}
        width={1}
      >
        children
      </Column>
    );
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('column column-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('computer')).toEqual(1);
    expect(wrapper.prop('floated')).toEqual('left');
    expect(wrapper.prop('largeScreen')).toEqual(1);
    expect(wrapper.prop('mobile')).toEqual(1);
    expect(wrapper.prop('only')).toEqual('mobile');
    expect(wrapper.prop('stretched')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('tablet')).toEqual(1);
    expect(wrapper.prop('textAlign')).toEqual('justified');
    expect(wrapper.prop('verticalAlign')).toEqual('top');
    expect(wrapper.prop('widescreen')).toEqual(1);
    expect(wrapper.prop('width')).toEqual(1);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Column
        as="a"
        className="column-custom"
        color="blue"
        computer={1}
        floated="left"
        largeScreen={1}
        mobile={1}
        only="mobile"
        stretched
        style={{}}
        tablet={1}
        textAlign="justified"
        verticalAlign="top"
        widescreen={1}
        width={1}
      >
        children
      </Column>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
