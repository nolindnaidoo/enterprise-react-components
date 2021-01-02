# Message Component

A re-usable custom component wrapper around [semantic-ui-react Message](https://react.semantic-ui.com/collections/message)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Message
participant SemanticUI
    App ->> Message: Import Message;
    Message ->> SemanticUI : Import Properties
    SemanticUI ->> Message : Export Properties
    Message ->> App : Export Message
```
