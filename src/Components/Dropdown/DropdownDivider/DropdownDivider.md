# DropdownDivider Component

A re-usable custom component wrapper around [semantic-ui-react Dropdown.Divider](https://react.semantic-ui.com/modules/dropdown)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant DropdownDivider
participant SemanticUI
    App ->> DropdownDivider: Import DropdownDivider;
    DropdownDivider ->> SemanticUI : Import Properties
    SemanticUI ->> DropdownDivider : Export Properties
    DropdownDivider ->> App : Export DropdownDivider
```
