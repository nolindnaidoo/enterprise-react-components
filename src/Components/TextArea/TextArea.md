# TextArea Component

A re-usable custom component wrapper around [semantic-ui-react TextArea](https://react.semantic-ui.com/addons/text-area)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant TextArea
participant SemanticUI
    App ->> TextArea: Import TextArea;
    TextArea ->> SemanticUI : Import Properties
    SemanticUI ->> TextArea : Export Properties
    TextArea ->> App : Export TextArea
```
