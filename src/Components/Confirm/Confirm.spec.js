import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Confirm from '../Confirm';

configure({ adapter: new Adapter() });

describe('<Confirm /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Confirm
        cancelButton="Cancel"
        className="confirm-custom"
        confirmButton="OK"
        content="Are you sure?"
        header="Confirm"
        onCancel={Function}
        onConfirm={Function}
        open
        size="large"
        style={{}}
      />
    );
    expect(wrapper.find('Confirm').length).toBe(1);
    expect(wrapper.prop('cancelButton')).toEqual('Cancel');
    expect(wrapper.prop('className')).toEqual('confirm confirm-custom');
    expect(wrapper.prop('confirmButton')).toEqual('OK');
    expect(wrapper.prop('content')).toEqual('Are you sure?');
    expect(wrapper.prop('header')).toEqual('Confirm');
    expect(wrapper.prop('onCancel')).toEqual(Function);
    expect(wrapper.prop('onConfirm')).toEqual(Function);
    expect(wrapper.prop('open')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Confirm
        cancelButton="Cancel"
        className="confirm-custom"
        confirmButton="OK"
        content="Are you sure?"
        header="Confirm"
        onCancel={Function}
        onConfirm={Function}
        open
        size="large"
        style={{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
