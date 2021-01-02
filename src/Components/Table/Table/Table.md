# Table Component

A re-usable custom component wrapper around [semantic-ui-react Table](https://react.semantic-ui.com/collections/table)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Table
participant SemanticUI
    App ->> Table: Import Table;
    Table ->> SemanticUI : Import Properties
    SemanticUI ->> Table : Export Properties
    Table ->> App : Export Table
```
