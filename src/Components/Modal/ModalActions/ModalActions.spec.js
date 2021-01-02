import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ModalActions from '../ModalActions';

configure({ adapter: new Adapter() });

describe('<ModalActions /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ModalActions as="a" className="modalActions-custom" style={{}}>
        children
      </ModalActions>
    );
    expect(wrapper.find('ModalActions').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'modalActions modalActions-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has actions prop', () => {
    const wrapper = shallow(<ModalActions actions={[]} />);
    expect(wrapper.prop('actions')).toEqual([]);
  });

  it('has onActionClick prop', () => {
    const wrapper = shallow(<ModalActions onActionClick={Function} />);
    expect(wrapper.prop('onActionClick')).toEqual(Function);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ModalActions as="a" className="modalActions-custom" style={{}}>
        children
      </ModalActions>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<ModalActions actions={[]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ModalActions onActionClick={Function} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
