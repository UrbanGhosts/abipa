$("#enter").on("click", function () {
	
	var name = $("#username").val();
	var password = $("#password").val();
	return;
	window.console.log('name: ' + name + ', pass: ' + password);

	
	$.ajax({
		url: 'assets/js/test.php',
		type: 'POST',
		cache: false,
		headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		data: { 'name': name, 'password': password },
		dataType: 'text',
		beforeSend: function () {
			$("#enter").prop('disabled', true);
			window.console.log('block button');
        },
		success: function (data) {
			alert(data);
		},
		error: function (data) {
			window.console.log(data.status + ": " + data.statusText);
		},
	});
});