$("#enter").on("click", function () {

	var name = $("#username").val();
	var password = $("#password").val();

	
	$.ajax({
		url: 'assets/js/test.php',
		type: 'POST',
		cache: false,
		data: { 'name': name, 'pass': password },
		dataType: "text",
		beforeSend: function () {
			$("#enter").prop('disabled',true);
        },
		success: function (data) {
			alert(data);
		}

	});
});