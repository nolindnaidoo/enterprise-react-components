# ModalDescription Component

A re-usable custom component wrapper around [semantic-ui-react Modal.Description](https://react.semantic-ui.com/modules/modal)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ModalDescription
participant SemanticUI
    App ->> ModalDescription: Import ModalDescription;
    ModalDescription ->> SemanticUI : Import Properties
    SemanticUI ->> ModalDescription : Export Properties
    ModalDescription ->> App : Export ModalDescription
```
