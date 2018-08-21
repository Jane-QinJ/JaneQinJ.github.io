# Jane-QinJ.github.io
<html>
	<head>
    	<title></title>
        <style type="text/css">
            *{
            	border: none;
                font-family: 'Open Sans' sans-serif;
                margin: 0;
                padding: 0;
            
            }
            
            h1 {
            	color: #495678;
                font-size: 30px;
                margin-top: 20px;
                padding-top: 50px;
                display: block;
                text-align: center;
                text-decoration: none;
            }
            
            form{
            	background-color: #495678;
                box-shadow: 4px 4px #3d4a65;
                margin: 40px auto;
                padding: 40px 0 30px 40px;
                width: 280px;
            }
            .btn{
            	outline: none;
                cursor: pointer;
                font-size: 20px;
                height: 45px;
                margin: 5px 0 5px 10px;
                width: 45px;
            }
            .btn:first-child{
            	margin: 5px 0 5px 10px;
            }
            .btn,#display, form{
            	border-radius: 25px;
            }
            
            #display{
            	outline: none;
                background-color: #98d1dc;
                box-shadow: inset 6px 6px 0px #3facc0;
                color: #dededc;
                font-size: 20px;
                height: 47px;
                text-align: right;
                width: 115px;
                padding-right: 10px;
                margin-left: 5px;
            
            }
            
            .number{
            	background-color: #72778b;
                box-shadow:0 5px #5f6680;
                color: #dededc;
                
            
            }
            .number:active{
            	box-shadow: 0 2px #5f6680;
            
            }
            .operator{
            	background-color: #dededc;
                box-shadow: 0 5px #bebebe;
                color: #72778b;
            
            }
            .operator:active{
            	box-shadow: 0 2px #bebebe;
            }
            
            .other{
            	background-color: #e3844c;
                box-shadow: 0 5px #e76a3d;
                color: #dededc;
            }
            .other:active{
            	box-shadow: 0 2px #e76a3d;
            }
            
        </style>
    </head>
    <body>
    	<h1>HTML, CSS, JavaScript 计算器</h1>
        <form>
        	<input type="button" id="clear" class="btn other" value="C">
        	<input type="button" id="delete" class="btn other" value="D">
            <input type="text" id="display">
            	<br>
            <input type="button" class="btn number" value="7" onclick="get(this.value)">
            <input type="button" class="btn number" value="8" onclick="get(this.value)">
            <input type="button" class="btn number" value="9" onclick="get(this.value)">
            <input type="button" class="btn operator" value="+" onclick = "get(this.value)">
            <br>
            <input type="button" class="btn number" value="4" onclick="get(this.value)">
            <input type="button" class="btn number" value="5" onclick="get(this.value)">
            <input type="button" class="btn number" value="6" onclick="get(this.value)">
            <input type="button" class="btn operator" value="*" onclick="get(this.value)">
            <br>
            <input type="button" class="btn number" value="1" onclick="get(this.value)">
            <input type="button" class="btn number" value="2" onclick="get(this.value)">
            <input type="button" class="btn number" value="3" onclick="get(this.value)">
            <input type="button" class="btn operator" value="-" onclick="get(this.value)">
            <br>
            <input type="button" class="btn number" value="0" onclick="get(this.value)">
            <input type= "button" class="btn operator" value="." onclick="get(this.value)">
            <input type="button" class="btn operator" value="/" onclick="get(this.value)">
            <input type = "button" class="btn other" id="cal" value="=">
        </form>
        <p align="center" id = "time"></p>
        
        
    </body>
</html>
