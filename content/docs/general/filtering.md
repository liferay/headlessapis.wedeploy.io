---
mainPage: true
title: Filtering
description: Filtering with Liferay Headless APIs
weight: 3
---

Not all collections allow filtering. The ones that support it will contain the 
optional parameter `?filter` in their template.

In order to filter a collection based on the value of one or more fields, you
can use the optional parameter filter following a subset of the oData standard.

## Comparison Operators

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

## Logical Operators

| Operator  | Description | Example                      |
|---------- |------------ |------------------------------|
|and|Logical and |Price le 200 and Price gt 3.5          |
|or |Logical or |Price le 3.5 or Price gt 200            |
|not' |Logical not |not (Price le 3.5)|

' It is really important use a space character after the operator `not`, otherwise it won't work

## Grouping Operators

| Operator  | Description | Example                      |
|---------- |------------ |------------------------------|
|( ) |Precedence grouping |(Price eq 5) or (Address/City eq 'London')  |

## String functions

| Function  | Description | Example                      |
|---------- |------------ |------------------------------|
| contains  | Contains    |contains(title,'edmon')|

## Escaping in queries:

In order to filter for a value which contains single quotes, these can
be escaped by adding two single quotes.

e.g. To filter for a company whose name is `L'Oreal`:
```
?filter=(title eq 'L''Oreal')
```