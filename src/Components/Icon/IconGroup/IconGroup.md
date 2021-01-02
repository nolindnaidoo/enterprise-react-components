# IconGroup Component

A re-usable custom component wrapper around [semantic-ui-react Icon.Group](https://react.semantic-ui.com/elements/icon)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant IconGroup
participant SemanticUI
    App ->> IconGroup: Import IconGroup;
    IconGroup ->> SemanticUI : Import Properties
    SemanticUI ->> IconGroup : Export Properties
    IconGroup ->> App : Export IconGroup
```
