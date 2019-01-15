---
title: User Account
description: User Account Endpoint Documentation
order: 1
---

## Model

This model supports these fields: 

* **birthDate**: The user's date of birth.
* **alternateName**: The user's alias.
* **dashboardURL**: The user's dashboard URL.
* **email**: The user's email address.
* **familyName**: The user's last name.
* **gender**: The user's gender.
* **givenName**: The user's name.
* **name**: The user's full name.
* **profileURL**: The user's profile URL.

This model also contains these links:

* **roles**: The user's roles.
* **myOrganizations**: The organizations the user belongs to.
* **myWebSites**: The web sites the user belongs to.
* **tasksAssignedToMe**: The tasks assigned to the user.
* **tasksAssignedToMyRoles**: The tasks assigned to the user's roles.

## Example

This API supports [pagination](/docs/general/pagination.html).

In the response, the `_embedded` section contains the `Liferay:UserAccount` key. This key contains the list of users.

Here's an example of a request to this endpoint:

```bash
//display-name{request}
curl --request GET \
  --url http://localhost:8080/o/api/my-user-account
```

```json
//display-name{response}
{
    "total": 1,
    "count": 1,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/my-user-account?page=1&per_page=30"
        },
        "first": {
            "href": "http://localhost:8080/o/api/my-user-account?page=1&per_page=30"
        },
        "last": {
            "href": "http://localhost:8080/o/api/my-user-account?page=1&per_page=30"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/my-user-account"
        }
    },
    "_embedded": {
        "Liferay:UserAccount": [
            {
                "birthDate": "1970-01-01T00:00Z",
                "alternateName": "test",
                "dashboardURL": "http://localhost:8080/user/test",
                "email": "test@liferay.com",
                "familyName": "Test",
                "gender": "male",
                "givenName": "Test",
                "name": "Test Test",
                "profileURL": "http://localhost:8080/web/test",
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/my-user-account/20139"
                    },
                    "roles": {
                        "href": "http://localhost:8080/o/api/my-user-account/20139/roles"
                    },
                    "myOrganizations": {
                        "href": "http://localhost:8080/o/api/my-user-account/20139/organization"
                    },
                    "myWebSites": {
                        "href": "http://localhost:8080/o/api/my-user-account/20139/web-site"
                    },
                    "tasksAssignedToMe": {
                        "href": "http://localhost:8080/o/api/r/workflow-tasks/assigned-to-me"
                    },
                    "tasksAssignedToMyRoles": {
                        "href": "http://localhost:8080/o/api/r/workflow-tasks/assigned-to-my-roles"
                    }
                },
                "_embedded": {
                    "contactInformation": {
                        "_links": {
                            "address": {
                                "href": "http://localhost:8080/o/api/r/addresses/20006:20139"
                            },
                            "email": {
                                "href": "http://localhost:8080/o/api/r/emails/20006:20139"
                            },
                            "telephone": {
                                "href": "http://localhost:8080/o/api/r/phones/20006:20139"
                            },
                            "webUrl": {
                                "href": "http://localhost:8080/o/api/r/web-urls/20006:20139"
                            }
                        }
                    }
                }
            }
        ]
    }
}
```
When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/my-user-account/examples.html).
