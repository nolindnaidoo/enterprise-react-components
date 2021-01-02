# ItemExtra Component

A re-usable custom component wrapper around [semantic-ui-react Item.Extra](https://react.semantic-ui.com/views/item)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ItemExtra
participant SemanticUI
    App ->> ItemExtra: Import ItemExtra;
    ItemExtra ->> SemanticUI : Import Properties
    SemanticUI ->> ItemExtra : Export Properties
    ItemExtra ->> App : Export ItemExtra
```
