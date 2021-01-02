# Label Component

A re-usable custom component wrapper around [semantic-ui-react Label](https://react.semantic-ui.com/elements/label)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Label
participant SemanticUI
    App ->> Label: Import Label;
    Label ->> SemanticUI : Import Properties
    SemanticUI ->> Label : Export Properties
    Label ->> App : Export Label
```
