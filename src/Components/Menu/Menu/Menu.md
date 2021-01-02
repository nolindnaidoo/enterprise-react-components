# Menu Component

A re-usable custom component wrapper around [semantic-ui-react Menu](https://react.semantic-ui.com/collections/menu)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Menu
participant SemanticUI
    App ->> Menu: Import Menu;
    Menu ->> SemanticUI : Import Properties
    SemanticUI ->> Menu : Export Properties
    Menu ->> App : Export Menu
```
