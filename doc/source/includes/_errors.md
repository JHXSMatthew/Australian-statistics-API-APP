# HTTP Errors

```JSON
{  
   "header":{  
      "status":"error"
   },
   "data":{  
      "code":-1,
      "message":"Required String parameter 'StatisticsArea' is not present"
   }
}
```
When you get an error, you alway GET a JSON response. The data section contains the error information.
If you DID NOT get any JSON response, please report to our team and we will fix it or you may try again later.
The Australian statistics API uses the following error codes in JSON format:


Error Code | Meaning
---------- | -------
-1 | MissingServletRequestParameterException -- Required parameters Articles missing.
0 | MethodArgumentNotValidException -- Your request sucks.
1 | MethodArgumentTypeMismatchException -- Your request gives illegal format.
2 | CannotParseStatsTypeException -- The area you specified not supported yet.
3 | CannotParseCategoryException -- The Category you specificed does not exist.
4 | CannotParseStateException -- The State you specificed does not exist.
5 | CannotParseJSONException -- Our DB is down.
6 | CannotFetchDataException -- Our DB is down.
7 | ConstraintViolationException -- Bad reqeust. You are sending some invalid data.
8 | NullPointerException -- We had a problem with our server. Report please.
9 | ConversionFailedException -- We're temporarily offline for maintenance. Please try again later.
10 | NoDataAvailableException -- Our DB does not have such data you required.
11 | DateInvalidException -- No trolling please!


NOTE: if error happens, no pretty JSON output is available.
