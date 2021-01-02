import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Accordion from '../Accordion';

configure({ adapter: new Adapter() });

describe('<Accordion /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Accordion className="accordion-custom" fluid inverted style={{}} styled>
        children
      </Accordion>
    );
    expect(wrapper.find('Accordion').length).toBe(1);
    expect(wrapper.prop('className')).toEqual('accordion accordion-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('styled')).toEqual(true);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Accordion className="accordion-custom" fluid inverted style={{}} styled>
        children
      </Accordion>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
