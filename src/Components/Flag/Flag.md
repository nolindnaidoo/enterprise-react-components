# Flag Component

A re-usable custom component wrapper around [semantic-ui-react Flag](https://react.semantic-ui.com/elements/flag)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Flag
participant SemanticUI
    App ->> Flag: Import Flag;
    Flag ->> SemanticUI : Import Properties
    SemanticUI ->> Flag : Export Properties
    Flag ->> App : Export Flag
```
