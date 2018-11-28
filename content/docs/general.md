---
title: "General Guide"
weight: 6
---

## Initial Navigation to obtain URLs

URLs are not part of this API, they may change at any moment. URLs must be asked to the service before making any request.

The URLs can be obtained making a request to `/o/apio`.

The response in `json HAL` format will contain a `_links` object with the different links to be used. For example: 

```json
{
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api"
        },
        "user-account": {
            "href": "http://localhost:8080/o/api/p/user-account"
        },
        "content-space": {
            "href": "http://localhost:8080/o/api/p/content-space"
        },
        "my-user-account": {
            "href": "http://localhost:8080/o/api/p/my-user-account"
        },
        "web-site": {
            "href": "http://localhost:8080/o/api/p/web-site"
        },
        "organization": {
            "href": "http://localhost:8080/o/api/p/organization"
        },
        "roles": {
            "href": "http://localhost:8080/o/api/p/roles"
        }
    }
}
```

The template URLs for managing collections such as Organization or Roles can be
found inside the section `_links` with the keys `organization` or `roles`.
(These keys are our API and they will never change). 

These URLs allow us to build URLs that can always be used to obtain the entities (`GET` method).

Navigating through a collection of entities, the link to each entity can be found with the rel `self`. 

## Supported Hypermedia types

#### JSON-LD 

#### HAL 

## Pagination

Every collection URL can be paginated using the optional params `page` and `per_page`.

This is an example of a response to this url: http://localhost:8080/o/api/organization?page=1&per_page=1

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
                    "formStructures": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/form-structures"
                    },
                    "forms": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/form"
                    },
                    "blogPosts": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/blog-posting"
                    },
                    "keywords": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/keywords"
                    },
                    "contentStructures": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/content-structures"
                    },
                    "structuredContents": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/structured-contents"
                    },
                    "vocabularies": {
                        "href": "http://localhost:8080/o/api/p/content-space/20199/vocabularies"
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

From this response, you can obtain the total number of existing elements under the `page` block and also
the links to other pages of content spaces.

## Sorting

Not all collections allow sorting. The ones that support it will contain the 
optional parameter `{lb}?sort{rb}` in their template.

e.g. Given a url for a Collection (such as `http://localhost:8080/o/api/p/content-space/20199/structured-contents`)
I could sort the results by title appending to the url `?sort=title`

By default, the sorting is in ascending order. (0-1-A-Z). However, this can be changed
adding `desc` after the parameter name separated with a `:`.

e.g. I could sort the results by title descending, appending to the url `?sort=title:desc`

I could also sort by more than one field, separating the fields by commas.
In this situation, the first parameter found is used to sort, and in case of coincidence,
the next parameter in the list is used to sort and so on. 

e.g. I could sort the results by the title of the Structured Content, and in case of coincidence
then order by the Date of creation appending this to the url: `sort=title,dateCreated`

If I want to change the order to descending for one of the fields, then I must 
used separated parameters in this way:

`?sort=title:desc,dateCreated:asc`

## Filtering

Not all collections allow filtering. The ones that support it will contain the 
optional parameter `{lb}?filter{rb}` in their template.

In order to filter a collection based on the value of one or more fields, you
can use the optional parameter filter following a subset of the oData standard.

#### Comparison Operators

| Operator  | Description          | Example                             |
|---------- |--------------------- |-------------------------------------|
| eq        | Equal                | values/City eq 'Redmond'            |
|           | Equal null           | values/City eq null                 |
| ne        | Not equal            | values/City ne 'London'             |
|           | Not null             | values/City ne null                 |
| gt        | Greater than         | Price gt 20                         |
| ge        | Greater than or equal| Price ge 10                         |
| lt        | Less than            | DateCreated lt 2018-02-13T12:33:12Z |
| le        | Less than or equal   | DateCreated le 2012-05-29T09:13:28Z |

#### Logical Operators

| Operator  | Description | Example                      |
|---------- |------------ |------------------------------|
|and|Logical and |Price le 200 and Price gt 3.5          |
|or |Logical or |Price le 3.5 or Price gt 200            |
|not |Logical not |not(Price le 3.5)|

#### Grouping Operators

| Operator  | Description | Example                      |
|---------- |------------ |------------------------------|
|( ) |Precedence grouping |(Price eq 5) or (Address/City eq 'London')  |

#### String functions

| Function  | Description | Example                      |
|---------- |------------ |------------------------------|
| contains  | Contains    |contains(title,'edmon')|

#### Escaping in queries:

In order to filter for a value which contains single quotes, these can
be escaped by adding two single quotes.

e.g. To filter for a company whose name is `L'Oreal`:
```
?filter=(title eq 'L''Oreal')
```