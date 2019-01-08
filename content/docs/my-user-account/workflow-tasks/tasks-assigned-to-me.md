---
title: Tasks Assigned To Me
description: Tasks Assigned To Me Endpoint documentation
weight: 4
---

## Model

The following fields are currently supported for this model:

* **completed**: whether the workflow task is completed or not.
* **dateCompleted**: completion date of the workflow task.
* **dateCreated**: creation date of the workflow task.
* **dueDate**: if exists, expiration date of the workflow task.
* **definitionName**: 
* **description**:
* **name**:
* **transitions**: name of the possible transitions of the workflow task.

This model also contains these links:

* **logs**: `WorkflowLog` list of a workflow task. You can read more about this in the following [link](/docs/my-user-account/workflow-tasks/workflow-logs/index.html).

The model also have the information about the object involved:

* **object**: indicates the object involved in the workflow task.
* **identifier**: the object's URL.
* **resourceType**: the object's type (e.g.: `Comment` or `BlogPosting`).

## Example

Here's an example of a request to this endpoint:

```bash
curl --request GET \
  --url http://localhost:8080/o/api/r/workflow-tasks/assigned-to-me
```

The response will contain inside the `_embedded` section, the workflow task under the key `WorkflowTask`.

```json
{
   "total": 1,
   "count": 1,
   "_links": {
       "self": {
           "href": "http://localhost:8080/o/api/r/workflow-tasks/assigned-to-me?page=1&per_page=30"
       },
       "first": {
           "href": "http://localhost:8080/o/api/r/workflow-tasks/assigned-to-me?page=1&per_page=30"
       },
       "last": {
           "href": "http://localhost:8080/o/api/r/workflow-tasks/assigned-to-me?page=1&per_page=30"
       },
       "collection": {
           "href": "http://localhost:8080/o/api/r/workflow-tasks/assigned-to-me"
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
                       "href": "http://localhost:8080/o/api/workflow-tasks/36653"
                   },
                   "logs": {
                       "href": "http://localhost:8080/o/api/workflow-tasks/36653/workflow-logs"
                   }
               },
               "_embedded": {
                   "object": {
                       "identifier": "http://localhost:8080/o/api/blog-posting/36642",
                       "resourceType": "BlogPosting"
                   }
               }
           }
       ]
   }
}
```

When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/my-user-account/workflow-tasks/examples.html).