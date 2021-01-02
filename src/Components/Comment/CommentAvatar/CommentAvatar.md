# CommentAvatar Component

A re-usable custom component wrapper around [semantic-ui-react Comment.Avatar](https://react.semantic-ui.com/views/comment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CommentAvatar
participant SemanticUI
    App ->> CommentAvatar: Import CommentAvatar;
    CommentAvatar ->> SemanticUI : Import Properties
    SemanticUI ->> CommentAvatar : Export Properties
    CommentAvatar ->> App : Export CommentAvatar
```
