# SearchCategory Component

A re-usable custom component wrapper around [semantic-ui-react Search.Category](https://react.semantic-ui.com/modules/search)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant SearchCategory
participant SemanticUI
    App ->> SearchCategory: Import SearchCategory;
    SearchCategory ->> SemanticUI : Import Properties
    SemanticUI ->> SearchCategory : Export Properties
    SearchCategory ->> App : Export SearchCategory
```
