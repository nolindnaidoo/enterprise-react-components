import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../Image';

configure({ adapter: new Adapter() });

describe('<Image /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Image
        as="a"
        avatar
        bordered
        centered
        className="image-custom"
        circular
        disabled
        floated="left"
        hidden
        href="text"
        inline
        rounded
        size="medium"
        spaced="left"
        src=""
        style={{}}
        verticalAlign="middle"
        wrapped
      >
        children
      </Image>
    );
    expect(wrapper.find('Image').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('avatar')).toEqual(true);
    expect(wrapper.prop('bordered')).toEqual(true);
    expect(wrapper.prop('centered')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('image image-custom');
    expect(wrapper.prop('circular')).toEqual(true);
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('floated')).toEqual('left');
    expect(wrapper.prop('hidden')).toEqual(true);
    expect(wrapper.prop('href')).toEqual('text');
    expect(wrapper.prop('inline')).toEqual(true);
    expect(wrapper.prop('rounded')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('spaced')).toEqual('left');
    expect(wrapper.prop('src')).toEqual('');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('verticalAlign')).toEqual('middle');
    expect(wrapper.prop('wrapped')).toEqual(true);
  });

  it('has fluid prop', () => {
    const wrapper = shallow(<Image fluid />);
    expect(wrapper.prop('fluid')).toEqual(true);
  });

  it('has label prop', () => {
    const wrapper = shallow(<Image label="label" />);
    expect(wrapper.prop('label')).toEqual('label');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Image
        as="a"
        avatar
        bordered
        centered
        className="image-custom"
        circular
        disabled
        floated="left"
        hidden
        href="text"
        inline
        rounded
        size="medium"
        spaced="left"
        src=""
        style={{}}
        verticalAlign="middle"
        wrapped
      >
        children
      </Image>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Image fluid />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Image label="label" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
