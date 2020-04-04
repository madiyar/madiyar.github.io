var app = new Vue({
	el: '#app',
	data: {
		en: true,
		dark: true,
		loading: true,
		lang: 'en',
		text: {
			'myName': {
				'ru': 'Болатов Мадияр',
				'en': 'Bolatov Madiyar'
			},
			'city': {
				'ru': 'Алматы',
				'en': 'Almaty'
			},
			'yo': {
				'ru': 'лет',
				'en': 'y.o.'
			},
			'mail': {
				'ru': 'Почта',
				'en': 'E-mail'
			},
			'blog': {
				'ru': 'Блог',
				'en': 'Blog'
			},
			'vk': {
				'ru': 'ВКонтакте',
				'en': 'VK'
			},
			'resume': {
				'ru': 'Резюме',
				'en': 'Resume'
			},
			'projects': {
				'ru': 'Проекты',
				'en': 'Projects'
			},
			'download': {
				'ru': 'Скачать',
				'en': 'Download'
			},
			'skills': {
				'ru': 'Профессиональные навыки',
				'en': 'Professional skills'
			},
			'noqat': {
				'ru': 'Транслитер с кириллицы на латиницу от Noqat (Kazak Grammar) на Vue.',
				'en': 'Transliterator Cyrillic to the Noqat (Kazak Grammar) Latin alphabet on Vue.'
			},
			'paycard': {
				'ru': 'Интерактивная форма кредитной карточки (Kaspi Gold) на Vue.js.',
				'en': 'Interactive paycard (Kaspi Gold) form on Vue.js.'
			},
			'drawhack': {
				'ru': 'Приложение для совместного рисования на канвасе между несколькими пользователями с разных девайсов в реальном времени.',
				'en': 'Co-painting multiple users on Canvas from multiple devices at the same time.'
			},
			'cartoon': {
				'ru': 'Аналог Кинопоиска для мультфильмов, мультсериалов, аниме и тд. Использует TheMovieDB API (20k+ мульт-ов) и VK API (для новостей).',
				'en': 'An analogue of Kinopoisk for cartoons, animated series, anime, etc. Uses TheMovieDB API (20k+ cartoons) and VK API (for news).'
			},
			'lomhub': {
				'ru': 'Маркетплейс (как АлиЭкспресс, Satu.kz, OLX) для ломбардов Алматы.',
				'en': 'Marketplace (like Aliexpress, Satu.kz, OLX) for pawnshops (lombards) of Almaty.'
			}
		}
	},
	methods: {
		setLang: function () {
			this.en = !this.en;
			this.lang = (this.en) ? 'en' : 'ru';
		},
		setTheme: function () {
			this.dark = !this.dark;
		}
	},
	mounted: function() {
		this.$nextTick(function() {
			setTimeout(() => {
				this.loading = false;
			}, 1500);
		})
	}
})