import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import AccordionContent from '../AccordionContent';

configure({ adapter: new Adapter() });

describe('<AccordionContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <AccordionContent
        active
        as="span"
        className="accordionContent-custom"
        style={{}}
      >
        children
      </AccordionContent>
    );
    expect(wrapper.find('AccordionContent').length).toBe(1);
    expect(wrapper.prop('active')).toBe(true);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'accordionContent accordionContent-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <AccordionContent
        active
        as="span"
        className="accordionContent-custom"
        style={{}}
      >
        children
      </AccordionContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
