let translationController = new AbortController(); // Create an AbortController

$(document).ready(function () {
    let clearTimer;

    $('#source-text').on('input', function () {
        clearTimeout(clearTimer); // Clear any previous timers
        clearTimer = setTimeout(translateText, 200); // Delay before translating
    });

    $('#source-lang, #target-lang').change(function () {
        translateText();
    });

    function translateText() {
        let sourceText = $('#source-text').val();
        let sourceLang = $('#source-lang').val();
        let targetLang = $('#target-lang').val();

        if (sourceText.trim() === '') {
            $('#translation-result').text(''); // Completely clear the translation if source text is empty
            return;
        }

        // Abort the previous request, if any
        if (translationController) {
            translationController.abort();
        }

        $.post('/translate', { source_text: sourceText, source_lang: sourceLang, target_lang: targetLang }, function (data) {
            $('#translation-result').text(data.translation);
        });
    }
});
