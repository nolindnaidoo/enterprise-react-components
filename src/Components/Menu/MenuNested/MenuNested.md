# MenuNested Component

A re-usable custom component wrapper around [semantic-ui-react Menu.Menu](https://react.semantic-ui.com/collections/menu)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant MenuNested
participant SemanticUI
    App ->> MenuNested: Import MenuNested;
    MenuNested ->> SemanticUI : Import Properties
    SemanticUI ->> MenuNested : Export Properties
    MenuNested ->> App : Export MenuNested
```
