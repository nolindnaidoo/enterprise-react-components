# LabelGroup Component

A re-usable custom component wrapper around [semantic-ui-react Label.Group](https://react.semantic-ui.com/elements/label)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant LabelGroup
participant SemanticUI
    App ->> LabelGroup: Import LabelGroup;
    LabelGroup ->> SemanticUI : Import Properties
    SemanticUI ->> LabelGroup : Export Properties
    LabelGroup ->> App : Export LabelGroup
```
