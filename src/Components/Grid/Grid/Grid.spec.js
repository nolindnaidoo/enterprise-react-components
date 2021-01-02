import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '../Grid';

configure({ adapter: new Adapter() });

describe('<Grid /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Grid
        as="a"
        celled="internally"
        centered
        className="grid-custom"
        columns="equal"
        container
        divided="vertically"
        doubling
        inverted
        padded="horizontally"
        relaxed="very"
        reversed="mobile"
        stackable
        stretched
        style={{}}
        textAlign="justified"
        verticalAlign="top"
      >
        children
      </Grid>
    );
    expect(wrapper.find('Grid').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('celled')).toEqual('internally');
    expect(wrapper.prop('centered')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('grid grid-custom');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('columns')).toEqual('equal');
    expect(wrapper.prop('container')).toEqual(true);
    expect(wrapper.prop('divided')).toEqual('vertically');
    expect(wrapper.prop('doubling')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('padded')).toEqual('horizontally');
    expect(wrapper.prop('relaxed')).toEqual('very');
    expect(wrapper.prop('reversed')).toEqual('mobile');
    expect(wrapper.prop('stackable')).toEqual(true);
    expect(wrapper.prop('stretched')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('textAlign')).toEqual('justified');
    expect(wrapper.prop('verticalAlign')).toEqual('top');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Grid
        as="a"
        celled="internally"
        centered
        className="grid-custom"
        columns="equal"
        container
        divided="vertically"
        doubling
        inverted
        padded="horizontally"
        relaxed="very"
        reversed="mobile"
        stackable
        stretched
        style={{}}
        textAlign="justified"
        verticalAlign="top"
      >
        children
      </Grid>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
