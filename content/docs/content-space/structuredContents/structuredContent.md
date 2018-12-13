---
mainPage: false
title: Structured Content
description: Structured Content Endpoint documentation
weight: 2
---

## Model

The following fields are currently supported for this model:

* **title**: The structured content's title.
* **availableLanguages**: The content space's available languages.
* **dateCreated**: The structured content's creation date.
* **dateModified**: The date the structured content was last modified.
* **datePublished**: The structured content's publication date.
* **keywords**: The structured content's keywords.
* **values**: A list of the structured content's dynamic fields and their values. Every value has the following fields:
  * **label**:
  * **name**: The dynamic field's name as defined in the structure used by the content.
  * **value**: The field's value as set by the content creator.
  * **dataType**: The data type of the field defined in the structure (e.g., `string`, `boolean`, `date`, etc.).
  * **inputControl**: The input control used for `string` fields (e.g., `radio`, `select`, etc.).
  * **filterAndSortIdentifier**: The key to filter and sort results by. You must use this in the URL. Note that this is an optional field that only appears when filtering and sorting is possible.

This model also contains these links:

* **creator**: The user who created the content space.
* **contentSpace**:  The content space that the structured content belongs to. 
* **aggregateRating**: The structured content's average rating.
* **contentStructure**: The content structure that the structured content belongs to. 
* **category** : The collection of categories assigned to the structured content.
* **comment** : The structured content's comments.

## Example

This API supports [pagination](/docs/general/pagination.html), [sorting](/docs/general/sorting.html) and [filtering](/docs/general/filtering.html), and localization. To retrieve the structured content in a given language, include the `Accept-language` header with one of the available languages for that content.

Here's an example of a request to this endpoint, where `{{contentSpaceId}}` is the ID of the content space that the structured content belongs to: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/p/content-space/{{contentSpaceId}}/structured-contents?page=1&per_page=1\
  --header 'Accept: application/hal+json'

```

In a JSON-HAL formatted response, the `_embedded` section contains the `StructuredContent` key. This key contains the list of structured content: 

```json
{
    "total": 7,
    "count": 1,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/p/content-space/contentSpaceId/structured-contents?page=1&per_page=1"
        },
        "first": {
            "href": "http://localhost:8080/o/api/p/content-space/contentSpaceId/structured-contents?page=1&per_page=1"
        },
        "last": {
            "href": "http://localhost:8080/o/api/p/content-space/contentSpaceId/structured-contents?page=7&per_page=1"
        },
        "next": {
            "href": "http://localhost:8080/o/api/p/content-space/contentSpaceId/structured-contents?page=2&per_page=1"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/p/content-space/contentSpaceId/structured-contents"
        }
    },
    "_embedded": {
        "StructuredContent": [
            {
                "description": "<p>Check out our great offers ONLY for members!</p>",
                "title": "Exclusive Offers for Subscriptors",
                "dateCreated": "2018-09-13T09:48Z",
                "dateModified": "2018-09-13T11:06Z",
                "datePublished": "2018-09-13T09:47Z",
                "availableLanguages": [
                    "en-US"
                ],
                "keywords": [],
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/p/structured-contents/36793"
                    },
                    "contentSpace": {
                        "href": "http://localhost:8080/o/api/p/content-space/contentSpaceId"
                    },
                    "aggregateRating": {
                        "href": "http://localhost:8080/o/api/p/aggregate-rating/20601:36793"
                    },
                    "contentStructure": {
                        "href": "http://localhost:8080/o/api/p/content-structures/25071"
                    },
                    "creator": {
                        "href": "http://localhost:8080/o/api/p/user-account/20212"
                    },
                    "category": {
                        "href": "http://localhost:8080/o/api/p/structured-contents/36793/categories"
                    },
                    "comment": {
                        "href": "http://localhost:8080/o/api/p/structured-contents/36793/comment"
                    }
                },
                "_embedded": {
                    "renderedContentsByTemplate": {
                        "total": 1,
                        "_embedded": [
                            {
                                "template": "Basic Web Content",
                                "renderedContent": "<h2>Car hire that goes the extra mile</h2><ul><li><img alt=\"Usps white tick\" height=\"21\" src=\"http://www.theaa.com/~/media/the-aa/usps-icon-tick/usps-white-tick.png?h=21&amp;la=en&amp;w=21&amp;hash=61EF67E0678A56A550C9AA064516E659B306400B\" width=\"21\" /><h5>Easy booking</h5><p>Book below or call&nbsp;0344 335 0243&nbsp;to compare rates between Enterprise, National and Alamo.</p></li><li><img alt=\"Usps white tick\" height=\"21\" src=\"http://www.theaa.com/~/media/the-aa/usps-icon-tick/usps-white-tick.png?h=21&amp;la=en&amp;w=21&amp;hash=61EF67E0678A56A550C9AA064516E659B306400B\" width=\"21\" /><h5>The right car for you</h5><p>Choose from a wide range of high-quality vehicles – from compact cars to luxury saloons.</p></li><li><img alt=\"Usps white tick\" height=\"21\" src=\"http://www.theaa.com/~/media/the-aa/usps-icon-tick/usps-white-tick.png?h=21&amp;la=en&amp;w=21&amp;hash=61EF67E0678A56A550C9AA064516E659B306400B\" width=\"21\" /><h5>Worldwide rentals</h5><p>Save money at over 7,000 locations across the UK, Europe and North America.</p></li></ul>"
                            }
                        ]
                    },
                    "values": {
                        "total": 1,
                        "_embedded": [
                            {
                                "label": "content",
                                "value": "<h2>Car hire that goes the extra mile</h2>\n\n<ul>\n\t<li><img alt=\"Usps white tick\" height=\"21\" src=\"http://www.theaa.com/~/media/the-aa/usps-icon-tick/usps-white-tick.png?h=21&amp;la=en&amp;w=21&amp;hash=61EF67E0678A56A550C9AA064516E659B306400B\" width=\"21\" />\n\t<h5>Easy booking</h5>\n\n\t<p>Book below or call&nbsp;0344 335 0243&nbsp;to compare rates between Enterprise, National and Alamo.</p>\n\t</li>\n\t<li><img alt=\"Usps white tick\" height=\"21\" src=\"http://www.theaa.com/~/media/the-aa/usps-icon-tick/usps-white-tick.png?h=21&amp;la=en&amp;w=21&amp;hash=61EF67E0678A56A550C9AA064516E659B306400B\" width=\"21\" />\n\t<h5>The right car for you</h5>\n\n\t<p>Choose from a wide range of high-quality vehicles – from compact cars to luxury saloons.</p>\n\t</li>\n\t<li><img alt=\"Usps white tick\" height=\"21\" src=\"http://www.theaa.com/~/media/the-aa/usps-icon-tick/usps-white-tick.png?h=21&amp;la=en&amp;w=21&amp;hash=61EF67E0678A56A550C9AA064516E659B306400B\" width=\"21\" />\n\t<h5>Worldwide rentals</h5>\n\n\t<p>Save money at over 7,000 locations across the UK, Europe and North America.</p>\n\t</li>\n</ul>",
                                "dataType": "html",
                                "name": "content"
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

You can find more examples [here](/docs/content-space/structuredContent/examples.html). 
