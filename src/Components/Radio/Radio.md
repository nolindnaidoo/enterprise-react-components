# Radio Component

A re-usable custom component wrapper around [semantic-ui-react Radio](https://react.semantic-ui.com/addons/radio)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Radio
participant SemanticUI
    App ->> Radio: Import Radio;
    Radio ->> SemanticUI : Import Properties
    SemanticUI ->> Radio : Export Properties
    Radio ->> App : Export Radio
```
