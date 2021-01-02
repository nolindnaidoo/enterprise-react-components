# PaginationItem Component

A re-usable custom component wrapper around [semantic-ui-react Pagination.Item](https://react.semantic-ui.com/addons/pagination)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant PaginationItem
participant SemanticUI
    App ->> PaginationItem: Import PaginationItem;
    PaginationItem ->> SemanticUI : Import Properties
    SemanticUI ->> PaginationItem : Export Properties
    PaginationItem ->> App : Export PaginationItem
```
