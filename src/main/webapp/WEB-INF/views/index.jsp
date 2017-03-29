<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="static/image/favicon.png">

    <title>Australian Statistics - TeamRocket Dev.</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    <!-- Custom styles for this template -->
    <link href="static/css/blog.css" rel="stylesheet">
  </head>

  <body>

    <div class="blog-masthead">
      <div class="container">
        <nav class="nav blog-nav">
          <a class="nav-link active" href="#">Release</a>
          <a class="nav-link" href="#">Documentation</a>
          <a class="nav-link disabled" href="#">Quick Start</a>
          <a class="nav-link" href="about">About</a>
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
            <h2 class="blog-post-title">Release 1.0</h2>
            <p class="blog-post-meta">Marck 28, 2017 by <a href="#">TeamRocket</a></p>

            <p>
              This is the release for prototype one. We sucessfully implemented the API from specification.
              Currently we are focusing on effeiciency and accuracy of our backend and improving our documentation.
            </p>

            <p>
              You may find instructions to use our API and integrate the module with your own system from our <a href="http://45.76.114.158/doc">Documentation </a>. The input parameters are exactly like specification says.For output, we introduced headers to indicate errors.
            </p>

            <p>
              The test script was made by one of our team mate and here is it  <a href="http://45.76.114.158/doc">File</a>
            </p>

            <p>Bug Fix</p>
            <ul>
              <li>Fix all reported unhandled exceptions.</li>
              <li>Fix error when parse state to export data.</li>
            </ul>

            <p>New Fetures</p>
            <ul>
              <li>If no data are in our databse, API returns you a error message instead of giving 404.</li>
            </ul>
          </div><!-- /.blog-post -->

          <div class="blog-post">
            <h2 class="blog-post-title">Release 0.12</h2>
            <p class="blog-post-meta">Marck 26, 2017 by <a href="#">TeamRocket</a></p>

            <p>Bug Fix</p>
            <ul>
              <li>Now Merchandise Export data can be correctly requested.</li>
            </ul>

            <p>New Fetures</p>
            <ul>
              <li>Introducing header of response JSON. When the API finds errors in input parameter or our database down, we would give you an indication in the header. for more details, please check the new documentation. </li>
              <li>Introducing exception hanlding of our API. The API now always returns you a JSON fomat. Note: There are still unkown exceptions and we are doing heavy tests on this. </li>
              <li>Introducing log file generation of our API. When you reports bugs , we now can check logs to see what happens. </li>
            </ul>
          </div><!-- /.blog-post -->


          <div class="blog-post">
            <h2 class="blog-post-title">Release 0.11</h2>
            <p class="blog-post-meta">Marck 24, 2017 by <a href="#">TeamRocket</a></p>

            <p>Bug Fix</p>
            <ul>
              <li>Fix OtherManucacturedArticles category as specification updated. </li>
            </ul>

            <p>New Fetures</p>
            <ul>
              <li>Introducing <a href="http://45.76.114.158/doc">Documentation </a>.You may find everything related to the API input parameters here and we will keep it updating as we release new features. </li>
            </ul>
          </div><!-- /.blog-post -->

          <div class="blog-post">
            <h2 class="blog-post-title">Pre Release 0.1</h2>
            <p class="blog-post-meta">Marck 23, 2017 by <a href="#">TeamRocket</a></p>

            <p>Hello, welcome to the teamRocket home page</p>
            <p>API link <a href="http://45.76.114.158/api">http://45.76.114.158/api </a>  You may try it with an <a href="http://45.76.114.158/api?StatisticsArea=Retail&State=NSW&Category=ClothingFootwareAndPersonalAccessory,DepartmentStores&startDate=2013-01-01&&endDate=2014-01-01"> example usage</a>  </p>
            <p>The Australian statistics APi we developed currently works without exceptions handling and log file generation. So when you give some parameters it does not understand, it won't return you a JSON. </p>
            <p> The parameters you may use can be found in the  <a href="https://webcms3.cse.unsw.edu.au/static/uploads/course/SENG3011/17s1/12e2001fa2ebeef1e92aee56fe253667785387e9407869670379c05fe0f78718/AustralianStatisticsAPI_V1_3.pdf"> specification </a> provided by SENG3011. We will build a API documentation in a few days from 23rd March.</p>
            <p align="right">Cheers and Enjoy</p>
            <p align="right">23/03/2017</p>

          </div><!-- /.blog-post -->

          <nav class="blog-pagination">
            <a class="btn btn-outline-primary" href="#">Older</a>
            <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
          </nav>

        </div><!-- /.blog-main -->

        <div class="col-sm-3 offset-sm-1 blog-sidebar">
          <div class="sidebar-module sidebar-module-inset">
            <h4>About</h4>
            <p>TeamRocket is a dev team formed in SENG3011 @ UNSW. We are Software engineers that focus on web application developmenet.. </p>
          </div>
          <div class="sidebar-module">

          </div>
          <div class="sidebar-module">
            <h4>Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="https://github.com/JHXSMatthew/SENG3011">GitHub</a></li>
            </ol>
          </div>
        </div><!-- /.blog-sidebar -->

      </div><!-- /.row -->

    </div><!-- /.container -->

    <footer class="blog-footer">
      <p>TeamRocket   SENG3011  @ UNSW </p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
  </body>
</html>
