import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Reveal from '../Reveal';

configure({ adapter: new Adapter() });

describe('<Reveal /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Reveal
        active
        animated="fade"
        as="a"
        className="reveal-custom"
        disabled
        instant
        style={{}}
      >
        children
      </Reveal>
    );
    expect(wrapper.find('Reveal').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('animated')).toEqual('fade');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('reveal reveal-custom');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('instant')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Reveal
        active
        animated="fade"
        as="a"
        className="reveal-custom"
        disabled
        instant
        style={{}}
      >
        children
      </Reveal>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
