import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ModalContent from '../ModalContent';

configure({ adapter: new Adapter() });

describe('<ModalContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ModalContent
        as="a"
        className="modalContent-custom"
        image
        scrolling
        style={{}}
      >
        children
      </ModalContent>
    );
    expect(wrapper.find('ModalContent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'modalContent modalContent-custom'
    );
    expect(wrapper.prop('image')).toEqual(true);
    expect(wrapper.prop('scrolling')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ModalContent
        as="a"
        className="modalContent-custom"
        image
        scrolling
        style={{}}
      >
        children
      </ModalContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
