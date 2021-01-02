# StepTitle Component

A re-usable custom component wrapper around [semantic-ui-react Step.Title](https://react.semantic-ui.com/elements/step)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant StepTitle
participant SemanticUI
    App ->> StepTitle: Import StepTitle;
    StepTitle ->> SemanticUI : Import Properties
    SemanticUI ->> StepTitle : Export Properties
    StepTitle ->> App : Export StepTitle
```
