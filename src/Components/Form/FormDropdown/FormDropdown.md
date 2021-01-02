# FormDropdown Component

A re-usable custom component wrapper around [semantic-ui-react Form.Dropdown](https://react.semantic-ui.com/collections/form)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FormDropdown
participant SemanticUI
    App ->> FormDropdown: Import FormDropdown;
    FormDropdown ->> SemanticUI : Import Properties
    SemanticUI ->> FormDropdown : Export Properties
    FormDropdown ->> App : Export FormDropdown
```
