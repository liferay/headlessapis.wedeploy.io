---
title: Roles
description: Roles Endpoint Documentation
order: 1
---

## Model

This model supports these fields:

* **name**: The role's name.
* **dateCreated**: The role's creation date.
* **dateModified**: The role's modification date.
* **roleType**: The role's type.
* **availableLanguages**: The role's available languages.

This model also has the following links:

* **creator**: The user who created this role.

## Example

This API supports [pagination](/docs/general/pagination.html).

In the response, the `_embedded` section contains the `Role` key. This key contains the roles.

Here's an example of a request to this endpoint: 

```bash
//display-name{request}
curl --request GET \
  --url http://localhost:8080/o/api/roles?page=1&per_page=1
```

```json
//display-name{response}
{
    "total": 14,
    "count": 3,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/roles?page=1&per_page=1"
        },
        "first": {
            "href": "http://localhost:8080/o/api/roles?page=1&per_page=1"
        },
        "last": {
            "href": "http://localhost:8080/o/api/roles?page=5&per_page=1"
        },
        "next": {
            "href": "http://localhost:8080/o/api/roles?page=2&per_page=1"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/roles"
        }
    },
    "_embedded": {
        "Role": [
            {
                "description": "Administrators are super users who can do anything.",
                "dateCreated": "2018-12-03T14:21Z",
                "dateModified": "2018-12-03T14:21Z",
                "name": "Administrator",
                "roleType": "regular",
                "availableLanguages": [
                    "en-US"
                ],
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/roles/20105"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/user-account/20103"
                    }
                }
            }
         ]
    }
}
```

When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/roles/examples.html).
