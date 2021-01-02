# Button Component

A re-usable custom component wrapper around [semantic-ui-react Button](https://react.semantic-ui.com/elements/button)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Button
participant SemanticUI
    App ->> Button: Import Button;
    Button ->> SemanticUI : Import Properties
    SemanticUI ->> Button : Export Properties
    Button ->> App : Export Button
```
