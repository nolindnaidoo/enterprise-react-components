# Loader Component

A re-usable custom component wrapper around [semantic-ui-react Loader](https://react.semantic-ui.com/elements/loader)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Loader
participant SemanticUI
    App ->> Loader: Import Loader;
    Loader ->> SemanticUI : Import Properties
    SemanticUI ->> Loader : Export Properties
    Loader ->> App : Export Loader
```
