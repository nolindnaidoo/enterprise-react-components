import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import PopupContent from '../PopupContent';

configure({ adapter: new Adapter() });

describe('<PopupContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <PopupContent as="a" className="popupContent-custom" style={{}}>
        children
      </PopupContent>
    );
    expect(wrapper.find('PopupContent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'popupContent popupContent-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <PopupContent as="a" className="popupContent-custom" style={{}}>
        children
      </PopupContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
