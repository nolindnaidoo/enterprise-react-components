# StepGroup Component

A re-usable custom component wrapper around [semantic-ui-react Step.Group](https://react.semantic-ui.com/elements/step)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant StepGroup
participant SemanticUI
    App ->> StepGroup: Import StepGroup;
    StepGroup ->> SemanticUI : Import Properties
    SemanticUI ->> StepGroup : Export Properties
    StepGroup ->> App : Export StepGroup
```
