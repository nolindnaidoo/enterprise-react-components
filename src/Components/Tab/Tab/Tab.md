# Tab Component

A re-usable custom component wrapper around [semantic-ui-react Tab](https://react.semantic-ui.com/modules/tab)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Tab
participant SemanticUI
    App ->> Tab: Import Tab;
    Tab ->> SemanticUI : Import Properties
    SemanticUI ->> Tab : Export Properties
    Tab ->> App : Export Tab
```
