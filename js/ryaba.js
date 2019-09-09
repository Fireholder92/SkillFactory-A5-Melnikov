const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = [
      "var1",
      "var2",
      "var3",
      "var4",
      "var5",
      "var6",
      "speach"
]

function GetFormValue() {
	let obj = {};

	fields.forEach(function(field, index) {
		obj[field] = $("input[name=" + field +"]")[0].value
	});    	

	return obj;
}

function handleButton() {
	$.getJSON(dataURL, handleData);
}

function handleData(data) {
    let text = "";

    let obj = GetFormValue();

    data["text"].forEach(function(item, index) {
        for (key in obj) {
        	item = item.replace("{" + key + "}", obj[key]);
        }

        text = text + item + '<BR>';
    });

    $("div#result").html(text);
}    

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
