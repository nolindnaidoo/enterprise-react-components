# TableHeader Component

A re-usable custom component wrapper around [semantic-ui-react Table.Header](https://react.semantic-ui.com/collections/table)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant TableHeader
participant SemanticUI
    App ->> TableHeader: Import TableHeader;
    TableHeader ->> SemanticUI : Import Properties
    SemanticUI ->> TableHeader : Export Properties
    TableHeader ->> App : Export TableHeader
```
