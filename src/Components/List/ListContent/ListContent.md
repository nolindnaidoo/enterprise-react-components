# ListContent Component

A re-usable custom component wrapper around [semantic-ui-react List.Content](https://react.semantic-ui.com/elements/list)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ListContent
participant SemanticUI
    App ->> ListContent: Import ListContent;
    ListContent ->> SemanticUI : Import Properties
    SemanticUI ->> ListContent : Export Properties
    ListContent ->> App : Export ListContent
```
