# Denver Nuggets roster API

🏀 A simple RESTful API for the Denver Nuggets NBA team.

📑 The current version of the API lives at `https://path.to.api/v1/api`

⚡ API last updated on: `DD/MM/YYYY`

-----

### *nuggets* resource

📥  `https://path.to.api/v1/api/nuggets`

#### Status codes

All endpoints will return the same status codes upon success or error:

|Response|Code|
|---|---|
|Success|200|
|Error|400|

-----

#### Endpoints quick glance

|#|Method|Endpoint|Description|Access|
|---|---|---|---|---|
|1|`[GET]`|https://path.to.api/v1/api/nuggets/roster|Retrieve a list of all players|✅|
|2|`[GET]`|https://path.to.api/v1/api/nuggets/roster/{playerID}|Retrieve one player|✅|
|3|`[POST]`|https://path.to.api/v1/api/nuggets/roster|Add new player to roster|🔐|
|4|`[PATCH]`|https://path.to.api/v1/api/nuggets/roster/{playerID}|Amend one player|🔐|
|5|`[DELETE]`|https://path.to.api/v1/api/nuggets/roster/{playerID}|Delete player from roster|🔐|

-----

#### Endpoints in depth

#### #1 - `[GET]` Retrieve a list of all players

📥 https://path.to.api/v1/api/nuggets

> List all players in Nuggets roster. Returns an array of data with multiple player objects.

##### Endpoint response:

|Key|Type|
|---|---|
|data|Array (of player objects)|

##### Example response:

```json
{
  "data": [
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

-----