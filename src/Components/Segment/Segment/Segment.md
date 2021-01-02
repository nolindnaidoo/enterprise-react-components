# Segment Component

A re-usable custom component wrapper around [semantic-ui-react Segment](https://react.semantic-ui.com/elements/segment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Segment
participant SemanticUI
    App ->> Segment: Import Segment;
    Segment ->> SemanticUI : Import Properties
    SemanticUI ->> Segment : Export Properties
    Segment ->> App : Export Segment
```
