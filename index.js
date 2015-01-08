/**
 * Export `send`
 */

module.exports = send;

/**
 * Initialize send
 *
 * @param {String} action
 * @param {String} method
 * @param {Object} data
 */

function send(action, method, data) {
  method = (method || 'post').toLowerCase();

  var frag = document.createDocumentFragment();

  var form = document.createElement('form');
  form.setAttribute('action', action);

  // automatically add _method
  if ('post' != method && 'get' != method) {
    frag.appendChild(input('_method', method));
    form.setAttribute('method', 'post');
  } else {
    form.setAttribute('method', method);
  }

  for (var k in data) frag.appendChild(input(k, data[k]));

  form.appendChild(frag);
  form.submit();
}

/**
 * Create an input element
 *
 * @param {String} name
 * @param {String} value
 * @return {InputElement}
 */

function input(name, value) {
  var input = document.createElement('input');
  input.type = 'hidden';
  input.value = value;
  input.name = name;
  return input;
}
