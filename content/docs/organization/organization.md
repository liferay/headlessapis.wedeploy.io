---
mainPage: false
title: Organization
description: Organization Endpoint documentation
weight: 1
---

## Model

The following fields are currently supported for this model: 

* **name**: The organization's name.
* **contact information**: The organization's contact information.
    * **address**: The organization's addresses.
    * **email**: The organization's email addresses.
    * **telephone**: The organization's phone numbers.
    * **webUrl**: The organization's URLs.

This model also has the following links:

* **website**: The organization's Site.
* **members**: The organization's members.
* **subOrganization**: The organization's sub-organizations.


## Example

Here's an example of a request to this endpoint: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/p/organization?page=1&per_page=1 \
  --header 'Accept: application/hal+json'
```

In a JSON-HAL formatted response, the `_embedded` section contains the `Organization` key. This key contains the organizations: 

```json
{
    "total": 1,
    "count": 1,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/p/organization?page=1&per_page=30"
        },
        "first": {
            "href": "http://localhost:8080/o/api/p/organization?page=1&per_page=30"
        },
        "last": {
            "href": "http://localhost:8080/o/api/p/organization?page=1&per_page=30"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/p/organization"
        }
    },
    "_embedded": {
        "Organization": [
            {
                "name": "Liferay, Inc.",
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/p/organization/20149"
                    },
                    "website": {
                        "href": "http://localhost:8080/o/api/p/web-site/20150"
                    },
                    "members": {
                        "href": "http://localhost:8080/o/api/p/organization/20149/user-account"
                    },
                    "subOrganization": {
                        "href": "http://localhost:8080/o/api/p/r/organization/20149"
                    }
                },
                "_embedded": {
                    "contactInformation": {
                        "_links": {
                            "address": {
                                "href": "http://localhost:8080/o/api/p/r/addresses/20004:20149"
                            },
                            "email": {
                                "href": "http://localhost:8080/o/api/p/r/emails/20004:20149"
                            },
                            "telephone": {
                                "href": "http://localhost:8080/o/api/p/r/phones/20004:20149"
                            },
                            "webUrl": {
                                "href": "http://localhost:8080/o/api/p/r/web-urls/20004:20149"
                            }
                        }
                    },
                    "services": {
                        "total": 0
                    }
                }
            }
        ]
    }
}
```

When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/organization/examples.html). 
