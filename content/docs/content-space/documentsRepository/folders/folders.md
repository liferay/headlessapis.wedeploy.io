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
* **subFolders**:  The folders in this folder.
* **documents**: The documents in this folder.

## Example

This API supports [pagination](/docs/general/pagination.html). 

In the following requests to this endpoint, `{{contentSpaceId}}` is the ID of the content space that the folder belongs to.

```bash request
curl --request GET \
  --url http://localhost:8080/o/api/documents-repository/{{contentSpaceId}}/folder?page=1&per_page=1
```
```json response
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

You can find more examples [here](/docs/content-space/documentsRepository/folders/examples.html).
