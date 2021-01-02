# Step Component

A re-usable custom component wrapper around [semantic-ui-react Step](https://react.semantic-ui.com/elements/step)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Step
participant SemanticUI
    App ->> Step: Import Step;
    Step ->> SemanticUI : Import Properties
    SemanticUI ->> Step : Export Properties
    Step ->> App : Export Step
```
