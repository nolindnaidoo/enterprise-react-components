import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ButtonContent from '../ButtonContent';

configure({ adapter: new Adapter() });

describe('<ButtonContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ButtonContent
        as="a"
        className="buttonContent-custom"
        hidden
        style={{}}
        visible
      >
        children
      </ButtonContent>
    );
    expect(wrapper.find('ButtonContent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'buttonContent buttonContent-custom'
    );
    expect(wrapper.prop('hidden')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('visible')).toEqual(true);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ButtonContent
        as="a"
        className="buttonContent-custom"
        hidden
        style={{}}
        visible
      >
        children
      </ButtonContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
