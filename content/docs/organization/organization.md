---
mainPage: false
title: Organization
description: Organization Endpoint documentation
weight: 1
---

## The Organization Model

The following fields are currently supported:

* **name**: the name of the organization.
* **contactInformation**: the contact information of the organization.
    * **address**: the list of addresses of this organization.
    * **email**: the list of emails of this organization.
    * **telephone**: the list of telephones of this organization.
    * **webUrl**: the list of URLs of this organization.

Also this model offers the following links:
* **website**: the web site of this organization.
* **members**: the list of members of this organization.
* **subOrganization**: the list of sub organizations of this organization.


## My Organization Collection

This is an example of the request: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/p/organization?page=1&per_page=1 \
  --header 'Accept: application/hal+json'
```

The response in `json HAL` format will contain inside the `_embedded` section, a list of web sites under the key `WebSite`.

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

When navigating through the list of entities, the link to each entity can be found with the rel `self`.

You can found more examples in the following [link](/docs/organization/examples.html).
