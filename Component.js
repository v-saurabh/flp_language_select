sap.ui.define([
	"sap/ui/core/Component",
	"sap/m/Button",
	"sap/m/ActionSheet"
], function(Component, Button, ActionSheet) {

	return Component.extend("com.kpit.FLPPlugins.Component", {

		init: function() {
			var renderer = sap.ushell.Container.getRenderer("fiori2");
			renderer.addHeaderEndItem("sap.m.Button", {
				id: "headerEnd",
				icon: "sap-icon://world",
				type: "Transparent",
				press: this._showLanguageMenu.bind(this)
			}, true, false);
		},

		_showLanguageMenu: function(oEvent) {
			var oButton = oEvent.getSource();
			if (!this._oMenu) {
				this._oMenu = this._createMenu();
			}
			// var oDock = sap.ui.core.Popup.Dock;
			// this._oMenu.open(false, oButton, oDock.BeginTop, oDock.BeginBottom, oButton);
			this._oMenu.openBy(oButton);
		},

		_createMenu: function() {
			var oMenu = new ActionSheet({
				showCancelButton: false,
				buttons: [
					new Button({
						text: "English",
						press: function() {
							window.location.search = "sap-language=EN";
						}
					}),
					new Button({
						text: "German",
						press: function() {
							window.location.search = "sap-language=DE";
						}
					})
				]
			});
			return oMenu;
		}
	});
});