# Comment Component

A re-usable custom component wrapper around [semantic-ui-react Comment](https://react.semantic-ui.com/views/comment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Comment
participant SemanticUI
    App ->> Comment: Import Comment;
    Comment ->> SemanticUI : Import Properties
    SemanticUI ->> Comment : Export Properties
    Comment ->> App : Export Comment
```
