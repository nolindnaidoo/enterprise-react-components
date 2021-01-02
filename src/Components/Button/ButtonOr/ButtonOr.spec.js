import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ButtonOr from '../ButtonOr';

configure({ adapter: new Adapter() });

describe('<ButtonOr /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ButtonOr as="a" className="buttonOr-custom" style={{}} text="one" />
    );
    expect(wrapper.find('ButtonOr').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('buttonOr buttonOr-custom');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('text')).toEqual('one');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ButtonOr as="a" className="buttonOr-custom" style={{}} text="one" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
