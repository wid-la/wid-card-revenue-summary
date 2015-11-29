'use strict';

(function () {
  Polymer({

    is: 'wid-card-revenue-summary',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior, Polymer.WidCardThemeBehavior],

    properties: {
      /**
       * name
       * @type {String}
       */
      name: {
        type: String
      },

      /**
       * icon
       * @type {String}
       */
      icon: {
        type: String
      },

      /**
       * bgcolor
       * @type {String}
       */
      bgcolor: {
        type: String,
        observer: '_onColorChanged'
      },

      /**
       * goal
       * @type {String}
       */
      goal: {
        type: String
      },

      /**
       * toDate
       * @type {String}
       */
      toDate: {
        type: String
      },

      /**
      * margin
      * @type {String}
      */
      margin: {
        type: String
      }

    },

    _getBackgroundColor: function _getBackgroundColor(bgcolor) {
      return 'background: ' + bgcolor + ';';
    },

    _getColor: function _getColor(bgcolor) {
      return 'color: ' + bgcolor + ';';
    },

    _getToDate: function _getToDate(toDate) {
      return '$' + parseFloat(toDate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    _getGoal: function _getGoal(goal) {
      return '$' + parseFloat(goal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    _getMargin: function _getMargin(margin) {
      return '$' + parseFloat(margin).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    _getPercentage: function _getPercentage(goal, toDate) {
      return (parseFloat(toDate) / parseFloat(goal) * 100).toFixed(1);
    },

    _getPercentageWithSign: function _getPercentageWithSign(goal, toDate) {
      return (parseFloat(toDate) / parseFloat(goal) * 100).toFixed(1) + '%';
    },

    _onColorChanged: function _onColorChanged(bgcolor) {
      this.$.paperProgress.customStyle['--paper-progress-active-color'] = bgcolor;
    },

    _getIconImage: function _getIconImage(icon) {
      return '/images/cards/' + icon;
    }
  });
})();