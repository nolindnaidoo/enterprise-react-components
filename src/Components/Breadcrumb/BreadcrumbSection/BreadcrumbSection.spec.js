import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import BreadcrumbSection from '../BreadcrumbSection';

configure({ adapter: new Adapter() });

describe('<BreadcrumbSection /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <BreadcrumbSection
        as="span"
        className="custom-BreadcrumbSection"
        onClick={Function}
      >
        children
      </BreadcrumbSection>
    );
    expect(wrapper.find('BreadcrumbSection').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'breadcrumbSection custom-BreadcrumbSection'
    );
    expect(wrapper.prop('onClick')).toEqual(Function);
  });

  it('has content prop', () => {
    const wrapper = shallow(<BreadcrumbSection content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('has active prop', () => {
    const wrapper = shallow(<BreadcrumbSection active />);
    expect(wrapper.prop('active')).toEqual(true);
  });

  it('has href prop', () => {
    const wrapper = shallow(<BreadcrumbSection href="#" />);
    expect(wrapper.prop('href')).toEqual('#');
  });

  it('has link prop', () => {
    const wrapper = shallow(<BreadcrumbSection link />);
    expect(wrapper.prop('link')).toEqual(true);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <BreadcrumbSection
        as="span"
        className="custom-BreadcrumbSection"
        onClick={Function}
      >
        children
      </BreadcrumbSection>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<BreadcrumbSection content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<BreadcrumbSection active />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<BreadcrumbSection href="#" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<BreadcrumbSection link />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
