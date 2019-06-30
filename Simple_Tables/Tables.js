
$(function() {
    $.expr[':'].textEquals = $.expr.createPseudo(function(arg) {
	   	return function( elem ) {
	    	return $(elem).text().match("^" + arg + "$");
	    };
	});

	$.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
	    return function( elem ) {
	        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
    });


});



$(document).click( function(event)	{
 	event.stopPropagation();
	if ($(event.target).closest(".TB_modal").length == 0) {
	 	$(".TB_modal").remove();
	} 
});

function CreateTable(container , data, params) {

	if (data) {

	var column_names =  get_columns_names(data[0], params);
	var table_id = "table_" + container.substr(1,container.length-1);
	var body_id = "tbody_"+container.substr(1,container.length-1);
	var sticky_top = " class='sticky_th' ";

	if (params) {
		if ("panel" in params) {
			sticky_top = " class='sticky_th_panel' ";
		}
	}

	var column_length = column_names.length;
	var html = "<table id='"+table_id+"' class='table_sort'>";
	//Headers
		  html += "<thead>";
		  	html += "<tr class='thead'>";
			for (var i = 0; i < column_names.length; i++){
				 html += "<th scope='col' onclick='sorting("+body_id+", "+(i)+", event)' "+sticky_top+">"+ column_names[i] + "</th>";
			}
		    html += "</tr>";
		  html += "</thead>";

	//Body
		 html += "<tbody id='"+body_id+"'>";
		 for (var i = 0; i < data.length; i++) {
		 	html += "<tr class='tbody'>";
		 		for (var j = 0; j < column_names.length; j++) {
		 			html += CT_row(container, params, column_names[j], data[i][column_names[j]], data[i]);
		 		}
		 	html += "</tr>";
		 
		 }
		 html += "</tbody>";
	     html += "</table>";

	var panel_content_ADD = "";
	var panel_content_EDIT = "";

	panel_content_ADD = CT_addcontent(params, column_names,container, "ADD");
	panel_content_EDIT = CT_addcontent(params, column_names,container, "EDIT");

	var panel = CT_panel(params, container, panel_content_ADD, panel_content_EDIT);

	html = panel + html;

	$( container ).empty();
	$( container ).append(html);

	CT_editable(params, container);
	CT_referenses(params, container);
	CT_selectable(params, container);
	CT_column_hide(params, container);

	} else {
		if (params) {
			if ("default" in params) {
				if (params["default"].length != 0) {

					panel_content_ADD = CT_addcontent(params, params["default"],container, "ADD");
					panel_content_EDIT = CT_addcontent(params, params["default"],container, "EDIT");
					var panel = CT_panel(params, container, panel_content_ADD, panel_content_EDIT);
					$( container ).empty();
					$( container ).append(panel);

					CT_editable(params, container);
					CT_referenses(params, container);
					CT_selectable(params, container);
					CT_column_hide(params, container);
				}
			}

		}
	}

	$( container + " table tr.tbody" ).click(function() {
		$( container + " table tr.tbody" ).removeClass("active_row");
		$(this).addClass("active_row");
		$(container + " .top_content_table .EditBtn").removeAttr("disabled");

	});

}

