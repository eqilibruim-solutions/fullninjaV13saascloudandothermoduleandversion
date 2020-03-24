odoo.define('asterisk_calls.originate_call_widget', function (require) {
  "use strict"

  var FieldChar = require('web.basic_fields').FieldChar;
  var fieldRegistry = require('web.field_registry');

  var OriginateCall = FieldChar.extend({

    _renderReadonly: function () {
      this._super();
      var self = this
      this.$el.append('&nbsp;<button type="button" class="originate-call-sm-btn originate_call_button btn btn-sm btn-primary fa fa-phone" \
                      aria-label="Call" title="Call"></button>')
      this.$el.find('.originate_call_button').click(function(){
        return self._rpc({
            'model': 'asterisk_calls.user',
            'method': 'originate_call',
            'args': [self.value, self.model, self.res_id]
        })
      })
    },
  })

  var OriginateExtension = FieldChar.extend({

    _renderReadonly: function () {
      this._super();
      var self = this
      this.$el.append('&nbsp;<button type="button" class="originate-call-sm-btn originate_extension_button btn btn-sm btn-primary fa fa-phone" \
                      aria-label="Call" title="Call"></button>')
      this.$el.find('.originate_extension_button').click(function(){
        return self._rpc({
            'model': 'res.partner',
            'method': 'originate_partner_extension',
            'args': [self.res_id, self.model, self.res_id]
        })
      })
    },
  })

  fieldRegistry.add('originate_call', OriginateCall)
  fieldRegistry.add('originate_extension', OriginateExtension)
})