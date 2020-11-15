(() => {
	let shouldHidePanel = false;
	let settingsBtnHasSet = false;
	let infoPanelHasBeenClick = false;

	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation && mutation.target) {

				// Settings Button
				if (!settingsBtnHasSet) {
					const settingsBtn = document.querySelector('g#settings');
					if (settingsBtn) {
						if (settingsBtn.closest('a')) {
							observer.disconnect();
						}

						if (settingsBtn && settingsBtn.closest('[aria-hidden="true"]')) {
							const parent = settingsBtn.closest('[aria-hidden="true"]');
							if (!parent) {
								return;
							}
							parent.style.display = 'block';
							parent.style.marginLeft = '1px';
							// remove outline
							if (settingsBtn.closest('a')) {
								settingsBtn.closest('a').style.outline = 'none';
							}
							const styleEl = document.createElement('style');
							const styleRule = `.${parent.className} {display:block!important}`;
							styleEl.innerHTML = styleRule;
							document.getElementsByTagName('head')[0].appendChild(styleEl);

							settingsBtnHasSet = true;
						}
					}
				}

				// Info Panel Button
				if (!infoPanelHasBeenClick && shouldHidePanel) {
					const infoPanelBtn = document.body.querySelector('[data-testid="info_panel_button"]');

					if (infoPanelBtn) {
						const panelShown = infoPanelBtn.getAttribute('aria-expanded') === 'true';
						if (panelShown) {
							infoPanelBtn.click();
						}
						infoPanelHasBeenClick = true;
						// Record to localStorage
						chrome.runtime.sendMessage({action: 'messenger_panel_hidden'});
					}
				}
			}
		});
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: false,
		characterData: false,
	});

	chrome.runtime.sendMessage({action: 'messenger_panel_should_hide'}, response => {
		if (response && typeof response.shouldHide !== 'undefined') {
			shouldHidePanel = response.shouldHide;
		}
	});
})();