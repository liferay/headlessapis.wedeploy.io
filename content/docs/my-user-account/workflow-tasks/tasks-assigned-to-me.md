---
title: Tasks Assigned To Me
description: Tasks Assigned To Me Endpoint documentation
weight: 4
---

## Tasks Assigned To Me Model

The following fields are currently supported:

* **completed**: whether the workflow task is completed or not.
* **dateCompleted**: completion date of the workflow task.
* **dateCreated**: creation date of the workflow task.
* **dueDate**: if exists, expiration date of the workflow task.
* **definitionName**: 
* **description**:
* **name**:
* **transitions**: name of the possible transitions of the workflow task.

Also this model offers the following links:

* **logs**: `WorkflowLog` list of a workflow task. You can read more about this in the following [link](/docs/my-user-account/workflow-tasks/workflow-logs/index.html).

The model also have the information about the object involved:

* **object**: indicates the object involved in the workflow task.
  * **identifier**: the object's URL.
  * **resourceType**: the object's type (e.g.: `Comment` or `BlogPosting`).

## Workflow Tasks Assigned To Me Collection

This is an example of the request: 

```bash
curl --request GET \
  --url http://localhost:8080/o/api/p/r/workflow-tasks/assigned-to-me \
  --header 'Accept: application/hal+json'
```

The response in `json HAL` format will contain inside the `_embedded` section, the workflow task under the key `WorkflowTask`.

```json
{
   "total": 1,
   "count": 1,
   "_links": {
       "self": {
           "href": "http://localhost:8080/o/api/p/r/workflow-tasks/assigned-to-me?page=1&per_page=30"
       },
       "first": {
           "href": "http://localhost:8080/o/api/p/r/workflow-tasks/assigned-to-me?page=1&per_page=30"
       },
       "last": {
           "href": "http://localhost:8080/o/api/p/r/workflow-tasks/assigned-to-me?page=1&per_page=30"
       },
       "collection": {
           "href": "http://localhost:8080/o/api/p/r/workflow-tasks/assigned-to-me"
       }
   },
   "_embedded": {
       "WorkflowTask": [
           {
               "completed": false,
               "dateCreated": "2018-12-03T11:34Z",
               "definitionName": "Single Approver",
               "name": "review",
               "transitions": [
                   "approve",
                   "reject"
               ],
               "_links": {
                   "self": {
                       "href": "http://localhost:8080/o/api/p/workflow-tasks/36653"
                   },
                   "logs": {
                       "href": "http://localhost:8080/o/api/p/workflow-tasks/36653/workflow-logs"
                   }
               },
               "_embedded": {
                   "object": {
                       "identifier": "http://localhost:8080/o/api/p/blog-posting/36642",
                       "resourceType": "BlogPosting"
                   }
               }
           }
       ]
   }
}
```

When navigating through the list of entities, the link to each entity can be found with the rel `self`.

You can found more examples in the following [link](/docs/my-user-account/workflow-tasks/examples.html).