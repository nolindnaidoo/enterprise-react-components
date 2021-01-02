import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Dimmer from '../Dimmer';

configure({ adapter: new Adapter() });

describe('<Dimmer /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Dimmer
        active
        as="a"
        className="dimmer-custom"
        disabled
        inverted
        onClick={Function}
        page
        simple
        style={{}}
      >
        children
      </Dimmer>
    );
    expect(wrapper.find('Dimmer').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('dimmer dimmer-custom');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('onClick')).toEqual(Function);
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('page')).toEqual(true);
    expect(wrapper.prop('simple')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has props and children', () => {
    const wrapper = shallow(<Dimmer onClickOutside={Function} />);
    expect(wrapper.prop('onClickOutside')).toEqual(Function);
    wrapper.find('onClickOutside');
    wrapper.simulate('click');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Dimmer
        active
        as="a"
        className="dimmer-custom"
        disabled
        inverted
        onClick={Function}
        page
        simple
        style={{}}
      >
        children
      </Dimmer>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Dimmer onClickOutside={Function} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
