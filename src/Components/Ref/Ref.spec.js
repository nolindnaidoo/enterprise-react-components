import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Ref from '../Ref';

configure({ adapter: new Adapter() });

describe('<Ref /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Ref className="ref-custom" style={{}}>
        <div />
      </Ref>
    );
    expect(wrapper.find('Ref').length).toBe(1);
    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('className')).toEqual('ref ref-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Ref className="ref-custom" style={{}}>
        <div />
      </Ref>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
