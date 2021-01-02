# Rating Component

A re-usable custom component wrapper around [semantic-ui-react Rating](https://react.semantic-ui.com/modules/rating)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Rating
participant SemanticUI
    App ->> Rating: Import Rating;
    Rating ->> SemanticUI : Import Properties
    SemanticUI ->> Rating : Export Properties
    Rating ->> App : Export Rating
```
