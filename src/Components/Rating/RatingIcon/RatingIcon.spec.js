import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import RatingIcon from '../RatingIcon';

configure({ adapter: new Adapter() });

describe('<RatingIcon /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <RatingIcon
        active
        as="a"
        className="ratingIcon-custom"
        index={0}
        onClick={Function}
        onKeyUp={Function}
        onMouseEnter={Function}
        selected
        style={{}}
      />
    );
    expect(wrapper.find('RatingIcon').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('ratingIcon ratingIcon-custom');
    expect(wrapper.prop('index')).toEqual(0);
    expect(wrapper.prop('onClick')).toEqual(Function);
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('onKeyUp')).toEqual(Function);
    wrapper.find('onKeyUp');
    wrapper.simulate('click');
    expect(wrapper.prop('onMouseEnter')).toEqual(Function);
    wrapper.find('onMouseEnter');
    wrapper.simulate('click');
    expect(wrapper.prop('selected')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <RatingIcon
        active
        as="a"
        className="ratingIcon-custom"
        index={0}
        onClick={Function}
        onKeyUp={Function}
        onMouseEnter={Function}
        selected
        style={{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
