# Dropdown Component

A re-usable custom component wrapper around [semantic-ui-react Dropdown](https://react.semantic-ui.com/modules/dropdown)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Dropdown
participant SemanticUI
    App ->> Dropdown: Import Dropdown;
    Dropdown ->> SemanticUI : Import Properties
    SemanticUI ->> Dropdown : Export Properties
    Dropdown ->> App : Export Dropdown
```
