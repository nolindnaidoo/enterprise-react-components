# CommentAction Component

A re-usable custom component wrapper around [semantic-ui-react Comment.Action](https://react.semantic-ui.com/views/comment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CommentAction
participant SemanticUI
    App ->> CommentAction: Import CommentAction;
    CommentAction ->> SemanticUI : Import Properties
    SemanticUI ->> CommentAction : Export Properties
    CommentAction ->> App : Export CommentAction
```
