import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CardHeader from '../CardHeader';

configure({ adapter: new Adapter() });

describe('<CardHeader /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <CardHeader
        as="a"
        className="cardHeader-custom"
        style={{}}
        textAlign="center"
      >
        children
      </CardHeader>
    );
    expect(wrapper.find('CardHeader').length).toBe(1);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('cardHeader cardHeader-custom');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('textAlign')).toEqual('center');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <CardHeader
        as="a"
        className="cardHeader-custom"
        style={{}}
        textAlign="center"
      >
        children
      </CardHeader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
