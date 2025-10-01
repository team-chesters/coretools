import { _HTML_ENTITY_MAP } from "./const";
/**
 * Escapes special characters in a string to their respective HTML entities.
 * 
 * @param {string} string - The string to escape.
 * @returns {string} Returns the string with escaped HTML entities.
 */

export default function EscapeHTML(string) {
    const entityMap = _HTML_ENTITY_MAP;

    return String(string).replace(/[&<>"'`=]/g, function (s) {
        if (s === '/') {
            return entityMap[s];
        }

        return entityMap[s];
    });
};
