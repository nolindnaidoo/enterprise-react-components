# StepDescription Component

A re-usable custom component wrapper around [semantic-ui-react Step.Description](https://react.semantic-ui.com/elements/step)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant StepDescription
participant SemanticUI
    App ->> StepDescription: Import StepDescription;
    StepDescription ->> SemanticUI : Import Properties
    SemanticUI ->> StepDescription : Export Properties
    StepDescription ->> App : Export StepDescription
```
