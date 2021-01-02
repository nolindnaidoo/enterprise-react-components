# FormSelect Component

A re-usable custom component wrapper around [semantic-ui-react Form.Select](https://react.semantic-ui.com/collections/form)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FormSelect
participant SemanticUI
    App ->> FormSelect: Import FormSelect;
    FormSelect ->> SemanticUI : Import Properties
    SemanticUI ->> FormSelect : Export Properties
    FormSelect ->> App : Export FormSelect
```
