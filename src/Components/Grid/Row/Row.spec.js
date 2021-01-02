import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Row from '../Row';

configure({ adapter: new Adapter() });

describe('<Row /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Row
        as="a"
        centered
        className="row-custom"
        color="blue"
        columns="equal"
        divided
        only="mobile"
        reversed="computer"
        stretched
        style={{}}
        textAlign="justified"
        verticalAlign="top"
      >
        children
      </Row>
    );
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('centered')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('row row-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('columns')).toEqual('equal');
    expect(wrapper.prop('divided')).toEqual(true);
    expect(wrapper.prop('only')).toEqual('mobile');
    expect(wrapper.prop('reversed')).toEqual('computer');
    expect(wrapper.prop('stretched')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('textAlign')).toEqual('justified');
    expect(wrapper.prop('verticalAlign')).toEqual('top');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Row
        as="a"
        centered
        className="row-custom"
        color="blue"
        columns="equal"
        divided
        only="mobile"
        reversed="computer"
        stretched
        style={{}}
        textAlign="justified"
        verticalAlign="top"
      >
        children
      </Row>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
