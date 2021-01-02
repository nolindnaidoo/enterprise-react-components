# CardDescription Component

A re-usable custom component wrapper around [semantic-ui-react Card.Description](https://react.semantic-ui.com/views/card)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CardDescription
participant SemanticUI
    App ->> CardDescription: Import CardDescription;
    CardDescription ->> SemanticUI : Import Properties
    SemanticUI ->> CardDescription : Export Properties
    CardDescription ->> App : Export CardDescription
```
