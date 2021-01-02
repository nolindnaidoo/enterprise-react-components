import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import RevealContent from '../RevealContent';

configure({ adapter: new Adapter() });

describe('<RevealContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <RevealContent
        as="a"
        className="revealContent-custom"
        hidden
        style={{}}
        visible
      >
        children
      </RevealContent>
    );
    expect(wrapper.find('RevealContent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual(
      'revealContent revealContent-custom'
    );
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('hidden')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('visible')).toEqual(true);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <RevealContent
        as="a"
        className="revealContent-custom"
        hidden
        style={{}}
        visible
      >
        children
      </RevealContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
