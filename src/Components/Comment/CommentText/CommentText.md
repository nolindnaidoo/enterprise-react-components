# CommentText Component

A re-usable custom component wrapper around [semantic-ui-react Comment.Text](https://react.semantic-ui.com/views/comment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CommentText
participant SemanticUI
    App ->> CommentText: Import CommentText;
    CommentText ->> SemanticUI : Import Properties
    SemanticUI ->> CommentText : Export Properties
    CommentText ->> App : Export CommentText
```
