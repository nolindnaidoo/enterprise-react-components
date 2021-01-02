# ListList Component

A re-usable custom component wrapper around [semantic-ui-react List.List](https://react.semantic-ui.com/elements/list)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ListList
participant SemanticUI
    App ->> ListList: Import ListList;
    ListList ->> SemanticUI : Import Properties
    SemanticUI ->> ListList : Export Properties
    ListList ->> App : Export ListList
```
