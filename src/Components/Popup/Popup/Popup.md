# Popup Component

A re-usable custom component wrapper around [semantic-ui-react Popup](https://react.semantic-ui.com/modules/popup)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Popup
participant SemanticUI
    App ->> Popup: Import Popup;
    Popup ->> SemanticUI : Import Properties
    SemanticUI ->> Popup : Export Properties
    Popup ->> App : Export Popup
```
