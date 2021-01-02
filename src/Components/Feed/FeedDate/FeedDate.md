# FeedDate Component

A re-usable custom component wrapper around [semantic-ui-react Feed.Date](https://react.semantic-ui.com/views/feed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant FeedDate
participant SemanticUI
    App ->> FeedDate: Import FeedDate;
    FeedDate ->> SemanticUI : Import Properties
    SemanticUI ->> FeedDate : Export Properties
    FeedDate ->> App : Export FeedDate
```
