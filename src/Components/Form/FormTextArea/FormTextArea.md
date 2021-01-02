# FormTextArea Component

A re-usable custom component wrapper around [semantic-ui-react Form.TextArea](https://react.semantic-ui.com/collections/form)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FormTextArea
participant SemanticUI
    App ->> FormTextArea: Import FormTextArea;
    FormTextArea ->> SemanticUI : Import Properties
    SemanticUI ->> FormTextArea : Export Properties
    FormTextArea ->> App : Export FormTextArea
```
