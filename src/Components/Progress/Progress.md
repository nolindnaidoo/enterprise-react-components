# Progress Component

A re-usable custom component wrapper around [semantic-ui-react Progress](https://react.semantic-ui.com/modules/progress)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Progress
participant SemanticUI
    App ->> Progress: Import Progress;
    Progress ->> SemanticUI : Import Properties
    SemanticUI ->> Progress : Export Properties
    Progress ->> App : Export Progress
```
