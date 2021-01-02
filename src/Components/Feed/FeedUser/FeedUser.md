# FeedUser Component

A re-usable custom component wrapper around [semantic-ui-react Feed.User](https://react.semantic-ui.com/views/feed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FeedUser
participant SemanticUI
    App ->> FeedUser: Import FeedUser;
    FeedUser ->> SemanticUI : Import Properties
    SemanticUI ->> FeedUser : Export Properties
    FeedUser ->> App : Export FeedUser
```
