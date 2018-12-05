---
mainPage: false
title: Role
description: Role Endpoint documentation
weight: 1
---

## The Organization Model

The following fields are currently supported:

* **name**: the name of the role.
* **dateCreated**: the creation date of the role.
* **dateModified**: the modification date of the role.
* **roleType**: the type date of the role.
* **availableLanguages**: available languages of the role.

Also this model offers the following links:

* **creator**: the user creator of this role.


## Role Collection

This is an example of the request: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/p/roles?page=1&per_page=1 \
  --header 'Accept: application/hal+json'
```

The response in `json HAL` format will contain inside the `_embedded` section, a list of web sites under the key `Role`.

```json
{
    "total": 14,
    "count": 3,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/p/roles?page=1&per_page=1"
        },
        "first": {
            "href": "http://localhost:8080/o/api/p/roles?page=1&per_page=1"
        },
        "last": {
            "href": "http://localhost:8080/o/api/p/roles?page=5&per_page=1"
        },
        "next": {
            "href": "http://localhost:8080/o/api/p/roles?page=2&per_page=1"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/p/roles"
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
                        "href": "http://localhost:8080/o/api/p/roles/20105"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/p/user-account/20103"
                    }
                }
            }
         ]
    }
}
```

When navigating through the list of entities, the link to each entity can be found with the rel `self`.

You can found more examples in the following [link](/docs/roles/examples.html).
