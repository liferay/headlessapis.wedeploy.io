---
title: Workflow Logs
description: Workflow Logs Endpoint Documentation
order: 1
---

## Model

This model supports these fields:

* **dateCreated**: The workflow log's creation date.
* **commentLog**: The workflow log's comment.
* **previousState**: The state before the current state in the workflow log (if that state exists).
* **state**: The workflow log's state.
* **type**: The workflow log's type (e.g., `TASK_ASSIGNMENT`, `TASK_COMPLETION`, `TASK_UPDATE`).

This model also contains these links:

* **auditPerson**: 
* **person**: The person assigned to the workflow task.
* **previousPerson**: The person assigned to the workflow task prior to the current person.
* **task**: The workflow task to which the workflow log belongs.

## Example

This API supports [pagination](/docs/general/pagination.html).

In the response, the `_embedded` section contains the `WorkflowLog` key. This key contains the workflow log.

Here's an example of a request to this endpoint:

```bash
//display-name{request}
curl --request GET \
  --url http://localhost:8080/o/api/workflow-tasks/36564/workflow-logs 
```

```json
//display-name{response}
{
    "total": 1,
    "count": 1,
    "_links": {
        "self": {
            "href": "http://localhost:8080/o/api/workflow-tasks/51632/workflow-logs?page=1&per_page=30"
        },
        "first": {
            "href": "http://localhost:8080/o/api/workflow-tasks/51632/workflow-logs?page=1&per_page=30"
        },
        "last": {
            "href": "http://localhost:8080/o/api/workflow-tasks/51632/workflow-logs?page=1&per_page=30"
        },
        "collection": {
            "href": "http://localhost:8080/o/api/workflow-tasks/51632/workflow-logs"
        }
    },
    "_embedded": {
        "WorkflowLog": [
            {
                "dateCreated": "2018-12-03T14:19Z",
                "commentLog": "Assigned initial task.",
                "state": "review",
                "type": "TASK_ASSIGNMENT",
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/o/api/workflow-logs/51641"
                    },
                    "auditPerson": {
                        "href": "http://localhost:8080/o/api/user-account/20139"
                    },
                    "person": {
                        "href": "http://localhost:8080/o/api/user-account/0"
                    },
                    "previousPerson": {
                        "href": "http://localhost:8080/o/api/user-account/0"
                    },
                    "task": {
                        "href": "http://localhost:8080/o/api/workflow-tasks/51632"
                    }
                }
            }
        ]
    }
}
```

When navigating through a list of entities, the `self` rel contains the link to each entity. 

You can find more examples [here](/docs/my-user-account/workflow-tasks/workflow-logs/examples.html).
