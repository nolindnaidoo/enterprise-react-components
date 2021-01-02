# FeedMeta Component

A re-usable custom component wrapper around [semantic-ui-react Feed.Meta](https://react.semantic-ui.com/views/feed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FeedMeta
participant SemanticUI
    App ->> FeedMeta: Import FeedMeta;
    FeedMeta ->> SemanticUI : Import Properties
    SemanticUI ->> FeedMeta : Export Properties
    FeedMeta ->> App : Export FeedMeta
```
