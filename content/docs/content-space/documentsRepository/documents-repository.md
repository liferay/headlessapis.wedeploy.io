---
title: Documents Repository
description: Documents Repository Endpoint documentation
order: 1
---

## Model

No fields are currently supported for this model.

The model has these links:

* **documents**: The collection of documents in the Documents Repository.
* **folders**: The collection of folders in the Documents Repository.

## Example

In the response, the `_links` section contains the links to `documents` and `folders`.

Here's an example of a request to this endpoint: 

```bash
//display-name{request}
curl --request GET \
  --url http://localhost:8080/o/api/documents-repository/{{contentSpaceId}}
```

```json
//display-name{response}
{
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/documents-repository/20126"
        },
        "documents": {
            "href": "http://localhost:8080/o/api/documents-repository/20126/document"
        },
        "folders": {
            "href": "http://localhost:8080/o/api/documents-repository/20126/folder"
        }
    }
}
```

The `self` rel contains the link to the current Documents Repository entity.

You can find more examples [here](/docs/content-space/documentsRepository/examples.html).
