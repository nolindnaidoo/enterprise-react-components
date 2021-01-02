import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import CardContent from '../CardContent';

configure({ adapter: new Adapter() });

describe('<CardContent /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <CardContent
        as="a"
        className="cardContent-custom"
        style={{}}
        textAlign="center"
      >
        children
      </CardContent>
    );
    expect(wrapper.find('CardContent').length).toBe(1);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('cardContent cardContent-custom');
    expect(wrapper.prop('textAlign')).toEqual('center');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has description prop', () => {
    const wrapper = shallow(<CardContent description="test" />);
    expect(wrapper.prop('description')).toEqual('test');
  });

  it('has extra prop', () => {
    const wrapper = shallow(<CardContent extra />);
    expect(wrapper.prop('extra')).toEqual(true);
  });

  it('has header prop', () => {
    const wrapper = shallow(<CardContent header="text" />);
    expect(wrapper.prop('header')).toEqual('text');
  });

  it('has meta prop', () => {
    const wrapper = shallow(<CardContent meta="Friend" />);
    expect(wrapper.prop('meta')).toEqual('Friend');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <CardContent
        as="a"
        className="cardContent-custom"
        style={{}}
        textAlign="center"
      >
        children
      </CardContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<CardContent description="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<CardContent extra />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<CardContent header="text" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<CardContent meta="Friend" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
