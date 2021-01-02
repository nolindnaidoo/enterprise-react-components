# FeedContent Component

A re-usable custom component wrapper around [semantic-ui-react Feed.Content](https://react.semantic-ui.com/views/feed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FeedContent
participant SemanticUI
    App ->> FeedContent: Import FeedContent;
    FeedContent ->> SemanticUI : Import Properties
    SemanticUI ->> FeedContent : Export Properties
    FeedContent ->> App : Export FeedContent
```
