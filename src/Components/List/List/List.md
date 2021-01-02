# List Component

A re-usable custom component wrapper around [semantic-ui-react List](https://react.semantic-ui.com/elements/list)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant List
participant SemanticUI
    App ->> List: Import List;
    List ->> SemanticUI : Import Properties
    SemanticUI ->> List : Export Properties
    List ->> App : Export List
```
