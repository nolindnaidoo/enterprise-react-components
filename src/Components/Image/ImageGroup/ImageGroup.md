# ImageGroup Component

A re-usable custom component wrapper around [semantic-ui-react Image.Group](https://react.semantic-ui.com/elements/image)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ImageGroup
participant SemanticUI
    App ->> ImageGroup: Import ImageGroup;
    ImageGroup ->> SemanticUI : Import Properties
    SemanticUI ->> ImageGroup : Export Properties
    ImageGroup ->> App : Export ImageGroup
```
