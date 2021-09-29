$("#enter").on("click", function () {
	
	var name = $("#username").val();
	var password = $("#password").val();
	
	$.ajax({
		url: 'assets/js/test.php',
		type: 'GET',
		cache: false,
		data: { 'name': name, 'password': password },
		dataType: 'text',
		beforeSend: function () {
			$("#enter").prop('disabled', true);
        },
		success: function (data) {
			window.console.log("success: " + data);
			$("#enter").prop('disabled', false);
		},
		error: function (data) {
			window.console.log(data.status + ": " + data.statusText);
		},
	});
});