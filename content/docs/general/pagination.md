---
mainPage: false
title: Pagination
description: Pagination with Liferay Headless APIs
weight: 4
---

Every collection URL is paginated. It is possible to customize the number of elements per page as well as requesting a specific page of the collection using the optional params `page` and `per_page`.

## Example

Http request:
```bash
curl --request GET \
  --url http://localhost:8080/o/api/p/content-space?page=1&per_page=1\
  --header 'Accept: application/json'

```

Http response:
```json
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
                    "formStructures": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/form-structures"
                    },
                    "forms": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/form"
                    },
                    "blogPosts": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/blog-posting"
                    },
                    "keywords": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/keywords"
                    },
                    "contentStructures": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/content-structures"
                    },
                    "structuredContents": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/structured-contents"
                    },
                    "vocabularies": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/vocabularies"
                    }
                }
            }
        ]
    },
    "page": {
        "size": 1,
        "totalElements": 2,
        "totalPages": 2,
        "number": 0
    }
}
```

From this response, you can obtain the total number of existing elements under the `page` block and also
the links to the other pages of the collection for content spaces.
