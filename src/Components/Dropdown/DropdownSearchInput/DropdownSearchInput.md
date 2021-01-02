# DropdownSearchInput Component

A re-usable custom component wrapper around [semantic-ui-react Dropdown.SearchInput](https://react.semantic-ui.com/modules/dropdown)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant DropdownSearchInput
participant SemanticUI
    App ->> DropdownSearchInput: Import DropdownSearchInput;
    DropdownSearchInput ->> SemanticUI : Import Properties
    SemanticUI ->> DropdownSearchInput : Export Properties
    DropdownSearchInput ->> App : Export DropdownSearchInput
```
