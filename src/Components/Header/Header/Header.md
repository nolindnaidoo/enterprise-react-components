# Header Component

A re-usable custom component wrapper around [semantic-ui-react Header](https://react.semantic-ui.com/elements/header)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Header
participant SemanticUI
    App ->> Header: Import Header;
    Header ->> SemanticUI : Import Properties
    SemanticUI ->> Header : Export Properties
    Header ->> App : Export Header
```
