# DimmerDimmable Component

A re-usable custom component wrapper around [semantic-ui-react Dimmer.Dimmable](https://react.semantic-ui.com/modules/dimmer)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant DimmerDimmable
participant SemanticUI
    App ->> DimmerDimmable: Import DimmerDimmable;
    DimmerDimmable ->> SemanticUI : Import Properties
    SemanticUI ->> DimmerDimmable : Export Properties
    DimmerDimmable ->> App : Export DimmerDimmable
```
