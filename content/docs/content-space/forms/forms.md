---
title: Forms
description: Forms Endpoint documentation
order: 1
---

## Model

The following fields are currently supported for this model:

* **name**: The form's name.
* **defaultLanguage**: The form's default language.
* **description**: The form's description.
* **availableLanguages**: The form's available languages.
* **dateCreated**: The form's creation date.
* **dateModified**: The date the form was last modified.

This model also contains these links:

* **contentSpace**: The content space that the form belongs to.
* **creator**: The user who created the form.
* **structure**: The structure that built the form.
* **formRecords**: The form's records.

## Example

This API supports [pagination](/docs/general/pagination.html).

In the response, the `_embedded` section contains the `Form` key. This key contains the list of forms.

Here's an example of a request to this endpoint, where `{{contentSpaceId}}` is the ID of the content space that the form belongs to: 

```bash
//display-name{request}
curl --request GET \
  --url http://localhost:8080/o/api/content-space/{{contentSpaceId}}/form
```

```json
//display-name{response}
{
    "total": 2,
    "count": 2,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/content-space/20126/form?page=1&per_page=30"
        },
        "first": {
            "href": "http://localhost:8080/o/api/content-space/20126/form?page=1&per_page=30"
        },
        "last": {
            "href": "http://localhost:8080/o/api/content-space/20126/form?page=1&per_page=30"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/content-space/20126/form"
        }
    },
    "_embedded": {
        "Form": [
            {
                "name": "Grid Form",
                "dateCreated": "2018-11-20T13:36Z",
                "dateModified": "2018-11-20T13:37Z",
                "defaultLanguage": "en_US",
                "availableLanguages": [
                    "en-US"
                ],
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/form/37538"
                    },
                    "contentSpace": {
                        "href": "http://localhost:8080/o/api/content-space/20126"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/user-account/20139"
                    },
                    "structure": {
                        "href": "http://localhost:8080/o/api/form-structures/37534"
                    },
                    "formRecords": {
                        "href": "http://localhost:8080/o/api/form/37538/form-record"
                    }
                }
            },
            {
                "name": "Insurance",
                "dateCreated": "2018-09-25T18:08Z",
                "dateModified": "2018-11-20T13:59Z",
                "defaultLanguage": "en_US",
                "availableLanguages": [
                    "en-US"
                ],
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/form/37531"
                    },
                    "contentSpace": {
                        "href": "http://localhost:8080/o/api/content-space/20126"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/user-account/20139"
                    },
                    "structure": {
                        "href": "http://localhost:8080/o/api/form-structures/37527"
                    },
                    "formRecords": {
                        "href": "http://localhost:8080/o/api/form/37531/form-record"
                    }
                }
            }
        ]
    }
}
```

When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/content-space/contentStructure/examples.html). 
