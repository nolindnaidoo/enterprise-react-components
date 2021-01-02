# CommentContent Component

A re-usable custom component wrapper around [semantic-ui-react Comment.Content](https://react.semantic-ui.com/views/comment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CommentContent
participant SemanticUI
    App ->> CommentContent: Import CommentContent;
    CommentContent ->> SemanticUI : Import Properties
    SemanticUI ->> CommentContent : Export Properties
    CommentContent ->> App : Export CommentContent
```
