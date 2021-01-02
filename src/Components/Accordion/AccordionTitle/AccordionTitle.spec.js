import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import AccordionTitle from '../AccordionTitle';

configure({ adapter: new Adapter() });

describe('<AccordionTitle /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <AccordionTitle
        active
        as="span"
        className="accordionTitle-custom"
        index={1}
        onClick={Function}
        style={{}}
      >
        children
      </AccordionTitle>
    );
    expect(wrapper.find('AccordionTitle').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'accordionTitle accordionTitle-custom'
    );
    expect(wrapper.prop('index')).toEqual(1);
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <AccordionTitle
        active
        as="span"
        className="accordionTitle-custom"
        index={1}
        onClick={Function}
        style={{}}
      >
        children
      </AccordionTitle>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
