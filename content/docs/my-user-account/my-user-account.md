---
title: My User Account
description: My User Account Endpoint Documentation
order: 1
---

## Model

This model supports these fields: 

* **birthDate**: The user's date of birth.
* **alternateName**: The user's alias.
* **dashboardURL**: The user's dashboard URL.
* **email**: The user's email address.
* **familyName**: The user's last name.
* **givenName**: The user's name.
* **name**: The user's full name.
* **profileURL**: The user's profile URL.

This model also contains these links:

* **roles**: The user's roles.
* **myOrganizations**: The organizations the user belongs to.
* **myWebSites**: The web sites the user belongs to.
* **tasksAssignedToMe**: The tasks assigned to the user.
* **tasksAssignedToMyRoles**: The tasks assigned to the user's roles.

And this model also contains contact information:

* **address**: The user's postal addresses.
* **email**: The user's email addresses.
* **telephone**: The user's telephone numbers.
* **webUrl**: The user's URLs.

## Example

In the response, the `_embedded` section contains the `Liferay:UserAccount` key. This key contains the logged-in user.

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
                "alternateName": "katew",
                "dashboardURL": "http://localhost:8080/user/katew",
                "email": "kate.williams@liferay.com",
                "familyName": "Williams",
                "givenName": "Kate",
                "jobTitle": "Software Engineer",
                "name": "Kate Williams",
                "profileURL": "http://localhost:8080/web/katew",
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/my-user-account/45101"
                    },
                    "roles": {
                        "href": "http://localhost:8080/o/api/my-user-account/45101/roles"
                    },
                    "myOrganizations": {
                        "href": "http://localhost:8080/o/api/my-user-account/45101/organization"
                    },
                    "myWebSites": {
                        "href": "http://localhost:8080/o/api/my-user-account/45101/web-site"
                    },
                    "tasksAssignedToMe": {
                        "href": "http://localhost:8080/o/api/workflow-tasks/reusable-workflow-task-identifier/assigned-to-me"
                    },
                    "tasksAssignedToMyRoles": {
                        "href": "http://localhost:8080/o/api/workflow-tasks/reusable-workflow-task-identifier/assigned-to-my-roles"
                    }
                },
                "_embedded": {
                    "contactInformation": {
                        "_links": {
                            "address": {
                                "href": "http://localhost:8080/o/api/addresses/class-name-class-p-k/20006:45101"
                            },
                            "email": {
                                "href": "http://localhost:8080/o/api/emails/class-name-class-p-k/20006:45101"
                            },
                            "telephone": {
                                "href": "http://localhost:8080/o/api/phones/class-name-class-p-k/20006:45101"
                            },
                            "webUrl": {
                                "href": "http://localhost:8080/o/api/web-urls/class-name-class-p-k/20006:45101"
                            }
                        }
                    }
                }
            }
        ]
    }
}
```

Note that the `self` rel contains the link to the entity.

You can find more examples [here](/docs/my-user-account/examples.html).
