# Modal Component

A re-usable custom component wrapper around [semantic-ui-react Modal](https://react.semantic-ui.com/modules/modal)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Modal
participant SemanticUI
    App ->> Modal: Import Modal;
    Modal ->> SemanticUI : Import Properties
    SemanticUI ->> Modal : Export Properties
    Modal ->> App : Export Modal
```
