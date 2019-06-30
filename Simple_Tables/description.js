
var lan_content = {
	"ru": {
		"top_capt" : "Описание:",
		"text_1": "Отображение и редактирование таблиц в БД Mysql через PHP. \nРеализовано при помощи jQuery.\n\nИспользуемые библиотеки:",
		"text_2": "Для работы с нижеописанными функциями, необходимо подключить:",
		"text_3": "Примечание:\nРедактирование ячейки таблицы - <b>dblclick</b> по ячейке (если возможность редактирования установлена в параметрах).",
		"middle_capt": "Принцип работы:",
		"step_1" : "1. Шаг: Создать блок для отображения предполагаемой таблицы.",
		"step_2" : "2. Шаг: Определить массив параметров для отображения таблиц.",
		"par_1": "Общее описание (подробнее ниже):",
		"comment_1": "//-> Имя первичного ключа таблицы",
		"comment_2": "//-> Имена колонок таблицы для редактирования",
		"comment_3": "//-> Ссылки в таблице для удаления/копирования каждой строки (опционально)",
		"comment_4": "//-> Колонки таблицы, доступные для ввода в окне добавления строки - panel[\"New\"] (если совпадает с \"editable\", то необязательно)",
		"comment_5": "//-> Названия кнопок в верхней панели таблицы (опционально)",
		"comment_6": "//-> Имена колонок таблицы скрытых по-умолчанию ",
		"comment_7": "//-> отображение связанных строк таблицы, при клике на строку родительской таблицы",
		"comment_8": "//-> Колонка в виде селекта в при редактировании(если указано в \"editable\")/создании(если указано panel[\"New\"]) ячейки таблицы (в БД запишется значение \"key\"). Можно динамически вписывать значение из сязанной таблицы(подробнее ниже).",
		"text_4": "Примечание: Указывать все параметры - необязательно. Можно указывать только те, которые необходимы для конкретной таблицы.",
		"par_2": "Параметры из Демо:",
		"comment_9": "// Значение массива затем возьмем из БД",
		"step_3" : "3. Шаг: Вызов процедуры создания таблицы (после Ajax запроса)",
		"comment_10": "// -> Получили данные SQL-выборки из PHP ",
		"comment_11": "// -> Так можем заполнить параметр \"selectable\" значениями из БД (необязательно)",
		"comment_12": "Параметры - если их нет, то пустая строка \"\"",
		"step_4" : "4. Шаг: Обработка процедур изменения таблицы",
		"par_3": "При указании некоторых параметров, необходимо дописать обработку возвращаемых значений из Table.js:",
		"par_4": "Подробнее:",
		"comment_13": "//Параметры:",
		"comment_14": "// Здесь писать реализацию изменения значения ячейки ....",
		"comment_15": "//<b>container</b> - id контейнера в котором располагается таблица (#restaurants_table)",
		"comment_16": "//<b>colunm</b> - имя редактируемой колонки",
		"comment_17": "//<b>val</b> - новое значение колонки",
		"comment_18": "//<b>primary_key</b> - имя первичного ключа таблицы",
		"comment_19": "//<b>primary_val</b> - значение первичного ключа таблицы",
		"comment_20": "// Здесь писать реализацию удаления ячейки ....",
		"comment_21": "//Перерисовка таблиц после ответа ajax...",
		"comment_22": "// Здесь писать реализацию добавления ячейки ....",
		"comment_23": "//<b>params</b> - параметры и их значения при добавлении новой записи в таблицу для GET или POST запроса в PHP (name=Lux Restraunt&location=Praha 4&address=Luxus street, 42/6)",
		"comment_24": "// Здесь писать реализацию копирования ячейки ....",
		"comment_25": "//<b>keys</b> - все колонки которые копируем",
		"comment_26": "//<b>values</b> - все значения из копируемых колонок",
		"comment_27": "//<b>new_row</b> - jquery указатель на скопированую строку таблицы",
		"comment_28": "//Из запроса должны получить новое значение первичного ключа скопированной строки id",
		"comment_29": "//- new_id новое значение первичного ключа",
		"comment_30": "//ИЛИ - Перерисовка таблиц после ответа ajax...",
		"text_5": "Примечание: для наглядности можно посмотреть что вернет вызов процедуры ",
		"text_6": "Спасибо, если прочитали это, исходный код из примера Демо можно найти\n на <b>GitHub</b>: "
	},

	"en": {
		"top_capt" : "Description:",
		"text_1": "Display and edit tables from database Mysql through PHP. \nImplemented with jQuery.\n\nUsed libraries:",
		"text_2": "For work with described below functions, need to connect:",
		"text_3": "Annotation:\nEditing table cells - <b>dblclick</b> by cell (if the ability to edit is set in the parameters).",
		"middle_capt": "Principle of operation:",
		"step_1" : "1. Step: Create a block to display the intended table.",
		"step_2" : "2. Step: Define an array of parameters to display the tables.",
		"par_1": "General description (more details below):",
		"comment_1": "//-> The name of the primary key table",
		"comment_2": "//-> The names of the table columns to edit",
		"comment_3": "//-> Links in the table for deleting / copying each row (optional)",
		"comment_4": "//-> The columns of the table are available for input in the add row window - panel[\"New\"] (if coincides with \"editable\", it is not necessary)",
		"comment_5": "//-> Names of buttons in the top panel of the table (optional)",
		"comment_6": "//-> The names of the columns of the table are hidden by default.",
		"comment_7": "//-> Display of related rows of the table, when clicking on the row of the parent table",
		"comment_8": "//-> Column as select in edit (if defined in \"editable\")/creation (if defined panel[\"New\"]) table cells (in database will write the value \"key\"). You can dynamically enter a value from a linked table. (more details below).",
		"text_4": "Annotation: Define all parameters is not necessary. You can specify only those that are necessary for a particular table.",
		"par_2": "Parameters from Demo:",
		"comment_9": "// Array value then take from DB",
		"step_3" : "3. Step: Call the procedure for creating a table (after an Ajax request)",
		"comment_10": "// -> Received SQL sample data from PHP",
		"comment_11": "// -> That's how we can fill parameter \"selectable\" values from the database (not necessary)",
		"comment_12": "Parameters - if not, then an empty string \"\"",
		"step_4" : "4. Step: Processing the table modification procedures",
		"par_3": "When define some parameters, it is necessary to add processing of return values from Table.js:",
		"par_4": "Detailed:",
		"comment_13": "//Parameters:",
		"comment_14": "// Here, write the implementation of edit cell values ....",
		"comment_15": "//container - id of the container where the table is located (#restaurants_table)",
		"comment_16": "//colunm - editable column name",
		"comment_17": "//val - new column value",
		"comment_18": "//primary_key - name of the primary key of the table",
		"comment_19": "//primary_val - table primary key value",
		"comment_20": "// Here, write the implementation of delete cell values ....",
		"comment_21": "//Redrawing tables after an ajax response...",
		"comment_22": "// Here, write the implementation of add cell values ....",
		"comment_23": "//<b>params</b> - parameters and their values when adding a new record to the table for GET or POST request in PHP (name=Lux Restraunt&location=Praha 4&address=Luxus street, 42/6)",
		"comment_24": "//  Here, write the implementation of copy cell ....",
		"comment_25": "//<b>keys</b> - all columns that are copied",
		"comment_26": "//<b>values</b> - all values from copied columns",
		"comment_27": "//<b>new_row</b> - jquery pointer to the copied table row",
		"comment_28": "//From the request should receive new primary key value of copied row id",
		"comment_29": "//- new_id new primary key value",
		"comment_30": "//OR - Redrawing tables after ajax response ...",
		"text_5": "Annotation: for clarity, you can see what the procedure call returns ",
		"text_6": "Thank you, if you read this, the source code from the demo example can be found\n at <b>GitHub</b>: "
	}
};


