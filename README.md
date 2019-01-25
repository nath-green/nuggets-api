# Denver Nuggets roster API

🏀 A simple RESTful API for the Denver Nuggets NBA team.

📑 The current version of the API lives at `https://nuggets-api.herokuapp.com/api/v1`

⚡ API last updated on: `25/01/2018`

---

### _roster_ resource

📥 `https://nuggets-api.herokuapp.com/api/v1/roster`

#### Status codes

All endpoints will return the same status codes upon success or error:

| Response | Code |
| -------- | ---- |
| Success  | 200  |
| Error    | 400  |

---

#### Endpoints quick glance

| #   | Method     | Endpoint           | Description                    | Access |
| --- | ---------- | ------------------ | ------------------------------ | ------ |
| 1   | `[GET]`    | /roster            | Retrieve a list of all players | ✅     |
| 2   | `[GET]`    | /roster/{playerID} | Retrieve one player            | ✅     |
| 3   | `[POST]`   | /roster            | Add new player to roster       | 🔐     |
| 4   | `[PATCH]`  | /roster/{playerID} | Amend one player               | 🔐     |
| 5   | `[DELETE]` | /roster/{playerID} | Delete player from roster      | 🔐     |

---

#### Endpoints in depth

#### #1 - `[GET]` Retrieve a list of all players

📥 `https://nuggets-api.herokuapp.com/api/v1/roster`

> List all players in Nuggets roster. Returns an array of data with multiple player objects.

##### Endpoint response:

| Key  | Type                      |
| ---- | ------------------------- |
| data | Array (of player objects) |

##### Example response:

```json
{
  "data": [
    {
      "_id": "5c4ad79942a9d34d9ed9d28d",
      "name": "Jamal Murray",
      "jersey": 27
    },
    {
      "_id": "5c4ae2b42845dd00048b576e",
      "name": "Nikola Jokic",
      "jersey": 15
    }
  ]
}
```

---

#### #2 - `[GET]` Retrieve one player

📥 `https://nuggets-api.herokuapp.com/api/v1/roster/{playerID}`

> Returns a data object for one player by `_id`.

##### Endpoint response:

| Key    | Type   |
| ------ | ------ |
| name   | String |
| jersey | Number |

##### ✅ Example success response:

```json
{
  "data": {
    "name": "Jamal Murray",
    "jersey": 27
  }
}
```

##### 🔴 Example error response:

```json
{
  "success": false,
  "message": "That ID does not exist."
}
```

---

#### #3 - `[POST]` Add a new player

📥 `https://nuggets-api.herokuapp.com/api/v1/roster`

> Add a new player object to the roster

##### Endpoint response:

| Key    | Type   |
| ------ | ------ |
| name   | String |
| jersey | Number |

##### Example request:

```json
{
  "name": "Jamal Murray",
  "jersey": 27
}
```

---
