import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ListIcon from '../ListIcon';

configure({ adapter: new Adapter() });

describe('<ListIcon /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ListIcon className="listIcon-custom" style={{}} verticalalign="middle" />
    );
    expect(wrapper.find('ListIcon').length).toBe(1);
    expect(wrapper.prop('className')).toEqual('listIcon listIcon-custom');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('verticalalign')).toEqual('middle');
  });
  test('snapshot', () => {
    const component = renderer.create(
      <ListIcon className="listIcon-custom" style={{}} verticalalign="middle" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
