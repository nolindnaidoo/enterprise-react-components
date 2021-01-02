# Container Component

A re-usable custom component wrapper around [semantic-ui-react Container](https://react.semantic-ui.com/elements/container)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Container
participant SemanticUI
    App ->> Container: Import Container;
    Container ->> SemanticUI : Import Properties
    SemanticUI ->> Container : Export Properties
    Container ->> App : Export Container
```
