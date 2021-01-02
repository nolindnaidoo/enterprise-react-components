# FeedSummary Component

A re-usable custom component wrapper around [semantic-ui-react Feed.Summary](https://react.semantic-ui.com/views/feed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FeedSummary
participant SemanticUI
    App ->> FeedSummary: Import FeedSummary;
    FeedSummary ->> SemanticUI : Import Properties
    SemanticUI ->> FeedSummary : Export Properties
    FeedSummary ->> App : Export FeedSummary
```
