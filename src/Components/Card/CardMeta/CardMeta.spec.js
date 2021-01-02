import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CardMeta from '../CardMeta';

configure({ adapter: new Adapter() });

describe('<CardMeta /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <CardMeta
        as="a"
        className="cardMeta-custom"
        style={{}}
        textAlign="center"
      >
        children
      </CardMeta>
    );
    expect(wrapper.find('CardMeta').length).toBe(1);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('cardMeta cardMeta-custom');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('textAlign')).toEqual('center');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <CardMeta
        as="a"
        className="cardMeta-custom"
        style={{}}
        textAlign="center"
      >
        children
      </CardMeta>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
