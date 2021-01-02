# FeedLike Component

A re-usable custom component wrapper around [semantic-ui-react Feed.Like](https://react.semantic-ui.com/views/feed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FeedLike
participant SemanticUI
    App ->> FeedLike: Import FeedLike;
    FeedLike ->> SemanticUI : Import Properties
    SemanticUI ->> FeedLike : Export Properties
    FeedLike ->> App : Export FeedLike
```
