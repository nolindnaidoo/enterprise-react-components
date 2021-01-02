import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CardGroup from '../CardGroup';

configure({ adapter: new Adapter() });

describe('<CardGroup /> component', () => {
  it('has props as children', () => {
    const wrapper = shallow(
      <CardGroup
        as="a"
        className="cardGroup-custom"
        doubling
        itemsPerRow={1}
        stackable
        style={{}}
        textAlign="center"
      >
        children
      </CardGroup>
    );
    expect(wrapper.find('CardGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('cardGroup cardGroup-custom');
    expect(wrapper.prop('doubling')).toEqual(true);
    expect(wrapper.prop('itemsPerRow')).toEqual(1);
    expect(wrapper.prop('stackable')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('textAlign')).toEqual('center');
  });

  it('has props as children', () => {
    const wrapper = shallow(<CardGroup items={[]} />);
    expect(wrapper.prop('items')).toEqual([]);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <CardGroup
        as="a"
        className="cardGroup-custom"
        doubling
        itemsPerRow={1}
        stackable
        style={{}}
        textAlign="center"
      >
        children
      </CardGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<CardGroup items={[]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
