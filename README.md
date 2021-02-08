# json-to-csv
A node.js program for converting a `JSON-ish` file to a csv file.

Uses no external dependencies and is written synchronously for easy readability and customization.

###### Input:
a `JSON-ish` file in the format of one valid JSON object per line with each line separated by a new line

example input file **test.json**:
```
{"1": 1, "2": 2, "3": 3, "hello1": "hello1", "hello2": {"a": "a"}}
{"a": "a", "b":  "b", "c":  "c"}
```

###### Output:

example output file generated **test.csv**:
```
1, 2, 3, hello1, {"a":"a"}
a, b, c

```