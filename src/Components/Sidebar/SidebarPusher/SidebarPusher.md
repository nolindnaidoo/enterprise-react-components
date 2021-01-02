# SidebarPusher Component

A re-usable custom component wrapper around [semantic-ui-react Sidebar.Pusher](https://react.semantic-ui.com/modules/sidebar)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant SidebarPusher
participant SemanticUI
    App ->> SidebarPusher: Import SidebarPusher;
    SidebarPusher ->> SemanticUI : Import Properties
    SemanticUI ->> SidebarPusher : Export Properties
    SidebarPusher ->> App : Export SidebarPusher
```
