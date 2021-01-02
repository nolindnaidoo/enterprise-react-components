# Divider Component

A re-usable custom component wrapper around [semantic-ui-react Divider](https://react.semantic-ui.com/elements/divider)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Divider
participant SemanticUI
    App ->> Divider: Import Divider;
    Divider ->> SemanticUI : Import Properties
    SemanticUI ->> Divider : Export Properties
    Divider ->> App : Export Divider
```
