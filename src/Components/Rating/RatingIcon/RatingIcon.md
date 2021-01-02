# RatingIcon Component

A re-usable custom component wrapper around [semantic-ui-react Rating.Icon](https://react.semantic-ui.com/modules/rating)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant RatingIcon
participant SemanticUI
    App ->> RatingIcon: Import RatingIcon;
    RatingIcon ->> SemanticUI : Import Properties
    SemanticUI ->> RatingIcon : Export Properties
    RatingIcon ->> App : Export RatingIcon
```
