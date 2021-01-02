# TableBody Component

A re-usable custom component wrapper around [semantic-ui-react Table.Body](https://react.semantic-ui.com/collections/table)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant TableBody
participant SemanticUI
    App ->> TableBody: Import TableBody;
    TableBody ->> SemanticUI : Import Properties
    SemanticUI ->> TableBody : Export Properties
    TableBody ->> App : Export TableBody
```
