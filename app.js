var app = new Vue({
	el: '#app',
	data: {
		en: true,
		dark: true,
		lang: 'en',
		projects: [
			{
				url: '/qazaq',
				name: 'Watch Qazaq',
				text: {
					ru: 'Транслитер с кириллицы на латиницу от Noqat (Kazak Grammar) на Vue.',
					en: 'Transliterator Cyrillic to the Noqat (Kazak Grammar) Latin alphabet on Vue.'
				},
				badges: [ { i: 'vuejs fab', label: 'Vue.js' } ]
			},
			{
				url: 'https://github.com/madiyar/draw-hack',
				name: 'DrawHack',
				text: {
					ru: 'Приложение для совместного рисования на канвасе между несколькими пользователями с разных девайсов в реальном времени.',
					en: 'Co-painting multiple users on Canvas from multiple devices at the same time.'
				},
				badges: [
					{ i: 'node-js fab', label: 'Node.JS' },
					{ i: '', label: 'Express' },
					{ i: '', label: 'Socket.IO' },
					{ i: '', label: 'p5.JS' },
					{ i: 'bootstrap fab', label: 'Bootstrap' },
				],
			},
			{
				url: '/paycard-interactive-form',
				name: 'Interactive Paycard Form',
				text: {
					ru: 'Интерактивная форма кредитной карточки (Kaspi Gold) на Vue.js.',
					en: 'Interactive paycard (Kaspi Gold) form on Vue.js.'
				},
				badges: [ { i: 'vuejs fab', label: 'Vue.js' } ]
			},
			{
				url: 'https://github.com/madiyar/cartoon-beta',
				name: 'Cartoon Beta',
				text: {
					ru: 'Аналог Кинопоиска для мультфильмов, мультсериалов, аниме и тд. Использует TheMovieDB API (20k+ мульт-ов) и VK API (для новостей).',
					en: 'An analogue of Kinopoisk for cartoons, animated series, anime, etc. Uses TheMovieDB API (20k+ cartoons) and VK API (for news).'
				},
				badges: [
					{ i: 'php fab', label: 'PHP 5' },
					{ i: 'code fas', label: 'REST API' },
					{ i: 'database fas', label: 'MySQL' },
					{ i: 'bootstrap fab', label: 'Bootstrap' },
				]
			},
			{
				url: 'https://github.com/madiyar/lomhub',
				name: 'Lomhub',
				text: {
					ru: 'Маркетплейс (как АлиЭкспресс, Satu.kz, OLX) для ломбардов Алматы.',
					en: 'Marketplace (like Aliexpress, Satu.kz, OLX) for pawnshops (lombards) of Almaty.'
				},
				badges: [
					{ i: 'php fab', label: 'PHP 5' },
					{ i: 'database fas', label: 'MySQL' },
					{ i: 'bootstrap fab', label: 'Bootstrap' },
				]
			}
		],
		text: {
			ru: {
				dep: 'УСТАРЕЛ',
				www: 'Переходи на новый сайт',
				name: 'Мадияр Болатов',
				city: 'Алматы',
				yo: 'лет',
				mail: 'Почта',
				cv: 'Резюме',
				projects: 'Проекты',
				download: 'Download'
			},
			en: {
				dep: 'DEPRECATED',
				www: 'Go to new site',
				name: 'Madiyar Bolatov',
				city: 'Almaty',
				yo: 'y.o.',
				mail: 'E-mail',
				cv: 'Resume',
				projects: 'Скачать',
				download: 'Download'
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
	}
})