# StatisticLabel Component

A re-usable custom component wrapper around [semantic-ui-react Statistic.Label](https://react.semantic-ui.com/views/statistic)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant StatisticLabel
participant SemanticUI
    App ->> StatisticLabel: Import StatisticLabel;
    StatisticLabel ->> SemanticUI : Import Properties
    SemanticUI ->> StatisticLabel : Export Properties
    StatisticLabel ->> App : Export StatisticLabel
```
