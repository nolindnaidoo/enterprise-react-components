# Portal Component

A re-usable custom component wrapper around [semantic-ui-react Portal](https://react.semantic-ui.com/addons/portal)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Portal
participant SemanticUI
    App ->> Portal: Import Portal;
    Portal ->> SemanticUI : Import Properties
    SemanticUI ->> Portal : Export Properties
    Portal ->> App : Export Portal
```
