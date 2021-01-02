# CardHeader Component

A re-usable custom component wrapper around [semantic-ui-react Card.Header](https://react.semantic-ui.com/views/card)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CardHeader
participant SemanticUI
    App ->> CardHeader: Import CardHeader;
    CardHeader ->> SemanticUI : Import Properties
    SemanticUI ->> CardHeader : Export Properties
    CardHeader ->> App : Export CardHeader
```
