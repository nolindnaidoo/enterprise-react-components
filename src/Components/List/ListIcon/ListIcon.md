# ListIcon Component

A re-usable custom component wrapper around [semantic-ui-react List.Icon](https://react.semantic-ui.com/elements/list)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ListIcon
participant SemanticUI
    App ->> ListIcon: Import ListIcon;
    ListIcon ->> SemanticUI : Import Properties
    SemanticUI ->> ListIcon : Export Properties
    ListIcon ->> App : Export ListIcon
```
