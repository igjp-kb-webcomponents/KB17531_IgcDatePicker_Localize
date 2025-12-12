// src/locale.ts
export const registerLocaleData = (locale: any) => {
    const global = window as any;
    global.ng = global.ng || {};
    global.ng.common = global.ng.common || {};
    global.ng.common.locales = global.ng.common.locales || {};
    global.ng.common.locales[locale[0]] = locale;
};