# TransitionablePortal Component

A re-usable custom component wrapper around [semantic-ui-react TransitionablePortal](https://react.semantic-ui.com/addons/transitionable-portal)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant TransitionablePortal
participant SemanticUI
    App ->> TransitionablePortal: Import TransitionablePortal;
    TransitionablePortal ->> SemanticUI : Import Properties
    SemanticUI ->> TransitionablePortal : Export Properties
    TransitionablePortal ->> App : Export TransitionablePortal
```
