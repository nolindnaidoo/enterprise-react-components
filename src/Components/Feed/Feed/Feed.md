# Feed Component

A re-usable custom component wrapper around [semantic-ui-react Feed](https://react.semantic-ui.com/views/feed)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Feed
participant SemanticUI
    App ->> Feed: Import Feed;
    Feed ->> SemanticUI : Import Properties
    SemanticUI ->> Feed : Export Properties
    Feed ->> App : Export Feed
```