function CT_addcontent(params, column_name, container, mode) {

	var selected = false;
	var html = "";

	if (mode == "ADD") {
		html += "<span class='caption_add'>Create new row</span>";
		html += "<form id='form_"+container.replace(/^#/g,"")+"' data-mode='add' onsubmit='return TB_PanelRow_submt(event);'>";		
	} 

	if (mode == "EDIT") {
		html += "<span class='caption_add'>Edit row</span>";
		html += "<form id='form_"+container.replace(/^#/g,"")+"' data-mode='edit' onsubmit='return TB_PanelRow_submt(event);'>";	
	}

    html += "<div class='content_add'>";

	for (var i = 0; i < column_name.length; i++) {

		if (column_name[i] == "action") continue;
	
		if (params) {
			if ("primary_key" in params) {
		 		if (column_name[i] == params["primary_key"]) {
		 			continue;
			 	}
			}

			if ("reference" in params) {
				if (params["reference"].key == column_name[i]) {
					continue;
				}
			}
		

			if ("selectable" in params) {
				for (elem in params["selectable"]) {
					if (elem == column_name[i]) {
						selected = true;
					}


					if (params["selectable"][elem].column_caption == column_name[i]) {

						 sel_values = params["selectable"][elem].arr_values;

						 var new_container = 'select_add_'+column_name[i];

						 html += "<label class='row_modal' for='"+column_name[i]+"_add'>"+column_name[i]+":</label>";

						 html += "<select name='"+column_name[i]+"_add' id='"+elem+"_add'>";

						 if (sel_values) 
							 for (var j = 0; j < sel_values.key.length; j++) {
							  	html += "<option value='"+sel_values.key[j]+"'>"+sel_values.value_select[j]+"</option>";
							  }
						 html += "<option value='null' selected>-</option>";
						 html += "</select></br>";

						 selected = true;
					}
				}
			}
		}

		if (!selected) {

			if ("default" in params) {
				if (params["default"].indexOf(column_name[i]) == -1) {
					continue;
				}
			} else if ("editable" in params) {
				if (params["editable"].indexOf(column_name[i]) == -1) {
					continue;
				}
			}  



			html += "<label class='row_modal' for='"+column_name[i]+"_add'>"+column_name[i]+":</label><input id='"+column_name[i]+"_add' type='text'/><br>";
		}

		selected = false;
	}

	if (params) {
		if ("reference" in params) {
			var parent_container = params["reference"].parent_container;
			var parent_key = params["reference"].parent_key;
			html += "<input type='hidden' id='"+parent_key+"_add' data-cont='"+parent_container+"' value='"+parent_container+"'>";
		}
	}

	html += "</div>";

	if (mode == "ADD") {
		html += "<div class='caption_bottom_add'><button id='create_add'>Create</button></div>"		
	} 

	if (mode == "EDIT") {
		html += "<div class='caption_bottom_add'><button id='create_add'>Update</button></div>"
	}

	html += "</form>";

	return html;

}



function CT_panel(params, container, panel_content_ADD, panel_content_EDIT) {

	var html = "";

	if (params) {
		if ("panel" in params) {
			html += "<div class='top_content_table'>";

			for (var i = 0; i < params["panel"].length; i++) {

				if (params["panel"][i] == "New") {
					html += "<button onclick='AddRowButton(\""+container+"\", \""+escapeHtml(panel_content_ADD)+"\", \"ADD\")'>New</button>";
				}

				if (params["panel"][i] == "Edit") {
					html += "<button onclick='AddRowButton(\""+container+"\", \""+escapeHtml(panel_content_EDIT)+"\", \"EDIT\")' disabled class='EditBtn'>Edit</button>";
				}

				if (params["panel"][i] == "Del") {
					
					var parent_container = "";
					var parent_key = "";
					
					if ("reference" in params) {
						parent_container = params["reference"].parent_container;
						parent_key = params["reference"].parent_key;

					}

					html += "<button onclick='DelRowButton(\""+container+"\", \""+parent_container+"\", \""+parent_key+"\")' disabled class='EditBtn'>Delete</button>";
				}

				if (params["panel"][i] == "Hide") {
					html += "<button onclick='HideColumnButton(\""+container+"\")'>Hide columns</button>";
				}

				if (params["panel"][i] == "Search") {
					html += "<input class='srch_input' oninput='SearchInTable(this);' type='text' data-cont='"+container+"' placeholder='Search...'>";
				}

			} 
			html += "</div>";
		}
	}

	return html;

}

function SearchInTable(elem) {

	var container = $(elem).attr("data-cont");

	$(container).find("table tbody tr").hide();
	$(container).find("table tbody tr").filter( ":Contains("+elem.value+")" ).show();

}

function HideColumnButton(container) {

	event.preventDefault();

	var html = "";

	html += "<div class='TB_modal'>";
	html += "<span class='caption_add'>Hide columns</span>";
	html += "<form id='form_"+container.replace(/^#/g,"")+"' data-mode='del' onsubmit='return TB_HideColumn_submt(event);'>";
	html += "<div class='content_add'>";	

		$(container).find("table tr.thead th").each(function(){

			if ($(this).is(":visible"))
				html += "<label class='check_hide' for='hide_"+$(this).text()+"'><input type='checkbox' id='hide_"+$(this).text()+"' checked>"+$(this).text()+"</label></br>";
			else 
				html += "<label class='check_hide' for='hide_"+$(this).text()+"'><input type='checkbox' id='hide_"+$(this).text()+"'>"+$(this).text()+"</label></br>";

		});

	html += "</div>";
	html += "<div class='caption_bottom_add'><button id='HideColumns'>Hide</button></div>"
	html += "</form>";
	html += "</div>";

	if ($(".TB_modal").length != 0) {
		$(".TB_modal").remove();
	}

	$( container ).append(html);

	event.stopPropagation();

}

function DelRowButton(container, parent_container, parent_key) {

	event.preventDefault();

	var html = "";

	html += "<div class='TB_modal'>";
	html += "<span class='caption_add'>Delete row</span>";
	html += "<form id='form_"+container.replace(/^#/g,"")+"' data-mode='del' onsubmit='return TB_PanelRow_submt(event);'>";	

		html += "<span class='text_modal'>Are you sure you wish to delete this row?</span>"

		if (parent_container != ""){

			var par_key_val = $(parent_container).find("table tr.active_row td.primary").text();
			html += "<input type='hidden' id='"+parent_key+"_del' data-cont='"+parent_container+"' value='"+par_key_val+"'>";
		}

	html += "<div class='caption_bottom_add'><button onclick='$(\".TB_modal\").remove(); return false;'>No</button><button id='create_add'>Yes</button></div>"
	html += "</form>";
	html += "</div>";


	if ($(".TB_modal").length != 0) {
		$(".TB_modal").remove();
	}

	$( container ).append(html);

	event.stopPropagation();

}


function AddRowButton(container,panel_content, mode) {

	if ($(".TB_modal").length != 0) {
		$(".TB_modal").remove();
	}

	event.preventDefault();
	var div = "<div class='TB_modal'>"+panel_content+"</div>";
	$( container ).append(div);


	if ($(".TB_modal input[type=hidden]").length != 0) {

		parent_container = $(".TB_modal input[type=hidden]").val();
		parent_key = $(".TB_modal input[type=hidden]").prop("id").replace(/_add/g,"");
		var id_parent = $( parent_container + " table thead th:textEquals('"+parent_key+"')").index();
		id_parent = $(parent_container + " tr.active_row").find('td:eq('+id_parent+')').text();
		$(".TB_modal input[type=hidden]").val(id_parent);

	}

	if (mode == "EDIT") {

		var active_row = $(container + " table tr.active_row");
		var active_column = [];

		$(container + " table tr.thead th").each(function(){
		   active_column[$(this).text()] = $(this).index();
		});

		$(".TB_modal").find("input").each(function(){
			column = $(this).prop("id").replace(/_add/g,"");
			if (column in active_column) {
				$(this).val(active_row.find("td:eq("+active_column[column]+")").text());
			}
		});

		$(".TB_modal").find("select").each(function(){

			column = $(this).prop("id").replace(/_add/g,"");
			if (column in active_column) {
				$(this).val(active_row.find("td:eq("+active_column[column]+")").text());
			}
		});

	}

	event.stopPropagation();
}



function CT_column_hide(params , container) {

	if (params) {
		if ("hiding_columns" in params) {
			for (var i = 0; i < params["hiding_columns"].length; i++) {  
				var id = $( container + " th:textEquals("+params["hiding_columns"][i]+")");
				$(container + " table tbody tr").find('td:eq('+id.index()+')').hide(); 
				id.hide();
			}
		}
	}
}

function CT_selectable(params, container) {

 	var editable = false;
	if (params) {
		if  ("selectable" in params) {
			for (elem_val in params["selectable"]) {  

			    editable = false;
				if ("editable" in params) {
					if (params["editable"].indexOf(String(elem_val)) != -1) 
						editable = true;
				} 
				
			if (params["selectable"][elem_val].arr_values && editable) 
				$(container + ' td.selectable_'+elem_val).dblclick(function(e) {

					var elem_val = $(event.target).attr('class').substr(11);
					var sel_values = params["selectable"][elem_val].arr_values;

					var t = e.target || e.srcElement; 
					var elm_name = t.tagName.toLowerCase(); 
					//if it's an select or select->option, we do nothing
					if(elm_name == 'select' || elm_name == 'option') {
						return false;
					}
					var primary_val = $(this).parent('tr').find('td.primary').text();
					var primary_key = $(this).parent('tr').find('td.primary').index();
				    primary_key = $( container ).find('th:eq('+primary_key+')').text();

					var prevval = $(this).html(); 
					var old_id = $( container + " th:contains("+elem_val+")" ).index();
					old_id = $(this).parent('tr').find('td:eq('+old_id+')');

					//Build select list 
					var new_container = 'select_'+elem_val;

					var html = "<select name='"+new_container+"' id='"+new_container+"'>";


					for (var i = 0; i < sel_values.key.length; i++) {
						if (old_id.text() == sel_values.key[i]){
							html += "<option value='"+sel_values.key[i]+"' selected>"+sel_values.value_select[i]+"</option>";
						} else {
							html += "<option value='"+sel_values.key[i]+"'>"+sel_values.value_select[i]+"</option>";
						}
					}

						if (old_id.text() == "null")
							html += "<option value='null' selected>-</option>";
						else 
							html += "<option value='null'>-</option>";

						html += "</select>";

					//RENDER
					$(this).empty().append(html);
					$('#'+new_container).focus();  
					$(this).parent().addClass("active_row");


					$('#'+new_container).blur(function() {
						$(this).parent().parent().removeClass("active_row");
						var val = $(this).children('option:selected').text();
						$(this).parent().empty().html(val);
						var new_id = $(this).val();
						if (old_id.text() != new_id) {
							old_id.text(new_id);
							Table_EditRow(container, elem_val ,new_id, primary_key, primary_val);
						} 

					});

					$('#'+new_container).keyup(function(event){
					    if(event.keyCode == 13){
							$(this).parent().parent().removeClass("active_row");
							var val = $(this).children('option:selected').text();
							$(this).parent().empty().html(val);
							var new_id = $(this).val();
							if (old_id.text() != new_id) {
								old_id.text(new_id);
								Table_EditRow(container, elem_val ,new_id, primary_key, primary_val);
							}
					    }

					    if(event.keyCode == 27){
							$(this).parent().parent().removeClass("active_row");
							$(this).parent().empty().html(prevval);
					    }

					});	

				});

			}
		}
	}

}

function CT_referenses(params, container) {

	if (params) {
		if ("reference" in params) {
			$( container + " .top_content_table").hide();
			$( container + " table").hide();
			
			var parent_container = params["reference"].parent_container;
			var parent_key = params["reference"].parent_key;

			$( parent_container + " tr.tbody" ).click(function() {

				$( container + " .top_content_table").show();

				$( parent_container + " tr.tbody" ).removeClass("active_row");
				$(this).addClass("active_row");

				var id_parent = $( parent_container + " th:textEquals('"+parent_key+"')").index();
				id_parent = $(this).find('td:eq('+id_parent+')').text();
				var id_child = $(container + ' .'+params["reference"].key+':textEquals('+id_parent+')');

				if (id_child.text() != '') {
					$( container + " table").show();
					$(container + ' tr.tbody').hide();
					id_child.closest( "tr" ).show();
				} else {
					$( container + " table").hide();
				}		

				if (!$( container + " table tr.tbody.active_row" ).is(":visible")) {
					$( container + " table tr.tbody.active_row" ).removeClass("active_row");
					$(container + " .top_content_table .EditBtn").attr("disabled","disabled");
				}

			});
			

		}
	}


}

function get_columns_names(data_columns, params) {
	
	var columns =  Object.keys(data_columns);

	if (params) {
		if ("hrefs" in params) {
			if (params["hrefs"].length != 0) {
				columns.unshift('action');
			}
		}
		if  ("selectable" in params) {
			for (var i = 0; i < columns.length; i++) { 
				if ( columns[i] in params["selectable"] ) {
					columns.splice(i+1, 0 , params["selectable"][columns[i]].column_caption);
				}
			}
		}
	}

	return columns;

}


function CT_row(container, params , column_name, value, row) {

	var new_row = "<td>" + value + "</td>";
	var primary = false;

	if (params) {
		if ("hrefs" in params) {
			if (column_name == "action") {
				new_row = "<td>";
				for (var i = 0; i < params["hrefs"].length; i++) {  
					if (params["hrefs"][i] == "add")
						new_row += "<a href='#' title='Copy' onclick='Table_RowHrefCopy(event);'><i class='far fa-copy'></i></a>";
					if (params["hrefs"][i] == "del"){

						var parent_container, parent_key = "";
						if ("reference" in params) {
							 parent_container = params["reference"].parent_container;
							 parent_key = params["reference"].key;
						}


						new_row += "<a href='#' title='Delete' onclick='DelRowButton(\""+container+"\", \""+parent_container+"\", \""+parent_key+"\")'><i class='fas fa-trash-alt'></i></a>";
					}
				}
				new_row += "</td>";
			}
		}
		if ("primary_key" in params) {
			if (column_name == params["primary_key"]) {
				new_row = "<td class='primary'>" + value + "</td>";
				primary = true;
			}	
		}
		if ("editable" in params) {

			if (params["editable"].indexOf(column_name) != -1) {
				var edtbl = true;
				if  ("selectable" in params) {
					var sel = Object.keys(params["selectable"]);
					if (sel.indexOf(column_name) != -1) {
						edtbl = false;
						new_row = "<td>" + value + "</td>";
					}					
				}
				if (edtbl)	new_row = "<td class='editable'>" + value + "</td>";
			
			}
		}
		if ("reference" in params) {
			if (column_name == params["reference"].key) {
				if (primary)
					new_row = "<td class='primary "+params["reference"].key+"'>" + value + "</td>";
				else 
					new_row = "<td class='"+params["reference"].key+"'>" + value + "</td>";
			}
		}
		if ("selectable" in params) {
			for (elem in params["selectable"]) {  
				if (params["selectable"][elem].column_caption == column_name) {
			  		value = params["selectable"][elem].arr_values;	
					var R_ValueByKey = function(arr, value) {
						var res = "-"; 
						if (value) {						
							for (var i = 0; i < arr.key.length; i++) {
								if (arr.key[i] == value) {
									res = arr.value_select[i]
									break;
								}
							}
						}
						return res;
					}
					value = R_ValueByKey(value, row[elem]);
			  	    new_row = "<td class='selectable_"+elem+"'>" + value + "</td>";
			  	}
			}
		}
	}

	return new_row;

}

function Table_RowHrefCopy(e) {

	var container = "#" + $(e.target).closest('table').parent().attr('id');
	var keys = '';
	var values = '';


	$(e.target).closest("tr").find("td").not(".primary").each(function ( i ){

		var key = $( container ).find('th:eq('+$(this).index()+')').text(); 
		var selbl = String($(this).attr("class")).indexOf("selectable");
		if (key != "action" && selbl == -1) {

		var val = $(this).text();
		var regex = /[A-za-zА-яа-я]/g;
		if ((val.match(regex) || val == '') && val != 'null') {
			val = "'"+val+"'";
		}

		keys += ",`"+key+"`";
		values += ","+val;

		}

	});

	keys = keys.slice(1);
	values = values.slice(1);

	var new_row = $(e.target).closest("tr").clone(true);
	try {
		Table_CopyRow(container, keys, values, new_row);
	} catch(err) {
		console.log("error!");

	}

	$(new_row).insertAfter($(e.target).closest("tr"));

}


function CT_editable(params , container){
	if (params) {
		if  ("editable" in params) {

				$(container + ' td.editable').dblclick(function(e) {

					var colunm = $( container ).find('th:eq('+$(this).index()+')').text(); 
					var edited = false;

					var t = e.target || e.srcElement;
					var elm_name = t.tagName.toLowerCase(); 

					if(elm_name == 'input') {
						return false;
					}

					var primary_val = $(this).parent('tr').find('td.primary').text();
					var primary_key = $(this).parent('tr').find('td.primary').index();
					primary_key = $( container ).find('th:eq('+primary_key+')').text();

					var prevval = $(this).html();
					var html = "<input class='text_edit' type='text' value='"+prevval+"'/>";

					var col_width = $(this).width();

					$(this).empty().append(html);
					$(this).find("input.text_edit").width(col_width);
					
					$(this).find("input.text_edit").focus();
					$(this).find("input.text_edit").select();
					$(this).parent().addClass("active_row");

					$(container + " input.text_edit").blur(function() {
						$(this).parent().parent().removeClass("active_row");
						var val = $(this).val();
						$(this).parent().empty().html(val);
						if (val != prevval && !edited) {
							edited = true;
							Table_EditRow(container, colunm, val , primary_key, primary_val);
						}
					
					});

					$(container + " input.text_edit").keyup(function(event){
					    if(event.keyCode == 13){

					    	var indx = $(this).parent().index();
					    	var indx_last = $(this).closest("tr").find("td.editable:last").index();

					    	if (indx == indx_last) {
					    		$(this).parent().parent().removeClass("active_row");
					    	} else {
					    		$(this).closest("td").nextAll("td.editable:eq(0)").trigger('dblclick');
					    	}

							var val = $(this).val();
							$(this).parent().empty().html(val);
							
						    if (val != prevval && !edited) {
						       edited = true;
							   Table_EditRow(container, colunm, val , primary_key, primary_val);
						    }
							
					    }

					    if(event.keyCode == 27){
							$(this).parent().parent().removeClass("active_row");
							$(this).parent().empty().html(prevval);
					    }

					});	

				});
		}
	}
}

var index;      // cell index
var toggleBool; // sorting asc, desc 
var toggleMode = 0; // sorting asc, desc 


function sorting(tbody, index, event){

    $(event.target).parent().find("th").removeClass("sorted_up sorted_down");

    if(toggleMode == 0){
        toggleMode = 1;
        $(event.target).addClass("sorted_down");

    }else if (toggleMode == 1) {
         toggleMode = 2;
        $(event.target).addClass("sorted_up");
    } else if (toggleMode == 2) {
         toggleMode = 0;
         var primary_key = $(event.target).parent('tr').parent('thead').parent('table').find('tbody tr td.primary').first().index();
         index = primary_key;

    }


    this.index = index;
    var datas= new Array();
    var tbodyLength = tbody.rows.length;
    for(var i=0; i<tbodyLength; i++){
        datas[i] = tbody.rows[i];
    }

    datas.sort(compareCells);
    for(var i=0; i<tbody.rows.length; i++){
        // rearrange table rows by sorted rows
        tbody.appendChild(datas[i]);
    }   
}


function compareCells(a,b) {
    var aVal = a.cells[index].innerText;
    var bVal = b.cells[index].innerText;

    aVal = aVal.replace(/\,/g, '');
    bVal = bVal.replace(/\,/g, '');

    if(toggleMode == 2){
        var temp = aVal;
        aVal = bVal;
        bVal = temp;
    } 

    if(aVal.match(/^[0-9]+$/) && bVal.match(/^[0-9]+$/)){
        return parseFloat(aVal) - parseFloat(bVal);
    }
    else{
          if (aVal < bVal){
              return -1; 
          }else if (aVal > bVal){
                return 1; 
          }else{
              return 0;       
          }         
    }
}



function TB_HideColumn_submt(e) {

	var main_cont = $(e.target).prop("id").replace(/^form_/g,"#");

	$(e.target).find("input:checked").each(function(){

		var column = $(this).parent().text();;

		var id = $( main_cont + " th:textEquals("+column+")");
		$(main_cont + " table tbody tr").find('td:eq('+id.index()+')').show(); 
		id.show();

	});

	$(e.target).find("input").not(":checked").each(function(){

		var column = $(this).parent().text();
		var id = $( main_cont + " th:textEquals("+column+")");
		$(main_cont + " table tbody tr").find('td:eq('+id.index()+')').hide(); 
		id.hide();

	});

	return false;

}

function TB_PanelRow_submt(e) {

	var mode = $(e.target).attr("data-mode");
	var main_cont = $(e.target).prop("id").replace(/^form_/g,"#");

	var params = "";
	var column = "";
	var value = "";
	var new_values = [];

	var id_parent = 0;
	var parent_cont = "";

	if (mode == "del") {
		var key_value = $(main_cont).find("table tr.active_row td.primary").text();
		var key = $(main_cont).find("table tr.active_row td.primary").index();
		key = $(main_cont).find("table tr.thead th:eq("+key+")").text();

		console.log(key + " = " + key_value);

		Table_DeleteRow(main_cont, key, key_value);	

		$(e.target).find("input[type=hidden]").each(function(){

			parent_cont = $(this).attr("data-cont");
			id_parent = $(this).val();

			console.log(parent_cont + " = " + id_parent);

			setTimeout(function(){

				$( parent_cont +" tr.tbody td.primary:textEquals("+id_parent+")" ).closest("tr").trigger('click');

			}, 300);

		});


		$(".TB_modal").remove();

		return false;
	}

	$(e.target).find("input").each(function(){

		column = $(this).prop("id").replace(/_add/g,"");
		value = $(this).val();

		if ($(this).attr("type") == "hidden") {
			id_parent = value;
			parent_cont = $(this).attr("data-cont");
		}
	
		new_values[column] = value;
		params += column + "=" +  value + "&";

	});

	$(e.target).find("select").each(function(){

		column = $(this).prop("id").replace(/_add/g,"");
		value = $(this).val();

		new_values[$(this).prop("name").replace(/_add/g,"")] = $(this).find("option:selected").text(); 
		new_values[column] = value;

		params += column + "=" +  value + "&";

	});

	params = params.replace(/&$/g,"");

	if (mode == 'edit') {
		
		var key_value = $(main_cont).find("table tr.active_row td.primary").text();
		var key = $(main_cont).find("table tr.active_row td.primary").index();
		key = $(main_cont).find("table tr.thead th:eq("+key+")").text();

		params += "&"+key+"="+key_value;

		Table_UpdateRow(main_cont,params);


	} 
	else if (mode == 'add') {
		Table_AddRow(main_cont,params);
	}


	$(".TB_modal").remove();

	if (id_parent != 0) {
		setTimeout(function(){

			$( parent_cont+" tr.tbody td.primary:textEquals("+id_parent+")" ).closest("tr").trigger('click');

		}, 200);
	}

	if (mode == 'edit') {
		setTimeout(function(){

			$( main_cont+" tr.tbody td.primary:textEquals("+key_value+")" ).closest("tr").trigger('click');

		}, 200);
	}

	return false;

}


var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
}
