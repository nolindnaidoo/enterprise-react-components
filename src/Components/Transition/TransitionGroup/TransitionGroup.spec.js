import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TransitionGroup from '../TransitionGroup';

configure({ adapter: new Adapter() });

describe('<TransitionGroup /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <TransitionGroup
        animation="scale"
        as="a"
        className="transitionGroup-custom"
        duration={1}
        style={{}}
      >
        <div />
      </TransitionGroup>
    );
    expect(wrapper.find('TransitionGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('animation')).toEqual('scale');
    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('className')).toEqual(
      'transitionGroup transitionGroup-custom'
    );
    expect(wrapper.prop('duration')).toEqual(1);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <TransitionGroup
        animation="scale"
        as="a"
        className="transitionGroup-custom"
        duration={1}
        style={{}}
      >
        <div />
      </TransitionGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
