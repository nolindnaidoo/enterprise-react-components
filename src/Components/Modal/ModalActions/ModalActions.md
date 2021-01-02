# ModalActions Component

A re-usable custom component wrapper around [semantic-ui-react Modal.Actions](https://react.semantic-ui.com/modules/modal)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ModalActions
participant SemanticUI
    App ->> ModalActions: Import ModalActions;
    ModalActions ->> SemanticUI : Import Properties
    SemanticUI ->> ModalActions : Export Properties
    ModalActions ->> App : Export ModalActions
```
