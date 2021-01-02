# MenuHeader Component

A re-usable custom component wrapper around [semantic-ui-react Menu.Header](https://react.semantic-ui.com/collections/menu)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant MenuHeader
participant SemanticUI
    App ->> MenuHeader: Import MenuHeader;
    MenuHeader ->> SemanticUI : Import Properties
    SemanticUI ->> MenuHeader : Export Properties
    MenuHeader ->> App : Export MenuHeader
```
