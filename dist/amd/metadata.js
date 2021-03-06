define(['exports', 'aurelia-metadata', 'homefront'], function (exports, _aureliaMetadata, _homefront) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Metadata = undefined;

  

  var Metadata = exports.Metadata = function () {
    function Metadata() {
      
    }

    Metadata.forTarget = function forTarget(target) {
      if (typeof target !== 'function') {
        target = target.constructor;
      }

      return _aureliaMetadata.metadata.getOrCreateOwn('spoonx:form:metadata', _homefront.Homefront, target, target.name);
    };

    return Metadata;
  }();
});