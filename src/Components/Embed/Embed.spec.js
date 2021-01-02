import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Embed from '../Embed';

configure({ adapter: new Adapter() });

describe('<Embed /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Embed
        active
        as="a"
        aspectRatio="16:9"
        autoPlay
        brandedUI
        className="embed-custom"
        color="blue"
        hd
        icon="right circle arrow"
        id="test"
        iframe={{}}
        onClick={Function}
        placeholder="text"
        source="youtube"
        style={{}}
      />
    );
    expect(wrapper.find('Embed').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('aspectRatio')).toEqual('16:9');
    expect(wrapper.prop('autoPlay')).toEqual(true);
    expect(wrapper.prop('brandedUI')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('embed embed-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('hd')).toEqual(true);
    expect(wrapper.prop('icon')).toEqual('right circle arrow');
    expect(wrapper.prop('id')).toEqual('test');
    expect(wrapper.prop('iframe')).toEqual({});
    expect(wrapper.prop('onClick')).toEqual(Function);
    expect(wrapper.prop('placeholder')).toEqual('text');
    expect(wrapper.prop('source')).toEqual('youtube');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has defaultActive prop', () => {
    const wrapper = shallow(<Embed defaultActive />);
    expect(wrapper.prop('defaultActive')).toEqual(true);
  });

  it('has url prop', () => {
    const wrapper = shallow(<Embed url="src" />);
    expect(wrapper.prop('url')).toEqual('src');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Embed
        active
        as="a"
        aspectRatio="16:9"
        autoPlay
        brandedUI
        className="embed-custom"
        color="blue"
        hd
        icon="right circle arrow"
        id="test"
        iframe={{}}
        onClick={Function}
        placeholder="text"
        source="youtube"
        style={{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Embed defaultActive />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Embed url="src" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
