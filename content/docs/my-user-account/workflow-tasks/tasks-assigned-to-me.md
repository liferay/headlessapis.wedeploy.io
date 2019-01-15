---
title: Tasks Assigned To Me
description: Tasks Assigned To Me Endpoint documentation
weight: 4
---

## Model

This model supports these fields:

* **completed**: Whether the workflow task is complete.
* **dateCompleted**: The workflow task's completion date.
* **dateCreated**: The workflow task's creation date.
* **dueDate**: The workflow task's expiration date, if it exists.
* **definitionName**: 
* **description**:
* **name**:
* **transitions**: The workflow task's possible transitions.

This model also contains these links:

* **logs**: The workflow task's `WorkflowLog` list. For more information, see the [workflow logs documentation](/docs/my-user-account/workflow-tasks/workflow-logs/index.html).

This model also has information about the object involved in the workflow task:

* **object**: The object.
* **identifier**: The object's URL.
* **resourceType**: The object's type (e.g., `Comment`, `BlogPosting`, etc.).

## Example

This API supports [pagination](/docs/general/pagination.html).

In the response, the `_embedded` section contains the `WorkflowTask` key. This key contains the workflow task.

Here's an example of a request to this endpoint:

```bash request
curl --request GET \
  --url http://localhost:8080/o/api/r/workflow-tasks/assigned-to-me
```

```json response
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
