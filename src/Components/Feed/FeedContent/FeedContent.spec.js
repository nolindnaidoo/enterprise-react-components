import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FeedContent from '../FeedContent';

configure({ adapter: new Adapter() });

describe('<FeedContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <FeedContent as="span" className="feedContent-custom" style={{}}>
        children
      </FeedContent>
    );
    expect(wrapper.find('FeedContent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual('feedContent feedContent-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has date prop', () => {
    const wrapper = shallow(<FeedContent date="29/01/2018" />);
    expect(wrapper.prop('date')).toEqual('29/01/2018');
  });

  it('has extraImages prop', () => {
    const wrapper = shallow(<FeedContent extraImages={[]} />);
    expect(wrapper.prop('extraImages')).toEqual([]);
  });

  it('has extraText prop', () => {
    const wrapper = shallow(<FeedContent extraText="text" />);
    expect(wrapper.prop('extraText')).toEqual('text');
  });

  it('has meta prop', () => {
    const wrapper = shallow(<FeedContent meta="test" />);
    expect(wrapper.prop('meta')).toEqual('test');
  });

  it('has summary prop', () => {
    const wrapper = shallow(<FeedContent summary="summary" />);
    expect(wrapper.prop('summary')).toEqual('summary');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <FeedContent as="span" className="feedContent-custom" style={{}}>
        children
      </FeedContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<FeedContent date="29/01/2018" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<FeedContent extraImages={[]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<FeedContent extraText="text" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<FeedContent meta="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<FeedContent summary="summary" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
