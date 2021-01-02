# CommentGroup Component

A re-usable custom component wrapper around [semantic-ui-react Comment.Group](https://react.semantic-ui.com/views/comment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CommentGroup
participant SemanticUI
    App ->> CommentGroup: Import CommentGroup;
    CommentGroup ->> SemanticUI : Import Properties
    SemanticUI ->> CommentGroup : Export Properties
    CommentGroup ->> App : Export CommentGroup
```
