# ItemGroup Component

A re-usable custom component wrapper around [semantic-ui-react Item.Group](https://react.semantic-ui.com/views/item)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ItemGroup
participant SemanticUI
    App ->> ItemGroup: Import ItemGroup;
    ItemGroup ->> SemanticUI : Import Properties
    SemanticUI ->> ItemGroup : Export Properties
    ItemGroup ->> App : Export ItemGroup
```
