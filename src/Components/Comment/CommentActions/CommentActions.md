# CommentActions Component

A re-usable custom component wrapper around [semantic-ui-react Comment.Actions](https://react.semantic-ui.com/views/comment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CommentActions
participant SemanticUI
    App ->> CommentActions: Import CommentActions;
    CommentActions ->> SemanticUI : Import Properties
    SemanticUI ->> CommentActions : Export Properties
    CommentActions ->> App : Export CommentActions
```
