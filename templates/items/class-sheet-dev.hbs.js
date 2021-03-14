// some quick helpers
module.exports = {

    localize: function(lookup) {
        return lookup;
    },
    select: function (value, options) {
        var $el = $('<select />').html(options.fn(this));
        $el.find('[value="' + value + '"]').attr({ 'selected': 'selected' });
        return $el.html();
    }
}