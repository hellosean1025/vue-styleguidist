import getUrl from './getUrl';

/**
 * Remove quotes around given string.
 *
 * @param {string} string
 * @returns {string}
 */
export function unquote(string) {
	return string.replace(/^['"]|['"]$/g, '');
}

/**
 * Return prop type object.
 *
 * @param {object} prop
 * @returns {object}
 */
export function getType(prop) {
	return prop.flowType || prop.type;
}

/**
 * Show starting and ending whitespace around given string.
 *
 * @param {string} string
 * @returns {string}
 */
export function showSpaces(string) {
	return string.replace(/^\s|\s$/g, '␣');
}

export function getUrlNavigation(
	navigation,
	{ level, sections, components, nameParent, name, slug, anchor, isolated }
) {
	if (navigation) {
		if (level < 2 && (sections || components)) {
			return getUrl({ name, isolated: true });
		}
		return getUrl({ name: nameParent, id: slug, isolated: true });
	}
	return getUrl({
		name,
		slug,
		anchor,
		isolated,
	});
}

/**
 * Replace all instances of target in str with replacement.
 * @param {string} str the string to replace from
 * @param {string} target the character or substring to replace
 * @param {string} replacement the replacement charcter or string
 * @returns {string} the string with replacements made
 */
export function replaceAll(str, target, replacement) {
	return str.split(target).join(replacement);
}
