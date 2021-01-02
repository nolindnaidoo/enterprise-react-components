# Sticky Component

A re-usable custom component wrapper around [semantic-ui-react Sticky](https://react.semantic-ui.com/modules/sticky)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Sticky
participant SemanticUI
    App ->> Sticky: Import Sticky;
    Sticky ->> SemanticUI : Import Properties
    SemanticUI ->> Sticky : Export Properties
    Sticky ->> App : Export Sticky
```
