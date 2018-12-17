---
title: Website
description: Website Endpoint documentation
weight: 1
---

## Model

The following fields are currently supported for this model:

* **name**: The website's name.
* **availableLanguages**: The website's available languages.
* **publicUrl**: The website's public URL.
* **privateUrl**: The website's private URL.
* **membershipType**: The website's membership type.

This model also has the following links:

* **contentSpace**: The content space for the website's content.
* **creator**: The user who created the website.
* **members**: The website's members.
* **embeddedWebPages**: The website's embedded web pages.
* **webSite** : The website's child sites. 

## Example

Here's an example of a request to this endpoint: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/web-site?page=1&per_page=1 \
  --header 'Accept: application/hal+json'
```

In a JSON-HAL formatted response, the `_embedded` section contains the `WebSite` key. This key contains the websites: 

```json
{
    "total": 18,
    "count": 1,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/web-site?page=1&per_page=1"
        },
        "first": {
            "href": "http://localhost:8080/o/api/web-site?page=1&per_page=1"
        },
        "last": {
            "href": "http://localhost:8080/o/api/web-site?page=18&per_page=1"
        },
        "next": {
            "href": "http://localhost:8080/o/api/web-site?page=2&per_page=1"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/web-site"
        }
    },
    "_embedded": {
        "WebSite": [
            {
                "name": "Liferay",
                "membershipType": "open",
                "publicUrl": "http://localhost:8080/web/guest",
                "availableLanguages": [
                    "en-US"
                ],
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/web-site/20126"
                    },
                    "contentSpace": {
                        "href": "http://localhost:8080/o/api/content-space/20126"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/user-account/20103"
                    },
                    "members": {
                        "href": "http://localhost:8080/o/api/web-site/20126/user-account"
                    },
                    "embeddedWebPages": {
                        "href": "http://localhost:8080/o/api/web-site/20126/embedded-web-page"
                    },
                    "webSites": {
                        "href": "http://localhost:8080/o/api/r/web-site/20126"
                    }
                }
            }
        ]
    }
}
```

When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/web-site/examples.html).
