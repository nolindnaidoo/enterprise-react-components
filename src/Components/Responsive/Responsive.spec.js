import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Responsive from '../Responsive';

configure({ adapter: new Adapter() });

describe('<Responsive /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Responsive
        as="a"
        className="responsive-custom"
        fireOnMount
        maxWidth={2569}
        minWidth={768}
        style={{}}
      >
        children
      </Responsive>
    );
    expect(wrapper.find('Responsive').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('responsive responsive-custom');
    expect(wrapper.prop('fireOnMount')).toEqual(true);
    expect(wrapper.prop('maxWidth')).toEqual(2569);
    expect(wrapper.prop('minWidth')).toEqual(768);
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has onUpdate prop', () => {
    const wrapper = mount(<Responsive onUpdate={Function} />);
    expect(wrapper.prop('onUpdate')).toEqual(Function);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Responsive
        as="a"
        className="responsive-custom"
        fireOnMount
        maxWidth={2569}
        minWidth={768}
        style={{}}
      >
        children
      </Responsive>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Responsive onUpdate={Function} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
