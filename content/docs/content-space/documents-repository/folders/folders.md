---
mainPage: false
title: "Folders"
description: "Folders Endpoint documentation"
weight: 2
---

## Model

The following fields are currently supported for this model:

* **dateCreated**: The folder's creation date.
* **dateModified**: The date the folder was last modified.
* **description**: The folder's description.
* **name**: The folder's name.

This model also contains these links:

* **documentsRepository**: The documents repository that the folder belongs to.
* **subFolders**:  The folders within this folder.
* **documents**: The documents within this folder.

## Example

This API supports [pagination](/docs/general/pagination.html). 

Here's an example of a request to this endpoint, where `{{contentSpaceId}}` is the ID of the content space that the folder belongs to: 

```bash json
curl --request GET \
  --url http://localhost:8080/o/api/documents-repository/{{contentSpaceId}}/folder?page=1&per_page=1\
  --header 'Accept: application/json'
```
```bash hal
curl --request GET \
  --url http://localhost:8080/o/api/documents-repository/{{contentSpaceId}}/folder?page=1&per_page=1\
  --header 'Accept: application/hal+json'
```

In a JSON-HAL formatted response, the `_embedded` section contains the `Folder` key. This key contains the list of folders:

```json
{
    "totalNumberOfItems": 1,
    "numberOfItems": 1,
    "self": "http://localhost:8080/o/api/documents-repository/20126/folder?page=1&per_page=1",
    "pages": {
        "first": "http://localhost:8080/o/api/documents-repository/20126/folder?page=1&per_page=1",
        "last": "http://localhost:8080/o/api/documents-repository/20126/folder?page=1&per_page=1"
    },
    "collection": "http://localhost:8080/o/api/documents-repository/20126/folder",
    "elements": [
        {
            "dateCreated": "2018-12-26T14:39Z",
            "dateModified": "2018-12-26T14:39Z",
            "description": "My example folder description",
            "name": "My example folder",
            "self": "http://localhost:8080/o/api/folder/37669",
            "documentsRepository": "http://localhost:8080/o/api/documents-repository/20126",
            "subFolders": "http://localhost:8080/o/api/folder/37669/folder",
            "documents": "http://localhost:8080/o/api/folder/37669/document"
        }
    ]
}
```
```json hal
{
    "total": 1,
    "count": 1,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/documents-repository/20126/folder?page=1&per_page=1"
        },
        "first": {
            "href": "http://localhost:8080/o/api/documents-repository/20126/folder?page=1&per_page=1"
        },
        "last": {
            "href": "http://localhost:8080/o/api/documents-repository/20126/folder?page=1&per_page=1"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/documents-repository/20126/folder"
        }
    },
    "_embedded": {
        "Folder": [
            {
                "dateCreated": "2018-12-26T14:39Z",
                "dateModified": "2018-12-26T14:39Z",
                "description": "My example folder description",
                "name": "My example folder",
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/folder/37669"
                    },
                    "documentsRepository": {
                        "href": "http://localhost:8080/o/api/documents-repository/20126"
                    },
                    "subFolders": {
                        "href": "http://localhost:8080/o/api/folder/37669/folder"
                    },
                    "documents": {
                        "href": "http://localhost:8080/o/api/folder/37669/document"
                    }
                }
            }
        ]
    }
}
```

When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/content-space/documents-repository/folders/examples.html).
