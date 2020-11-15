import {checkIcon, getIconObject} from './icons';
import * as urlTools from '../utils/url-tools';

/**
 * @class IconAssigner
 * This class helps to solve conflicts, when we have more than one website with same domain.
 * So the module assign icon only to the item with less domain specificity.
 */
class IconAssigner {
	constructor() {
		this._seenIcons = new Map();
	}

	/**
	 * Resolves conflicts for items with the same domain
	 * @param siteObj
	 */
	resolveSameIcon(siteObj) {
		const domain = urlTools.getSignificantDomain(siteObj.url);
		const iconItem = checkIcon(domain);
		if (iconItem) {
			siteObj.icons = getIconObject(iconItem);

			let sameHosts = [];
			if (this._seenIcons.has(iconItem)) {
				sameHosts = this._seenIcons.get(iconItem);
				sameHosts.push(siteObj);
				this._seenIcons.set(iconItem, sameHosts);
			} else {
				this._seenIcons.set(iconItem, [siteObj]);
			}

			if (sameHosts.length > 1) {
				const exact = this._findExact(domain, sameHosts);
				if (exact) {
					this._deleteIconsExcept(sameHosts, exact);
					return;
				} else {
					const closest = this._findClosestHost(domain, sameHosts);
					if (closest) {
						this._deleteIconsExcept(sameHosts, closest);
						return;
					} else {
						let weights = sameHosts.reduce((mem, host) => {
							mem.set(host, urlTools.calcUrlWeight(host.url));
							return mem;
						}, new Map());

						weights = [...weights.entries()].sort((a, b) => a[1] - b[1]);
						if (weights.length) {
							const byWeight = weights.map(w => w[0]);
							this._deleteIconsExcept(byWeight, byWeight[0]);
							return;
						}
					}
				}

				/* istanbul ignore next */
				this._deleteIconsExcept(sameHosts, sameHosts[0]);
			}
		}
	}


	/**
	 * Choose site object with exact domain
	 * @param domain {string}
	 * @param sites {array}
	 * @returns {null|object}
	 * @private
	 */
	_findExact(domain, sites) {
		const exact = sites.filter(s => urlTools.cleanUrl(s.url) === domain);
		return exact.length ? exact[0] : null;
	}

	/**
	 * Choose site object with closest host
	 * @param domain {string}
	 * @param sites {array}
	 * @returns {null|object}
	 * @private
	 */
	_findClosestHost(domain, sites) {
		const closest = sites.filter(s => urlTools.cleanHost(s.url) === domain);
		return closest.length ? closest[0] : null;
	}


	/**
	 * Delete "icons" property for each site object from "sites" but excluding "exception" object
	 * @param sites {array} Array of sites object
	 * @param exception {object} Keeps icons here
	 * @private
	 */
	_deleteIconsExcept(sites, exception) {
		sites.forEach(s => {
			if (exception !== s) {
				delete(s.icons);
			}
		});
	}
}

export default IconAssigner;