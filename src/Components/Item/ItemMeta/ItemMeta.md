# ItemMeta Component

A re-usable custom component wrapper around [semantic-ui-react Item.Meta](https://react.semantic-ui.com/views/item)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ItemMeta
participant SemanticUI
    App ->> ItemMeta: Import ItemMeta;
    ItemMeta ->> SemanticUI : Import Properties
    SemanticUI ->> ItemMeta : Export Properties
    ItemMeta ->> App : Export ItemMeta
```
