import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Rating from '../Rating';

configure({ adapter: new Adapter() });

describe('<Rating /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Rating
        as="a"
        className="rating-custom"
        clearable="auto"
        disabled
        defaultRating={0}
        icon="heart"
        maxRating={5}
        onRate={Function}
        size="mini"
        style={{}}
      />
    );
    expect(wrapper.find('Rating').length).toBe(1);
    expect(wrapper.prop('as')).toBe('a');
    expect(wrapper.prop('className')).toBe('rating rating-custom');
    expect(wrapper.prop('clearable')).toEqual('auto');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('defaultRating')).toEqual(0);
    expect(wrapper.prop('icon')).toBe('heart');
    expect(wrapper.prop('maxRating')).toEqual(5);
    expect(wrapper.prop('onRate')).toEqual(Function);
    wrapper.find('onRate');
    wrapper.simulate('click');
    expect(wrapper.prop('size')).toBe('mini');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has rating prop', () => {
    const wrapper = shallow(<Rating rating={10} />);
    expect(wrapper.prop('rating')).toEqual(10);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Rating
        as="a"
        className="rating-custom"
        clearable="auto"
        disabled
        defaultRating={0}
        onRate={Function}
        icon="heart"
        maxRating={5}
        size="mini"
        style={{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Rating rating={10} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
