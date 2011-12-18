(function () {
// this is just github!
if (!document.getElementsByClassName("native-clones").length || !document.getElementsByClassName("public_clone_url").length) {
	return;	
}

// find the target element
var target = document.getElementsByClassName("native-clones")[0].getElementsByTagName("li")[0];

// create a new element
var li = document.createElement("li");
var btn = document.createElement("a");
btn.className = "minibutton";
btn.href = "#";
btn.target = "_blank";

var span = document.createElement("span");
span.innerHTML = "Edit in Cloud9";

var defaultBgImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZpJREFUeNp8kr9Lw0AUx5ukTdMfaWvALlKyKKWNGBBxkIjUSagoKbQ4Z01HcayD0MFJcChF7f9Q6lJQQRycpLM4tC4luhVd1Kbn90ojJUYPPlzu7r1vvvfeMYQQ3x9DBPJk/gAvoA+8E6iQByJYKxaLeiAQuGEYZhCNRh/T6fQRUjivHPcGDwSglkolHQJvEDpF8gaEzFAo1Adn/wnR5CWw3mq1dhuNRikYDN5D6AR7i7lcbp7GVavVAsdxtmmaBaznADMtRBcrNDmZTHb8fj9xYFk2jzMJrq4hmsX3ajwe79K4VCp1q6rqMYQ5R2jGsqzNRCLxzPM8mSYcDhuTZuQzmcwydRyLxazpGFEUrxyhWcMw9nEV4kaSpG6tVlMm9hfq9fqeVxxMbY0LrOv6IYpIvBAEgcDtAeI0RVGaXjEoQZmF7U9ZlpvD4fALdfC5wR+f2u12p1KpZHu93rb73LZt32g0evhpH+5eph2hDiKRCEG7x8DNu6ZpF5gHzh6FOqENgZHzX+8IIwsuwevkBf8Ffel3YMfJ/RZgALTrMYKs/GM2AAAAAElFTkSuQmCC)";

span.style["background-repeat"] = "no-repeat";
span.style["background-position"] = "left 4px";
span.style["padding-left"] = "21px";
span.style["background-image"] = defaultBgImage;
span.style["margin-left"] = "3px";

btn.appendChild(span);

/*
btn.style["background-image"] = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#15BD3F), to(#1F8739))";
btn.style["color"] = "white";
btn.style["text-shadow"] = "1px 1px 0 #009000";
*/

li.appendChild(btn);

// adjust URL textbox width
document.getElementsByClassName("url-field")[0].style.width = '290px';

// hover state, has to change the background image
btn.addEventListener("mousemove", function () {
	span.style["background-image"] = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAaBJREFUeNqUkr9LAmEYx+88iSQaLogbGnKwxaIgoiGIoMXAo9AharRBhMIpAlfbWgxyK/8A3YLGEuKGptAhxGgQHaQLRE/PH3envn1f8UTMpB748N77vN/ny/Pc+7LM7zELFvurBmRQBIT5R9DirUQi4dF1PdntdpVarfaezWYvCSHcXwymwDRYi8fjHhjUYHSD4h0YnTYajSK4nWRAi1fBtiiKBz6f77DVar3A6Bq5lWQy6aCiUCjkbbfbnWg06sV2AbDDJnSzQYtlWU4ZhkFMOp2OG2dz6OoJpk58b1YqlRzVFQqF53Q6fQXjwai8IAi75XI5r2kaGaZer59QAUZzZzKZddqxoiifw5pqtfpoGs3HYrFzjEJGKZVKuUAgsNzXLfn9/qNxOnS1Z4FA4Xl+Bq0zo9hsNnskEnlDtxfQCcFg8HicjmVZBzXS8/n8vdVqNTACMwra/3C5XKlwOOy02+3i6DnHcYzFYnkd/HHMfkZvpNlsElVVCa67B7pRJUmKYVXMHAXPoHchiLsfbwBJJ3gAX2RyaEAC+2bttwADAPspjX3615JXAAAAAElFTkSuQmCC)";
});
btn.addEventListener("mouseout", function () {
	span.style["background-image"] = defaultBgImage;
});

btn.addEventListener("click", function () {
	// what's the clone URL?
	var cloneUrl = document.getElementsByClassName("public_clone_url")[0].getElementsByTagName("a")[0].href;

	var fileMatch = document.location.href.match(/\bblob\b\/(?:[^\/]+)\/(.*)/);
	if (fileMatch) {
    	cloneUrl += "&file=" + fileMatch[1];
	}
	
	btn.href = "http://c9.io/open/git/?url=" + cloneUrl;
	
	return true;
});

// and add it to the DOM
target.parentNode.insertBefore(li, target);

})();