import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from '../ListItem';

configure({ adapter: new Adapter() });

describe('<ListItem /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <ListItem
        active
        as="span"
        className="listItem-custom"
        description="test"
        disabled
        header="Header Text"
        icon="marker"
        onClick={Function}
        style={{}}
        value="some value"
      />
    );
    expect(wrapper.find('ListItem').length).toBe(1);
    expect(wrapper.prop('active')).toBe(true);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual('listItem listItem-custom');
    expect(wrapper.prop('description')).toEqual('test');
    expect(wrapper.prop('disabled')).toBe(true);
    expect(wrapper.prop('header')).toEqual('Header Text');
    expect(wrapper.prop('icon')).toEqual('marker');
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('value')).toEqual('some value');
  });

  it('has children prop', () => {
    const wrapper = shallow(<ListItem>children</ListItem>);
    expect(wrapper.prop('children')).toEqual('children');
  });

  it('has image prop', () => {
    const wrapper = shallow(<ListItem image="./test" />);
    expect(wrapper.prop('image')).toEqual('./test');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ListItem
        active
        as="span"
        className="listItem-custom"
        description="test"
        disabled
        header="Header Text"
        icon="marker"
        onClick={Function}
        style={{}}
        value="some value"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<ListItem>children</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<ListItem image="./test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
