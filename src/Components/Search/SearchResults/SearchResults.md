# SearchResults Component

A re-usable custom component wrapper around [semantic-ui-react Search.Results](https://react.semantic-ui.com/modules/search)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant SearchResults
participant SemanticUI
    App ->> SearchResults: Import SearchResults;
    SearchResults ->> SemanticUI : Import Properties
    SemanticUI ->> SearchResults : Export Properties
    SearchResults ->> App : Export SearchResults
```
