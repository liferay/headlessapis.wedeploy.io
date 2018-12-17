---
title: Content Space
description: Content Space Endpoint documentation
weight: 2
---

## Model

The following fields are currently supported for this model:

* **name**: The content space's name.
* **availableLanguages**: The content space's available languages.

The model also has these links:

* **creator**: The user who created the content space.
* **documentsRepository**: Provides access to the content space's Document Library.
* **webSite**: The Site that the content space belongs to. 
* **keywords**: The collection of tags defined within the content space.
* **formStructures**: 
* **forms**: The collection of forms created in the content space.
* **vocabularies**: The collection of vocabularies defined in the content space.
* **blogPosts**: The collection of blog posts created in the content space.
* **structuredContents**: The collection of structured content created in the content space.
* **contentStructures** : The collection of structures defined in the content space.

## Example

Here's an example of a request to this endpoint: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/content-space?page=1&per_page=1\
  --header 'Accept: application/hal+json'

```

In a JSON-HAL formatted response, the `_embedded` section contains the `ContentSpace` key. This key contains the list of content spaces: 

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
                    "keywords": {
                        "href": "http://localhost:8080/o/api/content-space/20199/keywords"
                    },
                    "formStructures": {
                        "href": "http://localhost:8080/o/api/content-space/20199/form-structures"
                    },
                    "forms": {
                        "href": "http://localhost:8080/o/api/content-space/20199/form"
                    },
                    "vocabularies": {
                        "href": "http://localhost:8080/o/api/content-space/20199/vocabularies"
                    },
                    "blogPosts": {
                        "href": "http://localhost:8080/o/api/content-space/20199/blog-posting"
                    },
                    "structuredContents": {
                        "href": "http://localhost:8080/o/api/content-space/20199/structured-contents"
                    },
                    "contentStructures": {
                        "href": "http://localhost:8080/o/api/content-space/20199/content-structures"
                    }
                }
            }
        ]
    }
}
```

When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/content-space/examples.html).
