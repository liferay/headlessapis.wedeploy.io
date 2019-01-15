---
title: Sorting
description: Sorting with Liferay Headless APIs
order: 5
---

## Sorting

Sorting collection results is another common task. Note, however, that not all collections allow sorting. 

<!---
Not all collections allow sorting. The ones that support it will contain the 
optional parameter `{lb}?sort{rb}` in their template.
-->

To get sorted collection results, append `?sort=<param-name>` to the request URL. For example, appending `?sort=title` to the request URL sorts the results by title. 

The default sort order is ascending (0-1, A-Z). To perform a descending sort, append `:desc` to the parameter name. For example, to perform a descending sort by title, append `?sort=title:desc` to the request URL. 

To sort by more than one parameter, separate the parameter names by commas and put them in order of priority. For example, to sort first by title and then by creation date, append `?sort=title,dateCreated` to the request URL. 

To specify a descending sort for only one parameter, you must explicitly specify ascending sort order (`:asc`) for the other parameters. For example: 

`?sort=title:desc,dateCreated:asc`
