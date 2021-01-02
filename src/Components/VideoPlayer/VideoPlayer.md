# VideoPlayer Component

A re-usable custom component wrapper around [Video-React](https://video-react.js.org)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant VideoPlayer
participant VideoReact
    App ->> VideoPlayer: Import VideoPlayer;
    VideoPlayer ->> VideoReact : Import Properties
    VideoReact ->> VideoPlayer : Export Properties
    VideoPlayer ->> App : Export VideoPlayer
```
