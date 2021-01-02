import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  Icon,
  Menu,
  MenuItem
} from '../../src/Components';
import imageFile from '../../public/assets/images/300.png';

const stories = storiesOf('Dropdown', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A dropdown can be formatted so that its menu is pointing.')(() => {
    const button = boolean('Button', false);
    const compact = boolean('Compact', false);
    const disabled = boolean('Disabled', false);
    const error = boolean('Error', false);
    const floating = boolean('Floating', false);
    const fluid = boolean('Fluid', false);
    const header = text('Header', 'Example');
    const labeled = boolean('Labeled', true);
    const loading = boolean('Loading', false);
    const multiple = boolean('Multiple', true);

    const pointingLabel = 'Pointing';
    const pointingOptions = {
      none: '',
      left: 'Left',
      right: 'Right',
      top: 'Top',
      'top left': 'Top Left',
      'top right': 'Top Right',
      bottom: 'Bottom'
    };
    const defaultPointing = '';
    const pointingChange = select(
      pointingLabel,
      pointingOptions,
      defaultPointing
    );

    const scrolling = boolean('Scrolling', true);
    const search = boolean('Search', false);
    const selection = boolean('Selection', true);
    const simple = boolean('Simple', false);
    const name = text('Text', 'File');
    const upward = boolean('Upward', false);
    return (
      <Dropdown
        button={button}
        compact={compact}
        disabled={disabled}
        error={error}
        floating={floating}
        fluid={fluid}
        header={header}
        labeled={labeled}
        loading={loading}
        multiple={multiple}
        pointing={pointingChange}
        scrolling={scrolling}
        search={search}
        selection={selection}
        simple={simple}
        text={name}
        upward={upward}
      >
        <DropdownMenu>
          <DropdownItem text="New" />
          <DropdownItem text="Open..." description="ctrl + o" />
          <DropdownItem text="Save as..." description="ctrl + s" />
          <DropdownItem text="Rename" description="ctrl + r" />
          <DropdownItem text="Make a copy" />
          <DropdownItem icon="folder" text="Move to folder" />
          <DropdownItem icon="trash" text="Move to trash" />
          <DropdownDivider />
          <DropdownItem text="Download As..." />
          <DropdownItem text="Publish To Web" />
          <DropdownItem text="E-mail Collaborators" />
        </DropdownMenu>
      </Dropdown>
    );
  })
);

stories.add(
  'Button',
  withInfo(
    'A dropdown allows a user to select a value from a series of options.'
  )(() => {
    const button = boolean('Button', true);
    const className = text('className', 'icon');
    const compact = boolean('Compact', false);
    const disabled = boolean('Disabled', false);
    const error = boolean('Error', false);
    const floating = boolean('Floating', false);
    const fluid = boolean('Fluid', false);

    const friendOptions = [
      {
        image: { avatar: true, src: imageFile },
        text: 'Jenny Hess',
        value: 'Jenny Hess'
      },
      {
        image: { avatar: true, src: imageFile },
        text: 'John Hess',
        value: 'John Hess'
      }
    ];

    const header = text('Header', 'Example');

    const iconLabel = 'Icon';
    const iconOptions = {
      none: '',
      world: 'World',
      users: 'Users'
    };
    const defaultIcon = 'users';
    const iconChange = select(iconLabel, iconOptions, defaultIcon);

    const labeled = boolean('Labeled', true);
    const loading = boolean('Loading', false);
    const multiple = boolean('Multiple', true);

    const pointingLabel = 'Pointing';
    const pointingOptions = {
      none: '',
      left: 'Left',
      right: 'Right',
      top: 'Top',
      'top left': 'Top Left',
      'top right': 'Top Right',
      bottom: 'Bottom'
    };
    const defaultPointing = '';
    const pointingChange = select(
      pointingLabel,
      pointingOptions,
      defaultPointing
    );

    const search = boolean('Search', false);
    const selection = boolean('Selection', true);
    const simple = boolean('Simple', false);

    const textLabel = 'Text';
    const defaultText = 'Select Contact';
    const textChange = text(textLabel, defaultText);
    const upward = boolean('Upward', false);
    return (
      <Dropdown
        button={button}
        className={className}
        compact={compact}
        disabled={disabled}
        error={error}
        floating={floating}
        fluid={fluid}
        header={header}
        icon={iconChange}
        labeled={labeled}
        loading={loading}
        multiple={multiple}
        options={friendOptions.map(item => (
          <DropdownItem
            image={item.image}
            text={item.text}
            value={item.value}
          />
        ))}
        pointing={pointingChange}
        search={search}
        selection={selection}
        simple={simple}
        text={textChange}
        upward={upward}
      />
    );
  })
);

stories.add(
  'Pointing',
  withInfo('A dropdown can be formatted so that its menu is pointing.')(() => {
    const inverted = boolean('Inverted', false);
    const vertical = boolean('Vertical', false);
    return (
      <Menu inverted={inverted} vertical={vertical}>
        <MenuItem onClick={action('clicked')}>Home</MenuItem>
        <Dropdown text="Shopping" pointing className="link item">
          <DropdownMenu>
            <DropdownHeader>Categories</DropdownHeader>
            <DropdownItem>
              <Dropdown text="Clothing">
                <DropdownMenu>
                  <DropdownHeader>Mens</DropdownHeader>
                  <DropdownItem>Shirts</DropdownItem>
                  <DropdownItem>Pants</DropdownItem>
                  <DropdownItem>Jeans</DropdownItem>
                  <DropdownItem>Shoes</DropdownItem>
                  <DropdownDivider />
                  <DropdownHeader>Womens</DropdownHeader>
                  <DropdownItem>Dresses</DropdownItem>
                  <DropdownItem>Shoes</DropdownItem>
                  <DropdownItem>Bags</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </DropdownItem>
            <DropdownItem>Home Goods</DropdownItem>
            <DropdownItem>Bedroom</DropdownItem>
            <DropdownDivider />
            <DropdownHeader>Order</DropdownHeader>
            <DropdownItem>Status</DropdownItem>
            <DropdownItem>Cancellations</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <MenuItem onClick={action('clicked')}>Forums</MenuItem>
        <MenuItem onClick={action('clicked')}>Contact Us</MenuItem>
      </Menu>
    );
  })
);

stories.add(
  'Trigger',
  withInfo('A dropdown can be formatted so that its menu is pointing.')(() => {
    const options = [
      {
        text: (
          <span>
            Signed in as <strong>Cliff Smith</strong>
          </span>
        ),
        disabled: true,
        value: 'Bob Smith'
      },
      {
        image: { avatar: true, src: imageFile },
        text: 'Jenny Hess',
        value: 'Jenny Hess'
      },
      {
        image: { avatar: true, src: imageFile },
        text: 'John Hess',
        value: 'John Hess'
      }
    ];

    const trigger = (
      <span>
        <Icon name="user" /> Hello, Cliff
      </span>
    );
    return (
      <Dropdown
        trigger={trigger}
        options={options.map(item => (
          <DropdownItem
            image={item.image}
            text={item.text}
            value={item.value}
          />
        ))}
      />
    );
  })
);
