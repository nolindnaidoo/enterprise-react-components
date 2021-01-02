# FeedLabel Component

A re-usable custom component wrapper around [semantic-ui-react Feed.Label](https://react.semantic-ui.com/views/feed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FeedLabel
participant SemanticUI
    App ->> FeedLabel: Import FeedLabel;
    FeedLabel ->> SemanticUI : Import Properties
    SemanticUI ->> FeedLabel : Export Properties
    FeedLabel ->> App : Export FeedLabel
```
