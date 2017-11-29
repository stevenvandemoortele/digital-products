/** global: Craft */

(function($){

if (typeof Craft.DigitalProducts === 'undefined') {
    Craft.DigitalProducts = {};
}

var elementTypeClass = 'craft\\commerce\\digitalProducts\\elements\\License';

/**
 * Product index class
 */
Craft.DigitalProducts.LicenseIndex = Craft.BaseElementIndex.extend({

    afterInit: function() {
        var href = 'href="'+Craft.getUrl('commerce-digital-products/licenses/new')+'"',
            label = Craft.t('commerce-digital-products', 'New license');

        this.$newProductBtnGroup = $('<div class="btngroup submit"/>');
        this.$newProductBtn = $('<a class="btn submit add icon" '+href+'>'+label+'</a>').appendTo(this.$newProductBtnGroup);

        this.addButton(this.$newProductBtnGroup);

        this.base();
    }
});

// Register it!
try {
    Craft.registerElementIndexClass(elementTypeClass, Craft.DigitalProducts.LicenseIndex);
}
catch(e) {
    // Already registered
}

})(jQuery);
