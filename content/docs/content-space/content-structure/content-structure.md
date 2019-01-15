---
title: Content Structure
description: Content Structure Endpoint Documentation
order: 1
---

## Model

The following fields are currently supported for this model:

* **description**: The structure's title.
* **name**: The structure's name.
* **availableLanguages**: The structure's available languages.
* **dateCreated**: The structure's creation date.
* **dateModified**: The date the structure was last modified.

This model also contains these links:

* **creator**: The user who created the structure.
* **contentSpace**:  The content space that the structure belongs to.

## Example

This API supports [pagination](/docs/general/pagination.html).

In the response, the `_embedded` section contains the `Structure` key. This key contains the list of content structures.

Here's an example of a request to this endpoint, where `{{contentSpaceId}}` is the ID of the content space that the structured content belongs to: 

```bash request
curl --request GET \
  --url http://localhost:8080/o/api/content-space/{{contentSpaceId}}/content-structures
```

```json response
{
  "total": 2,
  "count": 2,
  "_links": {
    "self": {
      "href": "http://localhost:8080/o/api/content-space/46142/content-structures?page=1&per_page=30"
    },
    "first": {
      "href": "http://localhost:8080/o/api/content-space/46142/content-structures?page=1&per_page=30"
    },
    "last": {
      "href": "http://localhost:8080/o/api/content-space/46142/content-structures?page=1&per_page=30"
    },
    "collection": {
      "href": "http://localhost:8080/o/api/content-space/46142/content-structures"
    }
  },
  "_embedded": {
    "Structure": [
      {
        "description": "demo-football-match-result.json",
        "name": "demo-football-match-result.json",
        "dateCreated": "2019-01-02T22:48Z",
        "dateModified": "2019-01-02T22:48Z",
        "availableLanguages": [
          "es-ES",
          "en-US"
        ],
        "_links": {
          "self": {
            "href": "http://localhost:8080/o/api/content-structures/46147"
          },
          "creator": {
            "href": "http://localhost:8080/o/api/user-account/20139"
          },
          "contentSpace": {
            "href": "http://localhost:8080/o/api/content-space/46142"
          }
        },
        "_embedded": {
          "formPages": {
            "total": 1,
            "_embedded": [
              {
                "_embedded": {
                  "fields": {
                    "total": 12,
                    "_embedded": [
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Local",
                        "dataType": "string",
                        "inputControl": "text",
                        "name": "Local",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Visitor",
                        "dataType": "string",
                        "inputControl": "text",
                        "name": "Visitor",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Local Result",
                        "dataType": "integer",
                        "name": "LocalResult",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Visitor Result",
                        "dataType": "integer",
                        "name": "VisitorResult",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Local Possesion",
                        "dataType": "double",
                        "name": "LocalPossession",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Visitor Possession",
                        "dataType": "double",
                        "name": "VisitorPossession",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Date",
                        "dataType": "date",
                        "name": "Date",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": false,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Location",
                        "dataType": "geolocation",
                        "name": "Location",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Image",
                        "dataType": "image",
                        "name": "Image",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Competition",
                        "dataType": "string",
                        "inputControl": "radio",
                        "name": "Competition",
                        "_embedded": {
                          "options": {
                            "total": 3,
                            "_embedded": [
                              {
                                "label": "Champions League",
                                "value": "Champions League"
                              },
                              {
                                "label": "La Liga",
                                "value": "La Liga"
                              },
                              {
                                "label": "Premier League",
                                "value": "Premier League"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Summary",
                        "dataType": "string",
                        "inputControl": "textarea",
                        "name": "Summary",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "Finished",
                        "predefinedValue": "false",
                        "dataType": "boolean",
                        "inputControl": "checkbox",
                        "name": "Finished",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      },
      {
        "description": "demo-variables.json",
        "name": "demo-variables.json",
        "dateCreated": "2019-01-02T22:48Z",
        "dateModified": "2019-01-02T22:48Z",
        "availableLanguages": [
          "en-US"
        ],
        "_links": {
          "self": {
            "href": "http://localhost:8080/o/api/content-structures/46213"
          },
          "creator": {
            "href": "http://localhost:8080/o/api/user-account/20139"
          },
          "contentSpace": {
            "href": "http://localhost:8080/o/api/content-space/46142"
          }
        },
        "_embedded": {
          "formPages": {
            "total": 1,
            "_embedded": [
              {
                "_embedded": {
                  "fields": {
                    "total": 7,
                    "_embedded": [
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "roleId",
                        "dataType": "string",
                        "inputControl": "text",
                        "name": "roleId",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "contentSpaceId",
                        "dataType": "string",
                        "inputControl": "text",
                        "name": "contentSpaceId",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "structureId",
                        "dataType": "string",
                        "inputControl": "text",
                        "name": "structureId",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "userId",
                        "dataType": "string",
                        "inputControl": "text",
                        "name": "userId",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "formId",
                        "dataType": "string",
                        "inputControl": "text",
                        "name": "formId",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "organizationId",
                        "dataType": "string",
                        "inputControl": "text",
                        "name": "organizationId",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      },
                      {
                        "localizable": true,
                        "multiple": false,
                        "readOnly": false,
                        "repeatable": false,
                        "required": false,
                        "showLabel": true,
                        "label": "structuredContentId",
                        "dataType": "string",
                        "inputControl": "text",
                        "name": "structuredContentId",
                        "_embedded": {
                          "options": {
                            "total": 0
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      }
    ]
  }
}
```

When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/content-space/contentStructure/examples.html). 
