# Item Component

A re-usable custom component wrapper around [semantic-ui-react Item](https://react.semantic-ui.com/views/item)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Item
participant SemanticUI
    App ->> Item: Import Item;
    Item ->> SemanticUI : Import Properties
    SemanticUI ->> Item : Export Properties
    Item ->> App : Export Item
```
