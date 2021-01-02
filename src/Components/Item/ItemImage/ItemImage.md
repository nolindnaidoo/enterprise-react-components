# ItemImage Component

A re-usable custom component wrapper around [semantic-ui-react Item.Image](https://react.semantic-ui.com/views/item)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant ItemImage
participant SemanticUI
    App ->> ItemImage: Import ItemImage;
    ItemImage ->> SemanticUI : Import Properties
    SemanticUI ->> ItemImage : Export Properties
    ItemImage ->> App : Export ItemImage
```
