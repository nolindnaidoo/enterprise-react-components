# CommentAuthor Component

A re-usable custom component wrapper around [semantic-ui-react Comment.Author](https://react.semantic-ui.com/views/comment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CommentAuthor
participant SemanticUI
    App ->> CommentAuthor: Import CommentAuthor;
    CommentAuthor ->> SemanticUI : Import Properties
    SemanticUI ->> CommentAuthor : Export Properties
    CommentAuthor ->> App : Export CommentAuthor
```
