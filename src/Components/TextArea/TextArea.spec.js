import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TextArea from '../TextArea';

configure({ adapter: new Adapter() });

describe('<TextArea /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <TextArea
        as="a"
        autoHeight
        className="textArea-custom"
        onChange={Function}
        onInput={Function}
        placeholder="test"
        rows={5}
        style={{}}
        value={1}
      />
    );
    expect(wrapper.find('TextArea').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('autoHeight')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('textArea textArea-custom');
    expect(wrapper.prop('onChange')).toEqual(Function);
    expect(wrapper.prop('onInput')).toEqual(Function);
    expect(wrapper.prop('placeholder')).toEqual('test');
    expect(wrapper.prop('rows')).toEqual(5);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('value')).toEqual(1);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <TextArea
        as="a"
        autoHeight
        className="textArea-custom"
        onChange={Function}
        onInput={Function}
        placeholder="test"
        rows={5}
        style={{}}
        value={1}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
