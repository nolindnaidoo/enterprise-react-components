import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Visibility from '../Visibility';

configure({ adapter: new Adapter() });

describe('<Visibility /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Visibility
        as="a"
        className="visibility-custom"
        continuous
        offset={[10, 10]}
        onBottomPassed={Function}
        onBottomPassedReverse={Function}
        onBottomVisible={Function}
        onBottomVisibleReverse={Function}
        onOffScreen={Function}
        onOnScreen={Function}
        onPassed={{}}
        onPassing={Function}
        onPassingReverse={Function}
        onTopPassed={Function}
        onTopPassedReverse={Function}
        onTopVisible={Function}
        onTopVisibleReverse={Function}
        onUpdate={Function}
        once
        style={{}}
      >
        children
      </Visibility>
    );
    expect(wrapper.find('Visibility').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('visibility visibility-custom');
    expect(wrapper.prop('continuous')).toEqual(true);
    expect(wrapper.prop('offset')).toEqual([10, 10]);
    expect(wrapper.prop('onBottomPassed')).toEqual(Function);
    expect(wrapper.prop('onBottomPassedReverse')).toEqual(Function);
    expect(wrapper.prop('onBottomVisible')).toEqual(Function);
    expect(wrapper.prop('onBottomVisibleReverse')).toEqual(Function);
    expect(wrapper.prop('onOffScreen')).toEqual(Function);
    expect(wrapper.prop('onOnScreen')).toEqual(Function);
    expect(wrapper.prop('onPassed')).toEqual({});
    expect(wrapper.prop('onPassing')).toEqual(Function);
    expect(wrapper.prop('onPassingReverse')).toEqual(Function);
    expect(wrapper.prop('onTopPassed')).toEqual(Function);
    expect(wrapper.prop('onTopPassedReverse')).toEqual(Function);
    expect(wrapper.prop('onTopVisible')).toEqual(Function);
    expect(wrapper.prop('onTopVisibleReverse')).toEqual(Function);
    expect(wrapper.prop('onUpdate')).toEqual(Function);
    expect(wrapper.prop('once')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Visibility
        as="a"
        className="visibility-custom"
        continuous
        offset={[10, 10]}
        onBottomPassed={Function}
        onBottomPassedReverse={Function}
        onBottomVisible={Function}
        onBottomVisibleReverse={Function}
        onOffScreen={Function}
        onOnScreen={Function}
        onPassed={{}}
        onPassing={Function}
        onPassingReverse={Function}
        onTopPassed={Function}
        onTopPassedReverse={Function}
        onTopVisible={Function}
        onTopVisibleReverse={Function}
        onUpdate={Function}
        once
        style={{}}
      >
        children
      </Visibility>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
