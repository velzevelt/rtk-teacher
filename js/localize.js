// https://github.com/coderifous/jquery-localize

$(function () {
    var lang = navigator.language || navigator.userLanguage; //no ?s necessary
    // lang = 'ru'

    var opts = { language: lang, pathPrefix: "./localization/" };
    $("[data-localize]").localize("localization", opts)
})