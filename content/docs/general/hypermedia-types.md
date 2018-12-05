---
mainPage: false
title: Supported Hypermedia types
description: Supported Hypermedia types with Liferay Headless APIs
weight: 6
---

## Supported Hypermedia types

In order to select the Hypermedia type of the request, the [Accept](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html) header should be provided.

If no `Accept` header is provided, `application/ld+json` will be returned by default. 

For example, in order to receive the response in `json HAL` format:

```http request
Accept: application/hal+json
```
Currently the following formats are supported:

* **JSON**: `application/json`
* **JSON-LD**: [`application/ld+json`](https://json-ld.org/)
* **JSON-HAL**: [`application/hal+json`](http://stateless.co/hal_specification.html)

These are examples of requests with the different formats:

```json
curl --request GET \
  --url http://localhost:8080/o/api/p/content-space?page=1&per_page=1\
  --header 'Accept: application/json'

```
```json+ld
curl --request GET \
  --url http://localhost:8080/o/api/p/content-space?page=1&per_page=1\
  --header 'Accept: application/ld+json'

```

```json+hal
curl --request GET \
  --url http://localhost:8080/o/api/p/content-space?page=1&per_page=1\
  --header 'Accept: application/hal+json'

```

These are examples of responses with the different formats:

```json
{
    "totalNumberOfItems": 2,
    "numberOfItems": 1,
    "self": "http://localhost:8080/o/api/p/content-space?page=1&per_page=1",
    "pages": {
        "first": "http://localhost:8080/o/api/p/content-space?page=1&per_page=1",
        "last": "http://localhost:8080/o/api/p/content-space?page=2&per_page=1",
        "next": "http://localhost:8080/o/api/p/content-space?page=2&per_page=1"
    },
    "collection": "http://localhost:8080/o/api/p/content-space",
    "elements": [
        {
            "name": "Liferay",
            "availableLanguages": [
                "en-US"
            ],
            "self": "http://localhost:8080/o/api/p/content-space/20199",
            "creator": "http://localhost:8080/o/api/p/user-account/20176",
            "documentsRepository": "http://localhost:8080/o/api/p/documents-repository/20199",
            "webSite": "http://localhost:8080/o/api/p/web-site/20199",
            "keywords": "http://localhost:8080/o/api/p/content-space/20199/keywords",
            "formStructures": "http://localhost:8080/o/api/p/content-space/20199/form-structures",
            "forms": "http://localhost:8080/o/api/p/content-space/20199/form",
            "vocabularies": "http://localhost:8080/o/api/p/content-space/20199/vocabularies",
            "blogPosts": "http://localhost:8080/o/api/p/content-space/20199/blog-posting",
            "structuredContents": "http://localhost:8080/o/api/p/content-space/20199/structured-contents",
            "contentStructures": "http://localhost:8080/o/api/p/content-space/20199/content-structures"
        }
    ]
}
```
```json+ld
{
    "totalItems": 2,
    "numberOfItems": 1,
    "view": {
        "@id": "http://localhost:8080/o/api/p/content-space?page=1&per_page=1",
        "first": "http://localhost:8080/o/api/p/content-space?page=1&per_page=1",
        "last": "http://localhost:8080/o/api/p/content-space?page=2&per_page=1",
        "next": "http://localhost:8080/o/api/p/content-space?page=2&per_page=1",
        "@type": [
            "PartialCollectionView"
        ]
    },
    "@id": "http://localhost:8080/o/api/p/content-space",
    "member": [
        {
            "name": "Liferay",
            "availableLanguages": [
                "en-US"
            ],
            "@type": [
                "ContentSpace"
            ],
            "@id": "http://localhost:8080/o/api/p/content-space/20199",
            "creator": "http://localhost:8080/o/api/p/user-account/20176",
            "@context": [
                {
                    "creator": {
                        "@type": "@id"
                    }
                },
                {
                    "documentsRepository": {
                        "@type": "@id"
                    }
                },
                {
                    "webSite": {
                        "@type": "@id"
                    }
                },
                {
                    "keywords": {
                        "@type": "@id"
                    }
                },
                {
                    "formStructures": {
                        "@type": "@id"
                    }
                },
                {
                    "forms": {
                        "@type": "@id"
                    }
                },
                {
                    "vocabularies": {
                        "@type": "@id"
                    }
                },
                {
                    "blogPosts": {
                        "@type": "@id"
                    }
                },
                {
                    "structuredContents": {
                        "@type": "@id"
                    }
                },
                {
                    "contentStructures": {
                        "@type": "@id"
                    }
                }
            ],
            "documentsRepository": "http://localhost:8080/o/api/p/documents-repository/20199",
            "webSite": "http://localhost:8080/o/api/p/web-site/20199",
            "keywords": "http://localhost:8080/o/api/p/content-space/20199/keywords",
            "formStructures": "http://localhost:8080/o/api/p/content-space/20199/form-structures",
            "forms": "http://localhost:8080/o/api/p/content-space/20199/form",
            "vocabularies": "http://localhost:8080/o/api/p/content-space/20199/vocabularies",
            "blogPosts": "http://localhost:8080/o/api/p/content-space/20199/blog-posting",
            "structuredContents": "http://localhost:8080/o/api/p/content-space/20199/structured-contents",
            "contentStructures": "http://localhost:8080/o/api/p/content-space/20199/content-structures"
        }
    ],
    "manages": {
        "property": "rdf:type",
        "object": "schema:ContentSpace"
    },
    "@context": [
        {
            "@vocab": "http://schema.org/"
        },
        "https://www.w3.org/ns/hydra/core#"
    ],
    "@type": [
        "Collection"
    ]
}
```
```json+hal
{
    "total": 2,
    "count": 1,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/p/content-space?page=1&per_page=1"
        },
        "first": {
            "href": "http://localhost:8080/o/api/p/content-space?page=1&per_page=1"
        },
        "last": {
            "href": "http://localhost:8080/o/api/p/content-space?page=2&per_page=1"
        },
        "next": {
            "href": "http://localhost:8080/o/api/p/content-space?page=2&per_page=1"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/p/content-space"
        }
    },
    "_embedded": {
        "ContentSpace": [
            {
                "name": "Liferay",
                "availableLanguages": [
                    "en-US"
                ],
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/p/user-account/20176"
                    },
                    "documentsRepository": {
                        "href": "http://localhost:8080/o/api/p/documents-repository/20199"
                    },
                    "webSite": {
                        "href": "http://localhost:8080/o/api/p/web-site/20199"
                    },
                    "keywords": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/keywords"
                    },
                    "formStructures": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/form-structures"
                    },
                    "forms": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/form"
                    },
                    "vocabularies": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/vocabularies"
                    },
                    "blogPosts": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/blog-posting"
                    },
                    "structuredContents": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/structured-contents"
                    },
                    "contentStructures": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/content-structures"
                    }
                }
            }
        ]
    }
}
```
