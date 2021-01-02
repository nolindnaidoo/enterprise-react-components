# Search Component

A re-usable custom component wrapper around [semantic-ui-react Search](https://react.semantic-ui.com/modules/search)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Search
participant SemanticUI
    App ->> Search: Import Search;
    Search ->> SemanticUI : Import Properties
    SemanticUI ->> Search : Export Properties
    Search ->> App : Export Search
```
