# Transition Component

A re-usable custom component wrapper around [semantic-ui-react Transition](https://react.semantic-ui.com/modules/transition)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Transition
participant SemanticUI
    App ->> Transition: Import Transition;
    Transition ->> SemanticUI : Import Properties
    SemanticUI ->> Transition : Export Properties
    Transition ->> App : Export Transition
```
