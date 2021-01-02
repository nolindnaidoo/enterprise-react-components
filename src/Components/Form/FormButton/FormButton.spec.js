import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FormButton from '../FormButton';

configure({ adapter: new Adapter() });

describe('<FormButton /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <FormButton as="a" className="formButton-custom" style={{}}>
        children
      </FormButton>
    );
    expect(wrapper.find('FormButton').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('formButton formButton-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <FormButton as="a" className="formButton-custom" style={{}}>
        children
      </FormButton>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
