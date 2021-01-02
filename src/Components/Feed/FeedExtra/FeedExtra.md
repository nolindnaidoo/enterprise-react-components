# FeedExtra Component

A re-usable custom component wrapper around [semantic-ui-react Feed.Extra](https://react.semantic-ui.com/views/feed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FeedExtra
participant SemanticUI
    App ->> FeedExtra: Import FeedExtra;
    FeedExtra ->> SemanticUI : Import Properties
    SemanticUI ->> FeedExtra : Export Properties
    FeedExtra ->> App : Export FeedExtra
```
