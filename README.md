# Denver Nuggets roster API

🏀 A simple RESTful API for the Denver Nuggets NBA team.

📑 The current version of the API lives at `https://nuggets-api.herokuapp.com/api/v1`

⚡ API last updated on: `25/01/2018`

---

### _roster_ resource

📥 `https://nuggets-api.herokuapp.com/api/v1/roster`

| #                                            | Method     | Endpoint       | Description                    | Access |
| -------------------------------------------- | ---------- | -------------- | ------------------------------ | ------ |
| [1](#1---get-retrieve-a-list-of-all-players) | `[GET]`    | /roster        | Retrieve a list of all players | ✅     |
| [2](#2---get-retrieve-one-player)            | `[GET]`    | /roster/{\_id} | Retrieve one player            | ✅     |
| [3](#3---post-add-a-new-player)              | `[POST]`   | /roster        | Add new player to roster       | 🔐     |
| [4](#4---patch-amend-one-player)             | `[PATCH]`  | /roster/{\_id} | Amend one player               | 🔐     |
| [5](#5---delete-delete-player-from-roster)   | `[DELETE]` | /roster/{\_id} | Delete player from roster      | 🔐     |

---

#### 1 - `[GET]` Retrieve a list of all players

📥 `https://nuggets-api.herokuapp.com/api/v1/roster`

> List all players in Nuggets roster. Returns an array of data with multiple player objects.

##### Endpoint response:

| Key     | Type                                           |
| ------- | ---------------------------------------------- |
| data    | Array (of [`Player`](#-player-object) objects) |
| success | Boolean                                        |
| message | String                                         |

##### ⭐ `Player` object:

| Key    | Type   |
| ------ | ------ |
| \_id   | String |
| name   | String |
| jersey | Number |

##### ✅ Example success response:

> status: `200`

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
  ],
  "success": true,
  "message": "Roster returned"
}
```

##### 🔴 Example error response:

> status: `400`

```json
{
  "data": [],
  "success": false,
  "message": "Cannot return roster"
}
```

---

#### 2 - `[GET]` Retrieve one player

📥 `https://nuggets-api.herokuapp.com/api/v1/roster/{_id}`

> Returns a data object for one player by `_id`.

##### Endpoint response:

| Key     | Type                                          |
| ------- | --------------------------------------------- |
| data    | Object ([see Player object](#-player-object)) |
| success | Boolean                                       |
| message | String                                        |

##### ✅ Example success response:

> status: `200`

```json
{
  "data": {
    "_id": "5c4ad79942a9d34d9ed9d28d",
    "name": "Jamal Murray",
    "jersey": 27
  },
  "success": true,
  "message": "Player returned"
}
```

##### 🔴 Example error response:

> status: `400`

```json
{
  "data": {},
  "success": false,
  "message": "Player does not exist"
}
```

---

#### 3 - `[POST]` Add a new player

📤 🔐 `https://nuggets-api.herokuapp.com/api/v1/roster`

> Add a new player object to the roster

##### Example request:

```json
{
  "name": "Jamal Murray",
  "jersey": 27
}
```

##### Endpoint response:

| Key     | Type                                          |
| ------- | --------------------------------------------- |
| data    | Object ([see Player object](#-player-object)) |
| success | Boolean                                       |
| message | String                                        |

##### ✅ Example success response:

> status: `200`

```json
{
  "data": {
    "_id": "5c4ad79942a9d34d9ed9d28d",
    "name": "Jamal Murray",
    "jersey": 27
  },
  "success": true,
  "message": "Player added to roster"
}
```

##### 🔴 Example error response:

> status: `400`

```json
{
  "data": {},
  "success": false,
  "message": "Player cannot be added to roster"
}
```

---

#### 4 - `[PATCH]` Amend one player

📤 🔐 `https://nuggets-api.herokuapp.com/api/v1/roster/{_id}`

> Amend an existing player by `_id`. Uses `[PATCH]` so only the request fields will be updated, not the entire object.

##### Example request:

```json
{
  "jersey": 15
}
```

##### Endpoint response:

| Key     | Type                                          |
| ------- | --------------------------------------------- |
| data    | Object ([see Player object](#-player-object)) |
| success | Boolean                                       |
| message | String                                        |

##### ✅ Example success response:

> status: `200`

```json
{
  "data": {
    "_id": "5c4ad79942a9d34d9ed9d28d",
    "name": "Jamal Murray",
    "jersey": 15
  },
  "success": true,
  "message": "Player updated"
}
```

##### 🔴 Example error response:

> status: `400`

```json
{
  "data": {},
  "success": false,
  "message": "Player cannot be updated or does not exist"
}
```

---

#### 5 - `[DELETE]` Delete player from roster

📤 🔐 `https://nuggets-api.herokuapp.com/api/v1/roster/{_id}`

> Delete an existing player by `_id`.

##### Endpoint response:

| Key     | Type                                          |
| ------- | --------------------------------------------- |
| data    | Object ([see Player object](#-player-object)) |
| success | Boolean                                       |
| message | String                                        |

##### ✅ Example success response:

> status: `200`

```json
{
  "data": {
    "_id": "5c4ad79942a9d34d9ed9d28d",
    "name": "Jamal Murray",
    "jersey": 27
  },
  "sucess": true,
  "message": "Player deleted from roster"
}
```

##### 🔴 Example error response:

> status: `400`

```json
{
  "data": {},
  "success": false,
  "message": "Player cannot be removed or does not exist"
}
```
