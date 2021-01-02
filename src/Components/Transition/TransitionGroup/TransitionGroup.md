# TransitionGroup Component

A re-usable custom component wrapper around [semantic-ui-react Transition.Group](https://react.semantic-ui.com/modules/transition)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant TransitionGroup
participant SemanticUI
    App ->> TransitionGroup: Import TransitionGroup;
    TransitionGroup ->> SemanticUI : Import Properties
    SemanticUI ->> TransitionGroup : Export Properties
    TransitionGroup ->> App : Export TransitionGroup
```
