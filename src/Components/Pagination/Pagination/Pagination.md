# Pagination Component

A re-usable custom component wrapper around [semantic-ui-react Pagination](https://react.semantic-ui.com/addons/pagination)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Pagination
participant SemanticUI
    App ->> Pagination: Import Pagination;
    Pagination ->> SemanticUI : Import Properties
    SemanticUI ->> Pagination : Export Properties
    Pagination ->> App : Export Pagination
```
