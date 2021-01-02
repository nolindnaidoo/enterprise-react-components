import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Feed from '../Feed';

configure({ adapter: new Adapter() });

describe('<Feed /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Feed as="span" className="feed-custom" size="small" style={{}}>
        children
      </Feed>
    );
    expect(wrapper.find('Feed').length).toBe(1);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('feed feed-custom');
    expect(wrapper.prop('size')).toEqual('small');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has events prop', () => {
    const wrapper = shallow(<Feed events={[]} />);
    expect(wrapper.prop('events')).toEqual([]);
  });

  it('snapshot', () => {
    const component = renderer.create(
      <Feed as="span" className="feed-custom" size="small" style={{}}>
        children
      </Feed>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot', () => {
    const component = renderer.create(<Feed events={[]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
