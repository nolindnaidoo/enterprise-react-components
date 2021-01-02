import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ModalHeader from '../ModalHeader';

configure({ adapter: new Adapter() });

describe('<ModalHeader /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ModalHeader as="a" className="modalHeader-custom" style={{}}>
        children
      </ModalHeader>
    );
    expect(wrapper.find('ModalHeader').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('modalHeader modalHeader-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ModalHeader as="a" className="modalHeader-custom" style={{}}>
        children
      </ModalHeader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
