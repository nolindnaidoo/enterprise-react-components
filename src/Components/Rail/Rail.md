# Rail Component

A re-usable custom component wrapper around [semantic-ui-react Rail](https://react.semantic-ui.com/elements/rail)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Rail
participant SemanticUI
    App ->> Rail: Import Rail;
    Rail ->> SemanticUI : Import Properties
    SemanticUI ->> Rail : Export Properties
    Rail ->> App : Export Rail
```
