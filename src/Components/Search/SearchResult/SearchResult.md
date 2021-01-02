# SearchResult Component

A re-usable custom component wrapper around [semantic-ui-react Search.Result](https://react.semantic-ui.com/modules/search)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant SearchResult
participant SemanticUI
    App ->> SearchResult: Import SearchResult;
    SearchResult ->> SemanticUI : Import Properties
    SemanticUI ->> SearchResult : Export Properties
    SearchResult ->> App : Export SearchResult
```
