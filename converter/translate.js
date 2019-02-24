var app = new Vue({
	el: '#app',
	data: {
		message: '',
		m: '',
		mess: '<span class="text-muted">Mätin eńgizińiz</span>',
		empty: false,
		abc: {
			'а': 'a', 'б': 'b', 'ш': 'c', 'д': 'd', 'е': 'e', 
			'ф': 'f', 'г': 'g', 'ғ': 'g', 'х': 'h', 'ы': 'ı', 
			'ж': 'j', 'к': 'k', 'қ': 'k', 'л': 'l', 'м': 'm', 
			'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 
			'т': 't', 'ұ': 'u', 'в': 'v', 'у': 'w', 'я': 'ya', 
			'з': 'z', 'ә': 'ä', 'і': 'i', 'ң': 'ń', 'ө': 'ö', 
			'ү': 'ü', 'э': 'e', 'ю': 'yıw', 'щ': 'c', 'ч': 'c', 
			'ц': 's', 'й': 'y', 'и': 'ıy', ' ': ' ',

			'А': 'A', 'Б': 'B', 'Ш': 'C', 'Д': 'D', 'Е': 'E', 
			'Ф': 'F', 'Г': 'G', 'Ғ': 'G', 'Х': 'H', 'Ы': 'I', 
			'Ж': 'J', 'К': 'K', 'Қ': 'K', 'Л': 'L', 'М': 'M', 
			'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 
			'Т': 'T', 'Ұ': 'U', 'В': 'V', 'У': 'W', 'Я': 'YA', 
			'З': 'Z', 'Ә': 'Ä', 'І': 'I', 'Ң': 'Ń', 'Ө': 'Ö', 
			'Ү': 'Ü', 'Э': 'E', 'Ю': 'YIW', 'Щ': 'C', 'Ч': 'C', 
			'Ц': 'S', 'Й': 'Y', 'И': 'IY', ' ': ' ',
		}
	},
	methods: {
		translit: function () {
			if (this.message.length > 0) {
				$(".alert").hide();
				for (var i = 0; i < this.message.length; i++) {
					if (this.abc[this.message.charAt(i)]) {
						this.m += this.abc[this.message.charAt(i)];
					} else {
						this.m += '<span style="color:red">'+this.message.charAt(i)+'</span>';
					}
				}
				this.mess = this.m;
				this.m = '';
			} else {
				this.empty = true;
				$('.alert').show();
			}
		},
		clear: function () {
			$(".alert").hide();;
			this.empty = false;
			this.m = '';
			this.message = '';
			this.mess = '<span class="text-muted">Mätin eńgizińiz</span>';
		}
	}
})