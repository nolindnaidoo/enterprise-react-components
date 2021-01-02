import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import List from '../List';

configure({ adapter: new Adapter() });

describe('<List /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <List
        animated
        as="ul"
        bulleted
        celled
        className="list-custom"
        divided
        floated="left"
        horizontal
        inverted
        link
        ordered
        relaxed="very"
        selection
        size="large"
        style={{}}
        verticalalign="top"
      >
        some content
      </List>
    );
    expect(wrapper.find('List').length).toBe(1);
    expect(wrapper.prop('animated')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('ul');
    expect(wrapper.prop('bulleted')).toEqual(true);
    expect(wrapper.prop('celled')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('list list-custom');
    expect(wrapper.prop('divided')).toEqual(true);
    expect(wrapper.prop('floated')).toEqual('left');
    expect(wrapper.prop('horizontal')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('link')).toEqual(true);
    expect(wrapper.prop('ordered')).toEqual(true);
    expect(wrapper.prop('relaxed')).toEqual('very');
    expect(wrapper.prop('selection')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('verticalalign')).toEqual('top');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <List
        animated
        as="ul"
        bulleted
        celled
        className="list-custom"
        divided
        floated="left"
        horizontal
        inverted
        link
        ordered
        relaxed="very"
        selection
        size="large"
        style={{}}
        verticalalign="top"
      >
        some content
      </List>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
