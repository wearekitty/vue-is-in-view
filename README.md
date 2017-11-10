# Vue Is In View
> Vue.js plugin to detect when elements are and have been in the viewport
For Vue 2.0.

## Install

### ES2015+
* Available through npm as vue-is-in-view.
```JavaScript
  import VueIsInView from 'vue-is-in-view';
  Vue.use(VueIsInView);
```

### CommonJS
* Available through npm as vue-is-in-view.
```JavaScript
  const VueIsInView = require('vue-is-in-view');
  Vue.use(VueIsInView);
```

### Direct include
* You can also directly include it with a `<script>` tag when you have Vue included globally.
It will add a global `VueIsInView` which can then be installed using
```JavaScript
  Vue.use(VueIsInView);
```

## Usage
### Using the `v-is-in-view` directive
```Vue
  <figure v-touch:is-in-view></figure>
  <div v-touch:is-in-view="{ showIfPartial: true }"></div>
```

## Class conditions

| Class                      | Condition                                                           |
| -------------------------- | ------------------------------------------------------------------- |
| is-in-view                 | Applied when all of the element is in the viewport                  |
| has-been-in-view           | Applied after the whole of an element has been in the viewport once |
| is-partially-in-view       | *Applied when any part of an element is in the viewport             |
| has-been-partially-in-view | *Applied after any part of an element has been in the viewport      |

\* Only available when the `showIfPartial` key is `true` in the configuration object, see above.

## License
[MIT](http://opensource.org/licenses/MIT)
