# FormField Component

A re-usable custom component wrapper around [semantic-ui-react Form.Field](https://react.semantic-ui.com/collections/form)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FormField
participant SemanticUI
    App ->> FormField: Import FormField;
    FormField ->> SemanticUI : Import Properties
    SemanticUI ->> FormField : Export Properties
    FormField ->> App : Export FormField
```
