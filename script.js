// Enhanced registration form logic
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('registrationForm');
	if (!form) return;

	form.addEventListener('submit', function (e) {
		// Password match validation
		const password = document.getElementById('password').value;
		const confirmPassword = document.getElementById('confirmPassword').value;
		const errorElement = document.getElementById('passwordError');
		if (password !== confirmPassword) {
			errorElement.classList.remove('hidden');
			document.getElementById('password').focus();
			e.preventDefault();
			return false;
		} else {
                        errorElement.classList.add('hidden');
                    }

		// Additional enhancements can be added here
		// Example: Validate file type for photo
		const photoInput = document.getElementById('photo');
		if (photoInput && photoInput.value) {
			const file = photoInput.files[0];
			if (file && !file.type.startsWith('image/')) {
				alert('Please upload a valid image file for Photo.');
				e.preventDefault();
				return false;
			}
		}
	});

	// Optional: Real-time password match feedback
	const passwordInput = document.getElementById('password');
	const confirmPasswordInput = document.getElementById('confirmPassword');
	if (passwordInput && confirmPasswordInput) {
		confirmPasswordInput.addEventListener('input', function () {
			if (passwordInput.value !== confirmPasswordInput.value) {
				document.getElementById('passwordError').classList.remove('hidden');
			} else {
				document.getElementById('passwordError').classList.add('hidden');
			}
		});
	}
});
