# Card Component

A re-usable custom component wrapper around [semantic-ui-react Card](https://react.semantic-ui.com/views/card)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Card
participant SemanticUI
    App ->> Card: Import Card;
    Card ->> SemanticUI : Import Properties
    SemanticUI ->> Card : Export Properties
    Card ->> App : Export Card
```
