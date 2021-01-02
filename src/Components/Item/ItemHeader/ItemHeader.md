# ItemHeader Component

A re-usable custom component wrapper around [semantic-ui-react Item.Header](https://react.semantic-ui.com/views/item)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ItemHeader
participant SemanticUI
    App ->> ItemHeader: Import ItemHeader;
    ItemHeader ->> SemanticUI : Import Properties
    SemanticUI ->> ItemHeader : Export Properties
    ItemHeader ->> App : Export ItemHeader
```
