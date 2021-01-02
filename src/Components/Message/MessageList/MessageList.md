# MessageList Component

A re-usable custom component wrapper around [semantic-ui-react Message.List](https://react.semantic-ui.com/collections/message)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant MessageList
participant SemanticUI
    App ->> MessageList: Import MessageList;
    MessageList ->> SemanticUI : Import Properties
    SemanticUI ->> MessageList : Export Properties
    MessageList ->> App : Export MessageList
```
