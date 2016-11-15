define(['exports', 'aurelia-framework', 'aurelia-view-manager', '../logger'], function (exports, _aureliaFramework, _aureliaViewManager, _logger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FormFields = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var FormFields = exports.FormFields = (_dec = (0, _aureliaFramework.customElement)('form-fields'), _dec2 = (0, _aureliaViewManager.resolvedView)('spoonx/form', 'form-fields'), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
    function FormFields() {
      

      _initDefineProp(this, 'schema', _descriptor, this);

      _initDefineProp(this, 'model', _descriptor2, this);

      _initDefineProp(this, 'messages', _descriptor3, this);

      _initDefineProp(this, 'descriptions', _descriptor4, this);
    }

    FormFields.prototype.attached = function attached() {
      if (_typeof(this.model) !== 'object') {
        _logger.logger.warn('model is not an object');
      }
    };

    FormFields.prototype.hasKeyProp = function hasKeyProp(element) {
      return Boolean(element.key);
    };

    return FormFields;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'schema', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'model', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'messages', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'descriptions', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});