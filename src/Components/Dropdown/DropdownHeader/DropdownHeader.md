# DropdownHeader Component

A re-usable custom component wrapper around [semantic-ui-react Dropdown.Header](https://react.semantic-ui.com/modules/dropdown)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant DropdownHeader
participant SemanticUI
    App ->> DropdownHeader: Import DropdownHeader;
    DropdownHeader ->> SemanticUI : Import Properties
    SemanticUI ->> DropdownHeader : Export Properties
    DropdownHeader ->> App : Export DropdownHeader
```
