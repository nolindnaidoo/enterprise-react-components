import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbDivider from '../BreadcrumbDivider';

configure({ adapter: new Adapter() });

describe('<Breadcrumb /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Breadcrumb
        as="span"
        className="custom-breadcrumb"
        size="small"
        style={{}}
      >
        children
      </Breadcrumb>
    );
    expect(wrapper.find('Breadcrumb').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual('breadcrumb custom-breadcrumb');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('size')).toEqual('small');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has divider prop', () => {
    const instance = shallow(<BreadcrumbDivider icon="angle right" />);
    const wrapper = shallow(<Breadcrumb divider={instance} />);
    expect(instance.prop('icon')).toEqual('angle right');
    expect(wrapper.prop('divider')).toEqual(instance);
  });

  it('has sections prop', () => {
    const sections = [
      { key: 'home', active: true, content: 'Home', link: true },
      {
        key: 'registration',
        active: true,
        content: 'Registration',
        link: true
      },
      {
        key: 'info',
        active: true,
        content: 'Personal Information',
        link: true
      }
    ];
    const wrapper = mount(<Breadcrumb sections={sections} />);
    expect(wrapper.prop('sections')).toEqual(sections);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Breadcrumb
        as="span"
        className="custom-breadcrumb"
        size="small"
        style={{}}
      >
        children
      </Breadcrumb>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const instance = shallow(<BreadcrumbDivider icon="angle right" />);
    const component = renderer.create(<Breadcrumb divider={instance} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const sections = [
      { key: 'home', content: 'Home', link: true },
      { key: 'registration', content: 'Registration', link: true },
      { key: 'info', content: 'Personal Information', active: true }
    ];
    const component = renderer.create(<Breadcrumb sections={sections} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
