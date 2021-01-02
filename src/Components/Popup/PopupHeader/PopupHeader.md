# PopupHeader Component

A re-usable custom component wrapper around [semantic-ui-react Popup.Header](https://react.semantic-ui.com/modules/popup)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant PopupHeader
participant SemanticUI
    App ->> PopupHeader: Import PopupHeader;
    PopupHeader ->> SemanticUI : Import Properties
    SemanticUI ->> PopupHeader : Export Properties
    PopupHeader ->> App : Export PopupHeader
```
