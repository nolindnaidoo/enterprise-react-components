import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ModalDescription from '../ModalDescription';

configure({ adapter: new Adapter() });

describe('<ModalDescription /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ModalDescription as="a" className="modalDescription-custom" style={{}}>
        children
      </ModalDescription>
    );
    expect(wrapper.find('ModalDescription').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'modalDescription modalDescription-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ModalDescription as="a" className="modalDescription-custom" style={{}}>
        children
      </ModalDescription>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
