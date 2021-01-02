# Embed Component

A re-usable custom component wrapper around [semantic-ui-react Embed](https://react.semantic-ui.com/modules/embed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Embed
participant SemanticUI
    App ->> Embed: Import Embed;
    Embed ->> SemanticUI : Import Properties
    SemanticUI ->> Embed : Export Properties
    Embed ->> App : Export Embed
```
