# ButtonGroup Component

A re-usable custom component wrapper around [semantic-ui-react Button.Group](https://react.semantic-ui.com/elements/button)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ButtonGroup
participant SemanticUI
    App ->> ButtonGroup: Import ButtonGroup;
    ButtonGroup ->> SemanticUI : Import Properties
    SemanticUI ->> ButtonGroup : Export Properties
    ButtonGroup ->> App : Export ButtonGroup
```
