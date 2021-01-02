# CardGroup Component

A re-usable custom component wrapper around [semantic-ui-react Card.Group](https://react.semantic-ui.com/views/card)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CardGroup
participant SemanticUI
    App ->> CardGroup: Import CardGroup;
    CardGroup ->> SemanticUI : Import Properties
    SemanticUI ->> CardGroup : Export Properties
    CardGroup ->> App : Export CardGroup
```
