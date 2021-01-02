import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FeedSummary from '../FeedSummary';

configure({ adapter: new Adapter() });

describe('<FeedSummary /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <FeedSummary as="span" className="feedSummary-custom" style={{}}>
        children
      </FeedSummary>
    );
    expect(wrapper.find('FeedSummary').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual('feedSummary feedSummary-custom');
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has content prop', () => {
    const wrapper = shallow(<FeedSummary content="example" />);
    expect(wrapper.prop('content')).toEqual('example');
  });
  it('has date & user prop', () => {
    const wrapper = shallow(
      <FeedSummary date="29/01/2018" user="path/to/user" />
    );
    expect(wrapper.prop('date')).toEqual('29/01/2018');
    expect(wrapper.prop('user')).toEqual('path/to/user');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <FeedSummary as="span" className="feedSummary-custom" style={{}}>
        children
      </FeedSummary>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(<FeedSummary content="example" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot', () => {
    const component = renderer.create(
      <FeedSummary date="29/01/2018" user="path/to/user" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
