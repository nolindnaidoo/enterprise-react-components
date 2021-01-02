import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Transition from '../Transition';

configure({ adapter: new Adapter() });

describe('<Transition /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Transition
        animation="scale"
        className="transition-custom"
        duration={1}
        mountOnShow
        onComplete={Function}
        onHide={Function}
        onShow={Function}
        onStart={Function}
        reactKey="test"
        style={{}}
        unmountOnHide
        visible
      >
        <div />
      </Transition>
    );
    expect(wrapper.find('Transition').length).toBe(1);
    expect(wrapper.prop('animation')).toEqual('scale');
    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('className')).toEqual('transition transition-custom');
    expect(wrapper.prop('duration')).toEqual(1);
    expect(wrapper.prop('mountOnShow')).toEqual(true);
    expect(wrapper.prop('onComplete')).toEqual(Function);
    expect(wrapper.prop('onHide')).toEqual(Function);
    expect(wrapper.prop('onShow')).toEqual(Function);
    expect(wrapper.prop('onStart')).toEqual(Function);
    expect(wrapper.prop('reactKey')).toEqual('test');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('unmountOnHide')).toEqual(true);
    expect(wrapper.prop('visible')).toEqual(true);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Transition
        animation="scale"
        className="transition transition-custom"
        duration={1}
        mountOnShow
        onComplete={Function}
        onHide={Function}
        onShow={Function}
        onStart={Function}
        reactKey="test"
        style={{}}
        unmountOnHide
        visible
      >
        <div />
      </Transition>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
