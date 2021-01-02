# SegmentGroup Component

A re-usable custom component wrapper around [semantic-ui-react Segment.Group](https://react.semantic-ui.com/elements/segment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant SegmentGroup
participant SemanticUI
    App ->> SegmentGroup: Import SegmentGroup;
    SegmentGroup ->> SemanticUI : Import Properties
    SemanticUI ->> SegmentGroup : Export Properties
    SegmentGroup ->> App : Export SegmentGroup
```
