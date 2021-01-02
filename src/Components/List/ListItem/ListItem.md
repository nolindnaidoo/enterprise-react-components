# ListItem Component

A re-usable custom component wrapper around [semantic-ui-react List.Item](https://react.semantic-ui.com/elements/list)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ListItem
participant SemanticUI
    App ->> ListItem: Import ListItem;
    ListItem ->> SemanticUI : Import Properties
    SemanticUI ->> ListItem : Export Properties
    ListItem ->> App : Export ListItem
```
