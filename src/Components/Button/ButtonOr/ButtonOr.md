# ButtonOr Component

A re-usable custom component wrapper around [semantic-ui-react Button.Or](https://react.semantic-ui.com/elements/button)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ButtonOr
participant SemanticUI
    App ->> ButtonOr: Import ButtonOr;
    ButtonOr ->> SemanticUI : Import Properties
    SemanticUI ->> ButtonOr : Export Properties
    ButtonOr ->> App : Export ButtonOr
```
