/* Copyright (c) 2015-present terrestris GmbH & Co. KG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Merge selected features button
 *
 * Merge selected features into the currently selected layer.
 *
 * @class BasiGX.view.button.MergeSelection
 */
Ext.define('BasiGX.view.button.MergeSelection', {
    extend: 'Ext.button.Button',
    xtype: 'basigx-button-mergeselection',

    requires: [
        'Ext.window.Window',
        'Ext.app.ViewModel',
        'BasiGX.view.form.CoordinateTransform',
        'BasiGX.util.Animate'
    ],

    /**
     *
     */
    viewModel: {
        data: {
            tooltip: 'Selektierte Features in diesen Layer übernehmen',
            text: 'Features übernehmen'
        }
    },

    /**
     *
     */
    bind: {
        text: '{text}'
    },

    /**
     *
     */
    config: {
        handler: function() {
            var grid = this.up('window').down('basigx-grid-featuregrid');
            var map = grid.getMap();
            var sourceLayer = BasiGX.util.Layer.getLayerBy(
                'name',
                'planungsradien_vector',
                map.getLayers()
            );

            var targetLayer = grid.getLayer();
            BasiGX.util.Merge.mergeLayers(sourceLayer, targetLayer);
        }
    }
});
