# CommentMetadata Component

A re-usable custom component wrapper around [semantic-ui-react Comment.Metadata](https://react.semantic-ui.com/views/comment)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant CommentMetadata
participant SemanticUI
    App ->> CommentMetadata: Import CommentMetadata;
    CommentMetadata ->> SemanticUI : Import Properties
    SemanticUI ->> CommentMetadata : Export Properties
    CommentMetadata ->> App : Export CommentMetadata
```
