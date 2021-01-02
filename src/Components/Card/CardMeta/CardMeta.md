# CardMeta Component

A re-usable custom component wrapper around [semantic-ui-react Card.Meta](https://react.semantic-ui.com/views/card)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CardMeta
participant SemanticUI
    App ->> CardMeta: Import CardMeta;
    CardMeta ->> SemanticUI : Import Properties
    SemanticUI ->> CardMeta : Export Properties
    CardMeta ->> App : Export CardMeta
```
