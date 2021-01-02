# MessageHeader Component

A re-usable custom component wrapper around [semantic-ui-react Message.Header](https://react.semantic-ui.com/collections/message)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant MessageHeader
participant SemanticUI
    App ->> MessageHeader: Import MessageHeader;
    MessageHeader ->> SemanticUI : Import Properties
    SemanticUI ->> MessageHeader : Export Properties
    MessageHeader ->> App : Export MessageHeader
```
