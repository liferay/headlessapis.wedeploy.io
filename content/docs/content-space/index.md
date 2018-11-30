---
mainPage: true
title: Content Space
description: Content Space Endpoint documentation
weight: 1
---

## The Content Space Model

The following fields are currently supported:

* **name**: the name of the content space.
* **availableLanguages**: available languages of the content space.

Also this model offers the links:

* **creator**: the user creator of this content space.
* **documentsRepository** : it provides access to the document library stored in this content space.
* **webSite** : the site that this content space belongs to. 
* **keywords** : the collection of tags defined within the content space.
* **formStructures** : 
* **forms** : the collection of forms created in this content space.
* **vocabularies** : the collection of vocabularies defined within the content space.
* **blogPosts** : the collection of blog posts created in this content space.
* **structuredContents** : the collection of structured contents created in this content space.
* **contentStructures** : the collection of structures defined in this content space.

## Content Spaces Collection

This is an example of a request: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/p/content-space?page=1&per_page=1\
  --header 'Accept: application/hal+json'

```

The response in `json HAL` format will contain inside the `_embedded` section, a list of content spaces under the key `ContentSpace`.

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
    },
     "page": {
         "size": 1,
         "totalElements": 2,
         "totalPages": 2,
         "number": 0
     }
}
```

When navigating through the list of entities, the link to each entity can be found with the rel `self`
