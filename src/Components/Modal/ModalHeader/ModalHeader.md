# ModalHeader Component

A re-usable custom component wrapper around [semantic-ui-react Modal.Header](https://react.semantic-ui.com/modules/modal)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ModalHeader
participant SemanticUI
    App ->> ModalHeader: Import ModalHeader;
    ModalHeader ->> SemanticUI : Import Properties
    SemanticUI ->> ModalHeader : Export Properties
    ModalHeader ->> App : Export ModalHeader
```
