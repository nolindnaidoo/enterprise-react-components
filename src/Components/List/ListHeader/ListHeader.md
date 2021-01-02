# ListHeader Component

A re-usable custom component wrapper around [semantic-ui-react List.Header](https://react.semantic-ui.com/elements/list)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ListHeader
participant SemanticUI
    App ->> ListHeader: Import ListHeader;
    ListHeader ->> SemanticUI : Import Properties
    SemanticUI ->> ListHeader : Export Properties
    ListHeader ->> App : Export ListHeader
```
