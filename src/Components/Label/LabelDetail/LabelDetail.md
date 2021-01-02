# LabelDetail Component

A re-usable custom component wrapper around [semantic-ui-react Label.Detail](https://react.semantic-ui.com/elements/label)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant LabelDetail
participant SemanticUI
    App ->> LabelDetail: Import LabelDetail;
    LabelDetail ->> SemanticUI : Import Properties
    SemanticUI ->> LabelDetail : Export Properties
    LabelDetail ->> App : Export LabelDetail
```
