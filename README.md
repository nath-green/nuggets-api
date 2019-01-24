# Denver Nuggets roster API

🏀 A simple RESTful API for the Denver Nuggets NBA team.

The current version of the API lives at `https://path.to.api/v1/api`

## `nuggets` resource

URL: `https://path.to.api/v1/api/nuggets`

### Endpoints quick glance:

 `[GET]` /roster
 `[GET]` /roster/{playerID}
 `[POST]` /roster

### Endpoints in depth

#### `[GET]` List all players in Nuggets roster

Endpoint: `https://path.to.api/v1/api/nuggets`

Response: X

```json
{
  data: [
    {
      name: "Jamal Murray",
      jersey: 27
    },
    {
      name: "Nikola Jokic",
      jersey: 15
    }
    ...
  ]
}
```