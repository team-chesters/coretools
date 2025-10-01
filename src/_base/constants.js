const _ONE_DAY_MS = 24 * 3600 * 1000;
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const _HTML_ENTITY_MAP = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "/",
    "`": "&#x60;",
    "=": "&#x3D;",
};

const _CHAR_RANGE_MAP = {
    ASCII: 'ascii',
    UNICODE: 'unicode'
};

const _BYTE_UNIT = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];


export {
    _ONE_DAY_MS,
    _MS_PER_DAY,
    _HTML_ENTITY_MAP,
    _CHAR_RANGE_MAP,
    _BYTE_UNIT,
};
