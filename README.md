# tox.chat
The Tox Project's official website!

## Contributing


### TODOs
Check out our [issues](https://github.com/Tox/tox.chat/issues) page for all bugs and suggestions alike

### Cloning
We make use of the Font-Awesome icon pack as a git submodule. In order to make sure this is downloaded, use ```--recursive``` when cloning.

### Guidelines
 - No feature or element of the website should ___require___ Javascript or a backend. Using frontend Javascript for enhancements is acceptable.
 - Avoid making the site execute 3.5MB of proprietary Javascript on scroll event.
 - Please use icons from the Font-Awesome pack if available.
 - No official stances on "third party" programs. For example, no "recommended clients". If you want to add something like this, please bring it up with @zer0-one first.
 - Before working on fixing an issue, please double check there's not already an ongoing fork fixing it.
 - When fixing an issue, post a comment saying that you are doing so, to save others the confusion.
 - Be sure not to mix up indentation, we try to stick to 4-wide tabs.

### Quick how-to: i18n and l10n
 - Wrap your english strings in `<tl [some key]></tl>`, where some key is a short string describing how the string is used.
   Then copy it into the en.json file.
 - The preferred convention is `k_<topic>_<usage>`, because most sections had a one/two word title then a description.
 - If HTML would split your sentence (as in, `this <a href="/">sentence</a> has garbage inline`), copy it into en.json as an array:
   `"key": ["this", "sentence", "has garbage inline"]`. Then use the same key for all the parts, except put an @-sign at the end:
   `{{ key@ }} <a href="/">{{ key@ }}</a> {{ key@ }}`. This will work as you expect, and saves translators from having to work with HTML fragments.
 - JSON file reserved tables:
   - `multi` is used for strings used on multiple templates like the top bar. 
     File-specific sections are overlaid on `multi` as needed.
 - JSON file reserved keys:
   - `multi -> _ind`: Not used yet
   - `multi -> _lang_native`: Name of the language in that native language. e.g.: Français, 日本語.

### Pull requests
If you want your pull request to be merged quickly, you need to make it easy to review.

Include a short and long description, screenshot (or recording if needed) documenting the changes, and some chocolate for @installgen2.

## License
[__CC-BY-SA__](https://github.com/Tox/tox.chat/blob/master/LICENSE)
