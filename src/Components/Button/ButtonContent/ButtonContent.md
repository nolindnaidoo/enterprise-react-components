# ButtonContent Component

A re-usable custom component wrapper around [semantic-ui-react Button.Content](https://react.semantic-ui.com/elements/button), content sub-component of Button.

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ButtonContent
participant SemanticUI
    App ->> ButtonContent: Import ButtonContent;
    ButtonContent ->> SemanticUI : Import Properties
    SemanticUI ->> ButtonContent : Export Properties
    ButtonContent ->> App : Export ButtonContent
```
