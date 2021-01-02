# ItemDescription Component

A re-usable custom component wrapper around [semantic-ui-react Item.Description](https://react.semantic-ui.com/views/item)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ItemDescription
participant SemanticUI
    App ->> ItemDescription: Import ItemDescription;
    ItemDescription ->> SemanticUI : Import Properties
    SemanticUI ->> ItemDescription : Export Properties
    ItemDescription ->> App : Export ItemDescription
```
