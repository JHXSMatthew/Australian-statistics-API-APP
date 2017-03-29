<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content=""/>
    <meta name="author" content=""/>

    <link rel="icon" href="/image/favicon.png"/>

    <title>Australian Statistics - TeamRocket Dev.</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"/>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
            integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
            crossorigin="anonymous"></script>
    <!-- Custom styles for this template -->
    <link href="/css/blog.css" rel="stylesheet"/>
</head>

<body>

<div class="blog-masthead">
    <div class="container">
        <nav class="nav blog-nav">
            <a class="nav-link " href="/">Release</a>
            <a class="nav-link" href="doc">Documentation</a>
            <a class="nav-link active" href="getting-started">Getting Started</a>
            <a class="nav-link " href="about">About</a>
        </nav>
    </div>
</div>

<div class="blog-header">
    <div class="container">
        <h1 class="blog-title">Austrlian Statistics API</h1>
        <p class="lead blog-description">An user-friendly API for retail and export data.</p>
    </div>
</div>

<div class="container">

    <div class="row">

        <div class="col-sm-8 blog-main">
            <div class="blog-post">
                <h2 class="blog-post-title">Getting Started</h2>
                <p class="blog-post-meta"> A quick starting guide to use our API</p>
                <p class="lead">Australian statistics API</p>
                <p>The Australian statistics API will be able to provide firms with relevant statistics,
                    based upon various parameters such as area, categories, Region and Time. It takes HTTP GET request
                    to <a href="http://45.76.114.158/api">http://45.76.114.158/api </a> then it parses the request and
                    returns a JSON.</p>
                <p>
                    We have very good documentation and examples for you to look at
                    <a href="http://45.76.114.158/doc/#get-retail-data">here </a>.
                </p>

                <p class="lead">
                    A simple Example
                </p>
                <p>request</p>
                <pre><p>http://45.76.114.158/api?StatisticsArea=Retail&State=NSW&Category=DepartmentStores&startDate=2013-12-01&endDate=2014-01-01</p></pre>
                <p>This URL requests the Department Stores retail data from 2013-12-01 to 2014-01-01.</p>
                <p>response</p>
                <pre><p>{
   "header":{
      "status":"success"
   },
   "data":{
      "MonthlyRetailData":[
         {
            "RegionalData":[
               {
                  "State":"NSW",
                  "Data":[
                     {
                        "Date":"2013-12-31",
                        "Turnover":883.5
                     },
                     {
                        "Date":"2014-01-31",
                        "Turnover":473.5
                     }
                  ]
               }
            ],
            "RetailIndustry":"DepartmentStores"
         }
      ]
   }
}</p>
                </pre>
                <p>Note that all data are in months.</p>


            </div><!-- /.blog-post -->

        </div><!-- /.row -->

    </div><!-- /.container -->

    <footer class="blog-footer">
        <p>TeamRocket SENG3011 @ UNSW </p>
        <p>
            <a href="#">Back to top</a>
        </p>
    </footer>
</div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
            integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"
            crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
            integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
            crossorigin="anonymous"></script>

</body>
</html>
