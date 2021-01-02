import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FeedDate from '../FeedDate';

configure({ adapter: new Adapter() });

describe('<FeedDate /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <FeedDate as="span" className="feedDate-custom" style={{}}>
        children
      </FeedDate>
    );
    expect(wrapper.find('FeedDate').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual('feedDate feedDate-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has content prop', () => {
    const wrapper = shallow(<FeedDate content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  it('snapshot', () => {
    const component = renderer.create(
      <FeedDate as="span" className="feedDate-custom" style={{}}>
        children
      </FeedDate>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<FeedDate content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
