# Grid Component

A re-usable custom component wrapper around [semantic-ui-react Grid](https://react.semantic-ui.com/collections/grid)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Grid
participant SemanticUI
    App ->> Grid: Import Grid;
    Grid ->> SemanticUI : Import Properties
    SemanticUI ->> Grid : Export Properties
    Grid ->> App : Export Grid
```
