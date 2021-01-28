/*
 * @Description:
 * @Autor: xiukun@herry
 * @Date: 2021-01-18 18:27:20
 * @LastEditors: xiukun@herry
 * @LastEditTime: 2021-01-19 17:26:06
 */
export const setDocumentTitle = function(title) {
	document.title = title;
	const ua = navigator.userAgent;
	// eslint-disable-next-line
	const regex = /\bMicroMessenger\/([\d\.]+)/;
	if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
		const i = document.createElement('iframe');
		i.src = '/favicon.ico';
		i.style.display = 'none';
		i.onload = function() {
			setTimeout(function() {
				i.remove();
			}, 9);
		};
		document.body.appendChild(i);
	}
};

export const domTitle = '外链';