function ShowDescription() {

	if (!$(".container_documentation").is(":visible")) {
		$(".container_top").hide();
		$(".container_bottom").hide();
		$(".container_documentation").show();

		RenderDescription("en");
	}
	
}

function HideDescription() {

	$(".container_documentation").hide();
	$(".container_top").show();
	$(".container_bottom").show();
		
}

function RenderDescription(lang) {
	$(".container_documentation").empty();

	var html = "<div class='top_descript'>";
	html += "<a href='#' class='hidebtn' onclick='HideDescription();'><i class='fas fa-times'></i></a>";
	html += "<a href='#' class='hidebtn' onclick='HideDescription();'><i class='fas fa-times'></i></a>";
	html += "<h2>"+lan_content[lang].top_capt+"</h2>";
	html += "<button class='lang' id='uk_lang' onclick='RenderDescription(\"en\");'>"+en_svg+"</button>";
	html +=	"<button class='lang' id='ru_lang' onclick='RenderDescription(\"ru\");'>"+ru_svg+"</button>";
	html +=	"</div> ";

	$(".container_documentation").append(html);


	html = "<pre>"+lan_content[lang].text_1+"</pre>";
	html += "<span><b>jQuery: </b> <a href='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'>https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js</a></span><br>";
	html += "<span><b>Fontawesome: </b> <a href='https://use.fontawesome.com/releases/v5.7.2/css/all.css'>https://use.fontawesome.com/releases/v5.7.2/css/all.css</a></span>";

	html += "<pre>"+lan_content[lang].text_2+"</pre>";
	html += "<span><b>Tables.js:</b> <a href='https://github.com/golveronika/MyTestSite/blob/master/Simple_Tables/Tables.js'>https://github.com/golveronika/MyTestSite/blob/master/Simple_Tables/Tables.js</a></span><br>";
	html += "<span><b>Tables.css:</b> <a href='https://github.com/golveronika/MyTestSite/blob/master/Simple_Tables/Tables.css'>https://github.com/golveronika/MyTestSite/blob/master/Simple_Tables/Tables.css</a></span>";

	html += "<pre class='red_pre'>"+lan_content[lang].text_3+"</pre>";

	$(".container_documentation").append(html);

	html = "<h3>"+lan_content[lang].middle_capt+"</h3>";

	html +="<h4>"+lan_content[lang].step_1+"</h4>";
	html += "<pre class='code'>"+escapeHtml("<div id=\"restaurants_table\"></div>")+"\n";
	html += escapeHtml("<div id=\"menu_table\"></div>")+"\n"
	html += escapeHtml("<div id=\"reviews_table\"></div>")+"\n</pre>"

	$(".container_documentation").append(html);

	html ="<h4>"+lan_content[lang].step_2+"</h4>";
	html += "<pre>"+lan_content[lang].par_1+"</pre>";
	html += "<pre class='code'>";
	html += "var <b>params</b> = {\n";
	html += '	<span class="code_var">"primary_key"</span> : "name_key", <span class="code_comment">'+lan_content[lang].comment_1+'</span>\n';
	html += '	<span class="code_var">"editable"</span> : ["column_1","column_2"...], <span class="code_comment">'+lan_content[lang].comment_2+'</span>\n';
	html += '	<span class="code_var">"hrefs"</span> : ["del","add"], <span class="code_comment">'+lan_content[lang].comment_3+'</span>\n';
	html += '	<span class="code_var">"default"</span> : ["column_1","column_2"...], <span class="code_comment">'+lan_content[lang].comment_4+'</span>\n';
	html += '	<span class="code_var">"panel"</span> : ["New","Edit", "Del", "Hide", "Search"],  <span class="code_comment">'+lan_content[lang].comment_5+'</span>\n';
	html += '	<span class="code_var">"hiding_columns"</span> : ["column_1","column_2"...],  <span class="code_comment">'+lan_content[lang].comment_6+'</span>\n';
	html += '	<span class="code_var">"reference"</span> :  { key:"key_name", parent_key:"parent_key_name", parent_container:"parents_block_id"},  <span class="code_comment">'+lan_content[lang].comment_7+'</span>\n';
	html += '	<span class="code_var">"selectable"</span> : { "columns_name": { column_caption: "display_column_name",\n';
	html += '			arr_values: {\n';
	html += '				"key": ["value_1","value_2" ...], \n';
	html += '				"value_select": ["display_value_1","display_value_2" ...] \n';
	html += '				} \n';
	html += '			}, ... \n';
	html += '		} <span class="code_comment">'+lan_content[lang].comment_8+'</span>\n';
	html += '	} \n';
	html += "</pre>";
	html += "<pre class='red_pre'>"+lan_content[lang].text_4+"</pre>";

	$(".container_documentation").append(html);

	html = "<pre>"+lan_content[lang].par_2+"</pre>";
	html += "<pre class='code'>";
	html += "var <b>params_1</b> = {\n";
	html += '	<span class="code_var">"primary_key"</span> : "id_restaurant", \n';
	html += '	<span class="code_var">"editable"</span> : ["name","address","id_location", "type"], \n';
	html += '	<span class="code_var">"hrefs"</span>: ["del","add"], \n';
	html += '	<span class="code_var">"default"</span>: ["name","typing", "location", "address"], \n';
	html += '	<span class="code_var">"panel"</span>: ["New","Edit", "Del", "Hide", "Search"], \n';
	html += '	<span class="code_var">"hiding_columns"</span> : ["id_restaurant","type","id_location"], \n';
	html += '	<span class="code_var">"selectable"</span> : { "id_location": { column_caption: "location", arr_values:[]}, <span class="code_comment">'+lan_content[lang].comment_9+'</span>\n';
	html += '		"type": { column_caption:</span> "typing", \n';
	html += '			arr_values: {"key": ["Fast Food","Bar","Luxuary", "Cafeteria", "Buffet", "Asian food", "Special"], \n';
	html += '				"value_select": ["Fast Food","Bar","Luxuary", "Cafeteria", "Buffet", "Asian food", "Special"] \n';
	html += '				} \n';
	html += '			} \n';
	html += '		} \n';
	html += '	} \n\n';

	html += "var <b>params_2</b> = {\n";
	html += '	<span class="code_var">"primary_key"</span> : "id_menu", \n';
	html += '	<span class="code_var">"editable"</span> : ["name","price","consist"], \n';
	html += '	<span class="code_var">"hrefs"</span>: ["del","add"], \n';
	html += '	<span class="code_var">"panel"</span>: ["New","Edit", "Del", "Hide"], \n';
	html += '	<span class="code_var">"hiding_columns"</span> :  ["id_menu","id_restaurant"], \n';
	html += '	<span class="code_var">"default"</span> :  ["name","price","consist"], \n';
	html += '	<span class="code_var">"reference"</span> :  { key:"id_restaurant", parent_key:"id_restaurant", parent_container:"#restaurants_table"} \n';
	html += '	} \n\n';

	html += "var <b>params_3</b> = {\n";
	html += '	<span class="code_var">"primary_key"</span> : "id_review", \n';
	html += '	<span class="code_var">"hrefs"</span>: ["del"], \n';
	html += '	<span class="code_var">"panel"</span>: ["New", "Del", "Search"], \n';
	html += '	<span class="code_var">"hiding_columns"</span> :  ["id_review","id_restaurant","rate"], \n';
	html += '	<span class="code_var">"default"</span> :  ["username","Rating","Comment"], \n';
	html += '	<span class="code_var">"reference"</span> :  { key:"id_restaurant", parent_key:"id_restaurant", parent_container:"#restaurants_table"} \n';
	html += '	<span class="code_var">"selectable"</span>: { "rate": { column_caption: "Rating", \n';
	html += '			arr_values: {"key": ["0","1","2","3","4"], \n';
	html += '				    "value_select": ["Disgusting","Вad","Normally","Good","Wonderful"] \n';
	html += '				    } \n';
	html += '			} \n';
	html += '		} \n';
	html += '	} \n\n';
	html += "</pre>";

	$(".container_documentation").append(html);

	html ="<h4>"+lan_content[lang].step_3+"</h4>";
	html += "<pre class='code'>";
	html += "var <b>data</b> = JSON.parse(this.responseText); <span class=\"code_comment\">"+lan_content[lang].comment_10+"</span> \n\n";
	html += "params_1[\"selectable\"][\"id_location\"].arr_values = data[\"location\"]; <span class=\"code_comment\">"+lan_content[lang].comment_11+"</span> \n\n";
	html += "<span class=\"code_comment\">//CreateTable(\"ID_container\",JSON_select_from_DB, Parameters); //Параметры - если их нет, то пустая строка \"\"</span> \n\n";
	html += "<span class='code_function'>CreateTable</span>(\"#restaurants_table\",data[\"restaurants\"], <b>params_1</b>); \n";
	html += "<span class='code_function'>CreateTable</span>(\"#menu_table\",data[\"menu\"], <b>params_2</b>); \n";
	html += "<span class='code_function'>CreateTable</span>(\"#reviews_table\",data[\"reviews\"], <b>params_3</b>); \n\n";
	html += "</pre>";

	$(".container_documentation").append(html);

	html = "<h4>"+lan_content[lang].step_4+"</h4>";
	html += "<pre>"+lan_content[lang].par_3+"</pre>";
	html += "<pre class='code'>";
	html += 'Table_EditRow <span class="code_comment">// -> "editable":[...]</span>\n';
	html += 'Table_DeleteRow <span class="code_comment">// -> "hrefs":["del"] / "panel":["Del"]</span>\n';
	html += 'Table_AddRow <span class="code_comment">// -> "panel": ["New"]</span>\n';
	html += 'Table_UpdateRow <span class="code_comment">// -> "panel":["Edit"]</span>\n';
	html += 'Table_CopyRow <span class="code_comment">// -> "hrefs":["add"]</span>\n\n';
	html += "</pre>";

	$(".container_documentation").append(html);
	html = "<pre>"+lan_content[lang].par_4+"</pre>";
	html += "<pre class='code'>";

	html += "function <span class='code_function'>Table_EditRow</span>(container, colunm, val , primary_key, primary_val) {\n";
	html += "\n<span class='code_comment'>"+lan_content[lang].comment_14+"</span>\n\n";
	html += "	<span class='code_comment'>"+lan_content[lang].comment_13+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_15+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_16+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_17+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_18+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_19+"</span>\n";
	html += "}\n\n";

	html += "function <span class='code_function'>Table_DeleteRow</span>(container, primary_key, primary_val) {\n";
	html += "\n<span class='code_comment'>"+lan_content[lang].comment_20+"</span>\n\n";
	html += "	<span class='code_comment'>"+lan_content[lang].comment_13+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_15+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_18+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_19+"</span>\n";
	html += "\n\n<span class='code_comment'>"+lan_content[lang].comment_21+"</span>\n";
	html += ' 	CreateTable("#restaurants_table",data["restaurants"], params_1);\n';
	html += ' 	CreateTable("#menu_table",data["menu"], params_2);\n';
	html += ' 	CreateTable("#reviews_table",data["reviews"], params_3);\n';
	html += "}\n\n";

	html += "function <span class='code_function'>Table_AddRow</span>(container, params) {\n";
	html += "\n<span class='code_comment'>"+lan_content[lang].comment_22+"</span>\n\n";
	html += "	<span class='code_comment'>"+lan_content[lang].comment_13+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_15+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_23+"</span>\n";
	html += "\n\n<span class='code_comment'>"+lan_content[lang].comment_21+"</span>\n";
	html += ' 	CreateTable("#restaurants_table",data["restaurants"], params_1);\n';
	html += ' 	CreateTable("#menu_table",data["menu"], params_2);\n';
	html += ' 	CreateTable("#reviews_table",data["reviews"], params_3);\n';
	html += "}\n\n";


	html += "function <span class='code_function'>Table_UpdateRow</span>(main_cont,params) {\n";
	html += "\n<span class='code_comment'>"+lan_content[lang].comment_14+"</span>\n\n";
	html += "	<span class='code_comment'>"+lan_content[lang].comment_13+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_15+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_23+"</span>\n";
	html += "\n\n<span class='code_comment'>"+lan_content[lang].comment_21+"</span>\n";
	html += ' 	CreateTable("#restaurants_table",data["restaurants"], params_1);\n';
	html += ' 	CreateTable("#menu_table",data["menu"], params_2);\n';
	html += ' 	CreateTable("#reviews_table",data["reviews"], params_3);\n';
	html += "}\n\n";


	html += "function <span class='code_function'>Table_CopyRow</span>(container, keys, values, new_row){\n";
	html += "\n<span class='code_comment'>"+lan_content[lang].comment_24+"</span>\n\n";
	html += "	<span class='code_comment'>"+lan_content[lang].comment_13+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_15+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_25+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_26+"</span>\n";
	html += "		<span class='code_comment'>"+lan_content[lang].comment_27+"</span>\n";

	html += "\n\n<span class='code_comment'>"+lan_content[lang].comment_28+"</span>\n";
	html += "	$(new_row).find(\"td.primary\").text(new_id);<span class='code_comment'>"+lan_content[lang].comment_29+"</span>\n";
	html += "<span class='code_comment'>"+lan_content[lang].comment_30+"</span>\n";
	html += ' 	CreateTable("#restaurants_table",data["restaurants"], params_1);\n';
	html += ' 	CreateTable("#menu_table",data["menu"], params_2);\n';
	html += ' 	CreateTable("#reviews_table",data["reviews"], params_3);\n';
	html += "}\n\n";

	html += "</pre>";

	$(".container_documentation").append(html);

	html = "<pre class='red_pre'>"+lan_content[lang].text_5+"</pre>";
	html += "<pre>"+lan_content[lang].text_6+"<a href='https://github.com/golveronika/MyTestSite/tree/master/Simple_Tables'>https://github.com/golveronika/MyTestSite/tree/master/Simple_Tables</a></pre>";
	html += "<pre>(Tables.js, Main.js, Tables_temp.php) </pre><br>";

	$(".container_documentation").append(html);

}


var ru_svg = '<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-ru" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z"/><path fill="#0039a6" d="M0 170.7h512V512H0z"/><path fill="#d52b1e" d="M0 341.3h512V512H0z"/></g></svg>';
var en_svg = '<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-gb" viewBox="0 0 512 512"><defs><clipPath id="a"><path fill-opacity=".7" d="M250 0h500v500H250z"/></clipPath></defs><g clip-path="url(#a)" transform="translate(-256) scale(1.024)"><g stroke-width="1pt"><path fill="#012169" d="M0 0h1000v500H0z"/><path fill="#fff" d="M0 0v55.9L888.2 500H1000v-55.9L111.8.1H0zm1000 0v55.9L111.8 500H0v-55.9L888.2 0H1000z"/><path fill="#fff" d="M416.7 0v500h166.6V0H416.7zM0 166.7v166.6h1000V166.7H0z"/><path fill="#c8102e" d="M0 200v100h1000V200H0zM450 0v500h100V0H450zM0 500l333.3-166.7H408L74.5 500H0zM0 0l333.3 166.7h-74.5L0 37.3V0zm592.1 166.7L925.5 0h74.5L666.7 166.7H592zm408 333.3L666.6 333.3h74.5L1000 462.7V500z"/></g></g></svg>'