/**
* Configuration for Storybook Options Addon.
*
* Options addon allows onfiguring the Storybook UI at runtime.
*
* @since 0.0.1
* @module config/.storybook/optionsConfig
* @see module: \@storybook/addon-options
*/
import { setOptions } from '@storybook/addon-options';

const optionsConfig = () => {
  setOptions({
    /**
     * name to display in the top left corner
     * @type {String}
     */
   name: 'CA Job Board',

    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: 'https://github.com/calligraphic/ca-job-board/settings',

    /**
     * show story component as full screen
     * @type {Boolean}
     */
    goFullScreen: false,

    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showStoriesPanel: true,

    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showAddonPanel: true,

    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,

    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: false,


     /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,

    /**
     * regex for finding the hierarchy separator when organizing stories in a
     * nested structure, e.g. storiesOf('My App/Buttons/Simple', module)
     *
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: '/\//',

    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off mulitple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: '/\//',

    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,

    /**
     * id to select an addon panel
     *
     * The order of addons in the "Addon panel" is the same as you import them in 'addons.js'.
     * The first panel will be opened by default as you run Storybook.
     *
     * @type {String}
     */
    selectedAddonPanel: undefined,
  });
}

export default optionsConfig;
