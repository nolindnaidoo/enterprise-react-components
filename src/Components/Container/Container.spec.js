import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Container from '../Container';

configure({ adapter: new Adapter() });

describe('<Container /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Container
        as="a"
        className="container-custom"
        fluid
        style={{}}
        text
        textAlign="justified"
      >
        children
      </Container>
    );
    expect(wrapper.find('Container').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('container container-custom');
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('text')).toEqual(true);
    expect(wrapper.prop('textAlign')).toEqual('justified');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Container
        as="a"
        className="container-custom"
        fluid
        style={{}}
        text
        textAlign="justified"
      >
        children
      </Container>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
