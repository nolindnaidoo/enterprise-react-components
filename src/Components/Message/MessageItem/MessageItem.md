# MessageItem Component

A re-usable custom component wrapper around [semantic-ui-react Message.Item](https://react.semantic-ui.com/collections/message)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant MessageItem
participant SemanticUI
    App ->> MessageItem: Import MessageItem;
    MessageItem ->> SemanticUI : Import Properties
    SemanticUI ->> MessageItem : Export Properties
    MessageItem ->> App : Export MessageItem
```
