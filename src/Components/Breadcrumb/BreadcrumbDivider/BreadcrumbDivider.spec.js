import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import BreadcrumbDivider from '../BreadcrumbDivider';

configure({ adapter: new Adapter() });

describe('<BreadcrumbDivider /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <BreadcrumbDivider
        as="span"
        className="custom-BreadcrumbDivider"
        style={{}}
      >
        children
      </BreadcrumbDivider>
    );
    expect(wrapper.find('BreadcrumbDivider').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'breadcrumbDivider custom-BreadcrumbDivider'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has content & icon prop', () => {
    const wrapper = shallow(
      <BreadcrumbDivider content="content" icon="angle right" />
    );
    expect(wrapper.prop('content')).toEqual('content');
    expect(wrapper.prop('icon')).toEqual('angle right');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <BreadcrumbDivider
        as="span"
        className="custom-BreadcrumbDivider"
        style={{}}
      >
        children
      </BreadcrumbDivider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(
      <BreadcrumbDivider content="content" icon="angle right" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
