# TableRow Component

A re-usable custom component wrapper around [semantic-ui-react Table.Row](https://react.semantic-ui.com/collections/table)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant TableRow
participant SemanticUI
    App ->> TableRow: Import TableRow;
    TableRow ->> SemanticUI : Import Properties
    SemanticUI ->> TableRow : Export Properties
    TableRow ->> App : Export TableRow
```
