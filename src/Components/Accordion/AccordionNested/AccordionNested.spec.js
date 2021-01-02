import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import AccordionNested from '../AccordionNested';

configure({ adapter: new Adapter() });

describe('<AccordionNested /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <AccordionNested
        as="span"
        className="accordionNested-custom"
        defaultActiveIndex={0}
        exclusive
        onTitleClick={Function}
        panels={[]}
        style={{}}
      />
    );
    expect(wrapper.find('AccordionAccordion').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual(
      'accordionNested accordionNested-custom'
    );
    expect(wrapper.prop('defaultActiveIndex')).toEqual(0);
    expect(wrapper.prop('exclusive')).toEqual(true);
    wrapper.find('onTitleClick');
    wrapper.simulate('click');
    expect(wrapper.prop('panels')).toEqual([]);
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has children', () => {
    const wrapper = shallow(<AccordionNested>children</AccordionNested>);
    expect(wrapper.prop('children')).toEqual('children');
  });

  it('has activeIndex prop', () => {
    const wrapper = shallow(<AccordionNested activeIndex={1} />);
    expect(wrapper.prop('activeIndex')).toEqual(1);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <AccordionNested
        as="span"
        className="accordionNested-custom"
        defaultActiveIndex={0}
        exclusive
        onTitleClick={Function}
        panels={[]}
        style={{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(
      <AccordionNested>children</AccordionNested>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<AccordionNested activeIndex={1} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
