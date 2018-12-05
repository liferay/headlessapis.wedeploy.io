---
title: Web Site
description: Web Site Endpoint documentation
weight: 1
---

## The Web Site Model

The following fields are currently supported:

* **name**: the name of the web site.
* **availableLanguages**: available languages of the web site.
* **publicUrl**: the website's public URL.
* **membershipType**: the membership type of the web site.

Also this model offers the following links:

* **contentSpace**: the content space this web site belongs to.
* **creator**: the user creator of this web site.
* **members**: the list of users that belongs to this web site.
* **embeddedWebPages**: the list of the embedded web pages that belongs to this web site.
* **webSite** : the site that this web site belongs to. 

## My Web Site Collection

This is an example of the request: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/p/web-site?page=1&per_page=1 \
  --header 'Accept: application/hal+json'
```

The response in `json HAL` format will contain inside the `_embedded` section, a list of web sites under the key `WebSite`.

```json
{
    "total": 18,
    "count": 1,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/p/web-site?page=1&per_page=1"
        },
        "first": {
            "href": "http://localhost:8080/o/api/p/web-site?page=1&per_page=1"
        },
        "last": {
            "href": "http://localhost:8080/o/api/p/web-site?page=18&per_page=1"
        },
        "next": {
            "href": "http://localhost:8080/o/api/p/web-site?page=2&per_page=1"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/p/web-site"
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
                        "href": "http://localhost:8080/o/api/p/web-site/20126"
                    },
                    "contentSpace": {
                        "href": "http://localhost:8080/o/api/p/content-space/20126"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/p/user-account/20103"
                    },
                    "members": {
                        "href": "http://localhost:8080/o/api/p/web-site/20126/user-account"
                    },
                    "embeddedWebPages": {
                        "href": "http://localhost:8080/o/api/p/web-site/20126/embedded-web-page"
                    },
                    "webSites": {
                        "href": "http://localhost:8080/o/api/p/r/web-site/20126"
                    }
                }
            }
        ]
    }
}
```

When navigating through the list of entities, the link to each entity can be found with the rel `self`.

You can found more examples in the following [link](/docs/web-site/examples.html).
