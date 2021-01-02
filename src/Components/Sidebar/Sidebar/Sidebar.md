# Sidebar Component

A re-usable custom component wrapper around [semantic-ui-react Sidebar](https://react.semantic-ui.com/modules/sidebar)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Sidebar
participant SemanticUI
    App ->> Sidebar: Import Sidebar;
    Sidebar ->> SemanticUI : Import Properties
    SemanticUI ->> Sidebar : Export Properties
    Sidebar ->> App : Export Sidebar
```
