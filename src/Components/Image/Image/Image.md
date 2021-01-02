# Image Component

A re-usable custom component wrapper around [semantic-ui-react Image](https://react.semantic-ui.com/elements/image)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Image
participant SemanticUI
    App ->> Image: Import Image;
    Image ->> SemanticUI : Import Properties
    SemanticUI ->> Image : Export Properties
    Image ->> App : Export Image
```
