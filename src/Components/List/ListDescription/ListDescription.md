# ListDescription Component

A re-usable custom component wrapper around [semantic-ui-react List.Description](https://react.semantic-ui.com/elements/list)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ListDescription
participant SemanticUI
    App ->> ListDescription: Import ListDescription;
    ListDescription ->> SemanticUI : Import Properties
    SemanticUI ->> ListDescription : Export Properties
    ListDescription ->> App : Export ListDescription
```
