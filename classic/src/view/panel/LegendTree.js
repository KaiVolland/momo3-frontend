Ext.define("MoMo.client.view.panel.LegendTree",{
    extend: "BasiGX.view.panel.LegendTree",
    xtype: "momo-panel-legendtree",

    requires: [
        'MoMo.client.plugin.BasicTreeColumnLegends'
    ],

    controller: 'panel.legendtree',

    viewModel: 'panel.legendtree',

    width: 350,

    collapsible: true,

    collapsed: false,

    bind: {
        title: '{title}'
    },

    columns: {
        header: false,
        items: [{
            xtype: 'treecolumn',
            dataIndex: 'text',
            flex: 1
        }]
    },

   /**
    *
    */
    initComponent: function() {
        var me = this;
        var ctrl = me.getController();

        // set the store
        ctrl.setLegendStore();

        // call parent
        me.callParent();

        debugger

        me.setPlugins([{
            ptype: 'rowexpander',
            headerWidth: 0,
            rowBodyTpl: new Ext.XTemplate(
                    '<tpl if="this.isLayer(values)">',
                        '<img src="{[this.getLegend(values)]}" />',
                    '</tpl>',
                    {
                        isLayer: function(values){
                            return !values.isLayerGroup;
                        },
                        getLegend: function(values){
                            console.log(values.get('legendUrl'));
                            if(!values.get('layers')){
                                return values.get('legendUrl');
                            }
                        }
                    }),
            id: 'rowexpanderwithcomponents'
        }]);
    },

    listeners: {
        'itemcontextmenu': 'showLayerContextMenu'
    }
});
