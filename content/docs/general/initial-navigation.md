---
mainPage: false
title: Initial Navigation to Obtain URLs
description: Initial Navigation to obtain URLs with Liferay Headless APIs
order: 1
---

First, you must get a list of the URLs you can make requests to. To get a list of URLs available at the API's entry point, make a request to `/o/api`, the request will include a `_links` object that contains the available URLs. Note that it's important not to hardcode URLs in future requests, as they may change.

```json
{
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api"
        },
        "user-account": {
            "href": "http://localhost:8080/o/api/user-account"
        },
        "content-space": {
            "href": "http://localhost:8080/o/api/content-space"
        },
        "my-user-account": {
            "href": "http://localhost:8080/o/api/my-user-account"
        },
        "web-site": {
            "href": "http://localhost:8080/o/api/web-site"
        },
        "organization": {
            "href": "http://localhost:8080/o/api/organization"
        },
        "roles": {
            "href": "http://localhost:8080/o/api/roles"
        }
    }
}
```

The `organization` and `roles` keys in this response each contain a URL for retrieving the Organizations and Roles in the portal, respectively. Note that requests to these URLs return a collection of entities (e.g., a collection of the portal's Roles). When navigating a collection, the `self` key contains the requested resource. 

Different [hypermedia formats](/docs/general/hypermedia-types.html) are supported for the response.

You can find more examples [here](/docs/general/examples.html).
