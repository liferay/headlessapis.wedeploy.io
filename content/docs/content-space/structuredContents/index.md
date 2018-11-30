---
mainPage: true
title: Structured Content
description: Structured Content Endpoint documentation
weight: 2
---

## The Structured Content Model

The following fields are currently supported:

* **title**: the title of the structured content.
* **availableLanguages**: available languages of the content space.
* **dateCreated**: the date of creation of the structured content.
* **dateModified**: the date of last modification of the structured content.
* **datePublished**: the date of publication of the structured content.
* **keywords**: the keywords of this structured content.
* **values**: a list of values of the structured content. Every value has the following fields:
  * **label**:
  * **name**:
  * **value**:
  * **dataType**:
  * **inputControl**:
  * **filterAndSortIdentifier**: this is optional field, only will be shown when the value can be filterable and sortable.

Also this model offers the links:

* **creator**: the user creator of this content space.
* **contentSpace** :  the content space that this structured content belongs to. 
* **aggregateRating** : 
* **contentStructure** : the content structure that this structured content belongs to. 
* **category** : 
* **comment** : 

## Structured Contents Collection

This API supports [pagination](/docs/general/pagination.html), [sorting](/docs/general/sorting.html) and [filtering](/docs/general/filtering.html).

This is an example of a request: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/p/content-space/{{contentSpaceId}}/structured-contents?page=1&per_page=1\
  --header 'Accept: application/hal+json'

```

Where `{{contentSpaceId}}` is the id of the content space that the structured contents belongs to.

The response in `json HAL` format will contain inside the `_embedded` section, a list of content spaces under the key `ContentSpace`.

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

When navigating through the list of entities, the link to each entity can be found with the rel `self`

You can found more examples in the following [link](/docs/content-space/examples.html).
