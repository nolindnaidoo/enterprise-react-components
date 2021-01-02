# Advertisement Component

A re-usable custom component wrapper around [semantic-ui-react Advertisement](https://react.semantic-ui.com/views/advertisement)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Advertisement
participant SemanticUI
    App ->> Advertisement: Import Advertisement;
    Advertisement ->> SemanticUI : Import Properties
    SemanticUI ->> Advertisement : Export Properties
    Advertisement ->> App : Export Advertisement
```
