import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CardDescription from '../CardDescription';

configure({ adapter: new Adapter() });

describe('<CardDescription /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <CardDescription
        as="a"
        className="cardDescription-custom"
        style={{}}
        textAlign="center"
      >
        children
      </CardDescription>
    );
    expect(wrapper.find('CardDescription').length).toBe(1);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual(
      'cardDescription cardDescription-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('textAlign')).toEqual('center');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <CardDescription
        as="a"
        className="cardDescription-custom"
        style={{}}
        textAlign="center"
      >
        children
      </CardDescription>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
