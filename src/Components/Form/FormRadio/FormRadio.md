# FormRadio Component

A re-usable custom component wrapper around [semantic-ui-react Form.Radio](https://react.semantic-ui.com/collections/form)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FormRadio
participant SemanticUI
    App ->> FormRadio: Import FormRadio;
    FormRadio ->> SemanticUI : Import Properties
    SemanticUI ->> FormRadio : Export Properties
    FormRadio ->> App : Export FormRadio
```
