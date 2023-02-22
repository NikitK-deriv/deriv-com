const github = require('@actions/github')
const core = require('@actions/core')

const translation_flows = ['translation', 'stp']
const special_characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '404']

async function run() {
    const is_proceed =
        'translation-404-gh-script-changes'.includes('translation' || 'stp') &&
        special_characters.map((character) => {
            return !'translation-404-gh-script-changes'.includes(character)
        })
    core.exportVariable('is_proceed', String(is_proceed))
}

run()
