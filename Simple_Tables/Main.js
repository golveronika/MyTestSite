
$(function() {

    ShowSimpleTable();

});



function ShowSimpleTable() {

	var params_1 = 
	{
		"primary_key" : "id_restaurant",
		"editable" : ["name","address","id_location", "type"],
		"hrefs": ["del","add"],
		"default": ["name","typing", "location", "address"],
		"panel": ["New","Edit", "Del", "Hide", "Search"],
		"hiding_columns" : ["id_restaurant","type","id_location"],
		"selectable" : { "id_location": { column_caption: "location", arr_values:[]},
					"type": { column_caption: "typing", 
							arr_values: {"key": ["Fast Food","Bar","Luxuary", "Cafeteria", "Buffet", "Asian food", "Special"], 
										"value_select": ["Fast Food","Bar","Luxuary", "Cafeteria", "Buffet", "Asian food", "Special"]} }}
		
	};

	var params_2 = 
	{
		"primary_key" : "id_menu",
		"editable" : ["name","price","consist"],
		"hrefs": ["del","add"],
		"panel": ["New","Edit", "Del", "Hide"],
		"hiding_columns" : ["id_menu","id_restaurant"],
		"default": ["name","price","consist"],
		"reference" :  { key:"id_restaurant", parent_key:"id_restaurant", parent_container:"#restaurants_table"}
	};

	var params_3 = 
	{
		"primary_key" : "id_review",
		"hrefs": ["del"],
		"panel": ["New", "Del", "Search"],
		"hiding_columns" : ["id_review","id_restaurant","rate"],
		"default": ["username","Rating","Comment"],
		"reference" :  { key:"id_restaurant", parent_key:"id_restaurant", parent_container:"#restaurants_table"},
		"selectable" : { "rate": { column_caption: "Rating", 
						arr_values: {"key": ["0","1","2","3","4"], 
									 "value_select": ["Disgusting","Вad","Normally","Good","Wonderful"]} }}
	
	};

	var ajax = new XMLHttpRequest();
	var asynchron = true;
	ajax.open("GET","Tables_temp.php?action=getdata",asynchron);
	ajax.send(); 


	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    var data = JSON.parse(this.responseText);

		    	params_1["selectable"]["id_location"].arr_values = data["location"];
				CreateTable("#restaurants_table",data["restaurants"], params_1);
				CreateTable("#menu_table",data["menu"], params_2);
				CreateTable("#reviews_table",data["reviews"], params_3);
		}
	}

}

function Table_DeleteRow(container, primary_key, primary_val) {

	var table_name = "";
	switch(container) {
	  case "#restaurants_table": table_name = "restaurants"; break;
	  case "#menu_table": table_name = "menu"; break;
	  case "#reviews_table": table_name = "reviews"; break;
	}

	var ajax = new XMLHttpRequest();
	var asynchron = true;
	ajax.open("GET","Tables_temp.php?action=delrow&table_name="+table_name+"&primary_key="+primary_key+"&primary_val="+primary_val,asynchron);
	ajax.send(); 

	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    var response = this.responseText;
		    //console.log(response);
		    if (response == "err") alert("Error!");
		    else ShowSimpleTable();
		}
	}

}

function Table_AddRow(container, params) {

	var table_name = "";
	switch(container) {
	  case "#restaurants_table": table_name = "add_restaurants"; break;
	  case "#menu_table": table_name = "add_menu"; break;
	  case "#reviews_table": table_name = "add_reviews"; break;
	}

	var ajax = new XMLHttpRequest();
	var asynchron = true;
	ajax.open("GET","Tables_temp.php?action="+table_name+"&"+params,asynchron);
	ajax.send(); 

	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    var response = this.responseText;
		    //console.log(response);
		    if (response == "err") alert("Error!");
		    else ShowSimpleTable();


		}
	}

}

function Table_UpdateRow(container,params) {


	var table_name = "";
	switch(container) {
	  case "#restaurants_table": table_name = "upd_restaurants"; break;
	  case "#menu_table": table_name = "upd_menu"; break;
	}

	//console.log(params);

	var ajax = new XMLHttpRequest();
	var asynchron = true;
	ajax.open("GET","Tables_temp.php?action="+table_name+"&"+params,asynchron);
	ajax.send(); 

	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    var response = this.responseText;
		    //console.log(response);
		    if (response == "err") alert("Error!");
		    else ShowSimpleTable();
		}
	}


}


function Table_EditRow(container, colunm, val , primary_key, primary_val) {

	var table_name = "";
	switch(container) {
	  case "#restaurants_table": table_name = "restaurants"; break;
	  case "#menu_table": table_name = "menu"; break;
	}

	var ajax = new XMLHttpRequest();
	var asynchron = true;
	ajax.open("GET","Tables_temp.php?action=edittable&table_name="+table_name+"&colunm="+colunm+"&value="+val+"&primary_key="+primary_key+"&primary_val="+primary_val,asynchron);
	ajax.send(); 

	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    var response = this.responseText;
		    //console.log(response);
		}
	}



}

function Table_CopyRow(container, keys, values, new_row) {

	var table_name = "";
	switch(container) {
	  case "#restaurants_table": table_name = "restaurants"; break;
	  case "#menu_table": table_name = "menu"; break;
	}

	var ajax = new XMLHttpRequest();
	var asynchron = true;
	ajax.open("GET","Tables_temp.php?action=copyrow&table_name="+table_name+"&keys="+keys+"&values="+values,asynchron);
	ajax.send(); 


	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    var response = this.responseText;
		    if (response == "err") alert("Error!");
		    else $(new_row).find("td.primary").text(response);
		}
	}

}


function RecoverDB() {

	if (confirm("Do you really want to reload the database? All changes will be lost.")) {
		var ajax = new XMLHttpRequest();
		var asynchron = true;
		ajax.open("GET","Tables_temp.php?action=recover",asynchron);
		ajax.send(); 

		ajax.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			    var response = this.responseText;
			    ShowSimpleTable();
			}
		}

	}

}