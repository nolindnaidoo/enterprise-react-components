# Reveal Component

A re-usable custom component wrapper around [semantic-ui-react Reveal](https://react.semantic-ui.com/elements/reveal)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Reveal
participant SemanticUI
    App ->> Reveal: Import Reveal;
    Reveal ->> SemanticUI : Import Properties
    SemanticUI ->> Reveal : Export Properties
    Reveal ->> App : Export Reveal
```
