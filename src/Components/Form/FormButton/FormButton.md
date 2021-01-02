# FormButton Component

A re-usable custom component wrapper around [semantic-ui-react Form.Button](https://react.semantic-ui.com/collections/form)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FormButton
participant SemanticUI
    App ->> FormButton: Import FormButton;
    FormButton ->> SemanticUI : Import Properties
    SemanticUI ->> FormButton : Export Properties
    FormButton ->> App : Export FormButton
```
