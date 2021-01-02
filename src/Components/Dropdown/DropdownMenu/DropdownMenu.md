# DropdownMenu Component

A re-usable custom component wrapper around [semantic-ui-react Dropdown.Menu](https://react.semantic-ui.com/modules/dropdown)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant DropdownMenu
participant SemanticUI
    App ->> DropdownMenu: Import DropdownMenu;
    DropdownMenu ->> SemanticUI : Import Properties
    SemanticUI ->> DropdownMenu : Export Properties
    DropdownMenu ->> App : Export DropdownMenu
```
