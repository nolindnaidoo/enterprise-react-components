# Icon Component

A re-usable custom component wrapper around [semantic-ui-react Icon](https://react.semantic-ui.com/elements/icon)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Icon
participant SemanticUI
    App ->> Icon: Import Icon;
    Icon ->> SemanticUI : Import Properties
    SemanticUI ->> Icon : Export Properties
    Icon ->> App : Export Icon
```
