# Dimmer Component

A re-usable custom component wrapper around [semantic-ui-react Dimmer](https://react.semantic-ui.com/modules/dimmer)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Dimmer
participant SemanticUI
    App ->> Dimmer: Import Dimmer;
    Dimmer ->> SemanticUI : Import Properties
    SemanticUI ->> Dimmer : Export Properties
    Dimmer ->> App : Export Dimmer
```
