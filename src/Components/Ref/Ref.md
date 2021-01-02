# Ref Component

A re-usable custom component wrapper around [semantic-ui-react Ref](https://react.semantic-ui.com/addons/ref)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Ref
participant SemanticUI
    App ->> Ref: Import Ref;
    Ref ->> SemanticUI : Import Properties
    SemanticUI ->> Ref : Export Properties
    Ref ->> App : Export Ref
```
