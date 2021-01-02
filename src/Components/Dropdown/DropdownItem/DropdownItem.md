# DropdownItem Component

A re-usable custom component wrapper around [semantic-ui-react Dropdown.Item](https://react.semantic-ui.com/modules/dropdown)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant DropdownItem
participant SemanticUI
    App ->> DropdownItem: Import DropdownItem;
    DropdownItem ->> SemanticUI : Import Properties
    SemanticUI ->> DropdownItem : Export Properties
    DropdownItem ->> App : Export DropdownItem
```
