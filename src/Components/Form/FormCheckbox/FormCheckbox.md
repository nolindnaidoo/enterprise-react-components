# FormCheckbox Component

A re-usable custom component wrapper around [semantic-ui-react Form.Checkbox](https://react.semantic-ui.com/collections/form)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FormCheckbox
participant SemanticUI
    App ->> FormCheckbox: Import FormCheckbox;
    FormCheckbox ->> SemanticUI : Import Properties
    SemanticUI ->> FormCheckbox : Export Properties
    FormCheckbox ->> App : Export FormCheckbox
```
