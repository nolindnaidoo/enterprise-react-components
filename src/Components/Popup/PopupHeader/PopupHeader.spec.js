import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import PopupHeader from '../PopupHeader';

configure({ adapter: new Adapter() });

describe('<PopupHeader /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <PopupHeader as="a" className="popupHeader-custom" style={{}}>
        children
      </PopupHeader>
    );
    expect(wrapper.find('PopupHeader').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('popupHeader popupHeader-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <PopupHeader as="a" className="popupHeader-custom" style={{}}>
        children
      </PopupHeader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
