# FeedEvent Component

A re-usable custom component wrapper around [semantic-ui-react Feed.Event](https://react.semantic-ui.com/views/feed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FeedEvent
participant SemanticUI
    App ->> FeedEvent: Import FeedEvent;
    FeedEvent ->> SemanticUI : Import Properties
    SemanticUI ->> FeedEvent : Export Properties
    FeedEvent ->> App : Export FeedEvent
```
