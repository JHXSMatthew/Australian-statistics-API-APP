import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';


class Usage extends Component {

  render(){
    return (

      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            Introduction
          </div>
          <div className="card-block">
            Our Australian statistics API can be accessed from programming language that supports http requests. We accept both GET and POST request.
            The parameters can be either in the URL or POST body. When you put parameters in POST body, it can be URL parameter form or JSON. But <b>don't combine</b> those ways together (i.e. use partial JSON and partial URL parameter). The response will always be in JSON format. Once our API replies JSON String to
            you. The JSON String can be parsed into a JSON object in your programming language. If we did not cover the programming language you use and you failed to access our API, please <a href='mailto:z5055838@student.unsw.edu.au?Subject=StatisiticsAPIissue' target='_top'>let our know</a>.
            <br/>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Example 1-JQuery
          </div>
          <div className="card-block">
            You may use front end programming language to access our API. We have opened the API to any third party so no need to worry about CORS issue.
            code example: <br/>
             <a className="badge badge-pill badge-success" href='https://codepen.io/JHXSMatthew/pen/OmJvYQ'>Try it</a>

            <SyntaxHighlighter language='javascript' style={docco}>
              {
                "$.post(\"http://45.76.114.158/api/\",\n"+
        "        {\n"+
        "          StatisticsArea: \"Retail\",\n"+
        "          State: \"NSW\",\n"+
        "          Category: \"DepartmentStores\",\n"+
        "          startDate: \"2013-12-01\",\n"+
        "          endDate: \"2014-01-01\",\n"+
        "\t\t  pretty: true\n"+
        "        },\n"+
        "        function(data,status){\n"+
        "            console.log(\"Data: \" + JSON.stringify(data,null,2) + \"\\nStatus: \" + status);\n"+
        "\t\t\talert(JSON.stringify(data,null,2))\n"+
        "\t\t\t$(\"div\").text(status + \" check console!\")\n"+
        "        });"
              }
            </SyntaxHighlighter>
            You may simply append those parameters to body or you may append them as a single JSON String in your POST body.
            }
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            Example 2-Java
          </div>
          <div className="card-block">
            You may any programming language as far as they support http GET/POST. <br/>
            <SyntaxHighlighter language='java' style={docco}>
              {
                "  public static void main(String[] args)\n"+
                    "  {\n"+
                    "   \tString url = \"http://45.76.114.158/api/\";\n"+
                    "\tURL obj = new URL(url);\n"+
                    "\tHttpsURLConnection con = (HttpsURLConnection) obj.openConnection();\n"+
                    "\n"+
                    "\t//add reuqest header\n"+
                    "\tcon.setRequestMethod(\"POST\");\n"+
                    "\tcon.setRequestProperty(\"User-Agent\", USER_AGENT);\n"+
                    "\tcon.setRequestProperty(\"Accept-Language\", \"en-US,en;q=0.5\");\n"+
                    "\n"+
                    "\tString urlParameters = \"StatisticsArea=Retail&State=NSW&Category=DepartmentStores&startDate=2013-12-01&endDate=2014-01-01&pretty=true\";\n"+
                    "\t//alternatively, you can use a single JSON String\n"+
                    "    \n"+
                    "\t// Send post request\n"+
                    "\tcon.setDoOutput(true);\n"+
                    "\tDataOutputStream wr = new DataOutputStream(con.getOutputStream());\n"+
                    "\twr.writeBytes(urlParameters);\n"+
                    "\twr.flush();\n"+
                    "\twr.close();\n"+
                    "\n"+
                    "\tint responseCode = con.getResponseCode();\n"+
                    "\tSystem.out.println(\"\\nSending 'POST' request to URL : \" + url);\n"+
                    "\ttSystem.out.println(\"Post parameters : \" + urlParameters);\n"+
                    "\tSystem.out.println(\"Response Code : \" + responseCode);\n"+
                    "\n"+
                    "\tBufferedReader in = new BufferedReader(\n"+
                    "\t        new InputStreamReader(con.getInputStream()));\n"+
                    "\tString inputLine;\n"+
                    "\tStringBuffer response = new StringBuffer();\n"+
                    "\n"+
                    "\twhile ((inputLine = in.readLine()) != null) {\n"+
                    "\t\tresponse.append(inputLine);\n"+
                    "\t}\n"+
                    "\tin.close();\n"+
                    "\n"+
                    "\t//print result\n"+
                    "\tSystem.out.println(response.toString());\n"+
                    "\n"+
                    "  }"
              }
            </SyntaxHighlighter>
          </div>
        </div>


        <div className="card">
          <div className="card-header">
            Example 3-Perl Script
          </div>
          <div className="card-block">
            Moreover, you can access our API by any kind of scripting language as far as it supports http POST/GET. here is an example from our test program in Perl. <br/>
          <SyntaxHighlighter language='perl' style={docco}>
              {
                "#!/usr/bin/perl -w\n"+
        "# My first script\n"+
        "\n"+
        "use strict; \n"+
        "use warnings; \n"+

        "use LWP::Simple;\n"+
          "\n"+
                "($area, $state, $category, $startDate, $endDate) = @_;\n"+
        "$url = \"http://45.76.114.158/api?StatisticsArea=$area&State=$state&Category=$category&startDate=$startDate&&endDate=$endDate\";\n"+
        "$data = get($url);\n"+
        "$string;\n"+
        "if (defined $data) {\n"+
        "\t#print \"Found page...\\n\";\n"+
        "\t$string = \"SUCCESS - $area - $state - $category - $startDate - $endDate\\n\";\n"+
        "\tprint $data;\n"+
        "} else {\n"+
        "\t#print \"Error detected...\\n\";\n"+
        "\t$string = \"ERROR - $area - $state - $category - $startDate - $endDate\\n\";\n"+
        "}\n"+
        "print $string;\n"+
        "print \"URL = $url\\n\\n\";"
              }
            </SyntaxHighlighter>
          </div>
        </div>
      </div>


    )
  }

}


export default Usage
