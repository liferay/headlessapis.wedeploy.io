---
mainPage: false
title: Pagination
description: Pagination with Liferay Headless APIs
weight: 4
---

Responses containing collections are paginated. To customize the number of elements per page or request a specific page, use the optional parameters `per_page` and `page`, respectively. 

## Example

Http request:
```bash
curl --request GET \
  --url http://localhost:8080/o/api/content-space?page=1&per_page=1\
  --header 'Accept: application/json'

```

In the response, the `_links` block contains links to the other pages in the collection. The `page` block contains the total number of existing elements:
```json
{
    "total": 2,
    "count": 1,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/content-space?page=1&per_page=1"
        },
        "first": {
            "href": "http://localhost:8080/o/api/content-space?page=1&per_page=1"
        },
        "last": {
            "href": "http://localhost:8080/o/api/content-space?page=2&per_page=1"
        },
        "next": {
            "href": "http://localhost:8080/o/api/content-space?page=2&per_page=1"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/content-space"
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
                        "href": "http://localhost:8080/o/api/content-space/20199"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/user-account/20176"
                    },
                    "documentsRepository": {
                        "href": "http://localhost:8080/o/api/documents-repository/20199"
                    },
                    "webSite": {
                        "href": "http://localhost:8080/o/api/web-site/20199"
                    },
                    "formStructures": {
                        "href": "http://localhost:8080/o/api/content-space/20199/form-structures"
                    },
                    "forms": {
                        "href": "http://localhost:8080/o/api/content-space/20199/form"
                    },
                    "blogPosts": {
                        "href": "http://localhost:8080/o/api/content-space/20199/blog-posting"
                    },
                    "keywords": {
                        "href": "http://localhost:8080/o/api/content-space/20199/keywords"
                    },
                    "contentStructures": {
                        "href": "http://localhost:8080/o/api/content-space/20199/content-structures"
                    },
                    "structuredContents": {
                        "href": "http://localhost:8080/o/api/content-space/20199/structured-contents"
                    },
                    "vocabularies": {
                        "href": "http://localhost:8080/o/api/content-space/20199/vocabularies"
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
