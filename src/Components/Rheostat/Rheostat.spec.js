import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import createReactClass from 'create-react-class';
import Rheostat from '../Rheostat';

configure({ adapter: new Adapter() });

const algorithm = {
  getPosition: () => 20,
  getValue: () => 30
};

const pitRender = <div />;
// eslint-disable-next-line
const PitComponent = createReactClass({
  render: () => pitRender
});

describe('<Rheostat /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Rheostat
        algorithm={algorithm}
        className="rheostat-custom"
        disabled
        getNextHandlePosition={Function}
        handle=".rheostat-handle"
        max={100}
        min={1}
        onChange={Function}
        onClick={Function}
        onKeyPress={Function}
        onSliderDragEnd={Function}
        onSliderDragStart={Function}
        onValuesUpdated={Function}
        orientation="horizontal"
        pitComponent={PitComponent}
        pitPoints={[20]}
        progressBar=".rheostat-progress"
        snap
        snapPoints={[30]}
        style={{}}
        values={[1]}
      />
    );
    expect(wrapper.find('Rheostat').length).toBe(1);
    expect(wrapper.prop('algorithm')).toEqual(algorithm);
    expect(wrapper.prop('className')).toEqual('rheostat rheostat-custom');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('getNextHandlePosition')).toEqual(Function);
    expect(wrapper.prop('handle')).toEqual('.rheostat-handle');
    expect(wrapper.prop('max')).toEqual(100);
    expect(wrapper.prop('min')).toEqual(1);
    expect(wrapper.prop('onChange')).toEqual(Function);
    expect(wrapper.prop('onClick')).toEqual(Function);
    expect(wrapper.prop('onKeyPress')).toEqual(Function);
    expect(wrapper.prop('onSliderDragEnd')).toEqual(Function);
    expect(wrapper.prop('onSliderDragStart')).toEqual(Function);
    expect(wrapper.prop('onValuesUpdated')).toEqual(Function);
    expect(wrapper.prop('orientation')).toEqual('horizontal');
    expect(wrapper.prop('pitComponent')).toEqual(PitComponent);
    expect(wrapper.prop('pitPoints')).toEqual([20]);
    expect(wrapper.prop('progressBar')).toEqual('.rheostat-progress');
    expect(wrapper.prop('snap')).toEqual(true);
    expect(wrapper.prop('snapPoints')).toEqual([30]);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('values')).toEqual([1]);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Rheostat
        algorithm={algorithm}
        className="rheostat-custom"
        disabled
        getNextHandlePosition={Function}
        handle=".rheostat-handle"
        max={100}
        min={1}
        onChange={Function}
        onClick={Function}
        onKeyPress={Function}
        onSliderDragEnd={Function}
        onSliderDragStart={Function}
        onValuesUpdated={Function}
        orientation="horizontal"
        pitComponent={PitComponent}
        pitPoints={[20]}
        progressBar=".rheostat-progress"
        snap
        snapPoints={[30]}
        style={{}}
        values={[1]}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
