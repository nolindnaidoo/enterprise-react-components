# Confirm Component

A re-usable custom component wrapper around [semantic-ui-react Confirm](https://react.semantic-ui.com/addons/confirm)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Confirm
participant SemanticUI
    App ->> Confirm: Import Confirm;
    Confirm ->> SemanticUI : Import Properties
    SemanticUI ->> Confirm : Export Properties
    Confirm ->> App : Export Confirm
```
