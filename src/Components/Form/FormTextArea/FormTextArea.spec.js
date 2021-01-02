import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FormTextArea from '../FormTextArea';

configure({ adapter: new Adapter() });

describe('<FormTextArea /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <FormTextArea as="a" className="formTextArea-custom" style={{}} />
    );
    expect(wrapper.find('FormTextArea').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual(
      'formTextArea formTextArea-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <FormTextArea as="a" className="formTextArea-custom" style={{}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
