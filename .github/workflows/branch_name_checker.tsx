const github = require('@actions/github')
const core = require('@actions/core')

const special_characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
async function run() {
    const is_proceed =
        github.head_ref.includes('translation' || 'stp') &&
        special_characters.some((character) => {
            return !'translation-404-gh-script-changes'.includes(character)
        })
            ? github.head_ref
            : ''
    core.exportVariable('is_proceed', String(is_proceed))
}

run()
