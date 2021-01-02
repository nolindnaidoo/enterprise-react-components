# FormGroup Component

A re-usable custom component wrapper around [semantic-ui-react Form.Group](https://react.semantic-ui.com/collections/form)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FormGroup
participant SemanticUI
    App ->> FormGroup: Import FormGroup;
    FormGroup ->> SemanticUI : Import Properties
    SemanticUI ->> FormGroup : Export Properties
    FormGroup ->> App : Export FormGroup
```
