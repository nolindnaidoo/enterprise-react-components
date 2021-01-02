# Form Component

A re-usable custom component wrapper around [semantic-ui-react Form](https://react.semantic-ui.com/collections/form)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Form
participant SemanticUI
    App ->> Form: Import Form;
    Form ->> SemanticUI : Import Properties
    SemanticUI ->> Form : Export Properties
    Form ->> App : Export Form
```
