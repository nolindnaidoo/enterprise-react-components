# TableCell Component

A re-usable custom component wrapper around [semantic-ui-react Table.Cell](https://react.semantic-ui.com/collections/table)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant TableCell
participant SemanticUI
    App ->> TableCell: Import TableCell;
    TableCell ->> SemanticUI : Import Properties
    SemanticUI ->> TableCell : Export Properties
    TableCell ->> App : Export TableCell
```
