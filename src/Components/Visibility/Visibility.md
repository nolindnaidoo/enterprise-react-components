# Visibility Component

A re-usable custom component wrapper around [semantic-ui-react Visibility](https://react.semantic-ui.com/behaviors/visibility)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Visibility
participant SemanticUI
    App ->> Visibility: Import Visibility;
    Visibility ->> SemanticUI : Import Properties
    SemanticUI ->> Visibility : Export Properties
    Visibility ->> App : Export Visibility
```
