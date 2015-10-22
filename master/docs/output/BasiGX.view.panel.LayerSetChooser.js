Ext.data.JsonP.BasiGX_view_panel_LayerSetChooser({"tagname":"class","name":"BasiGX.view.panel.LayerSetChooser","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"LayerSetChooser.js","href":"LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser"}],"aliases":{"widget":["basigx-panel-layersetchooser"]},"alternateClassNames":[],"extends":"Ext.panel.Panel","mixins":[],"requires":["BasiGX.view.view.LayerSet"],"uses":[],"members":[{"name":"bbar","tagname":"property","owner":"BasiGX.view.panel.LayerSetChooser","id":"property-bbar","meta":{}},{"name":"bind","tagname":"property","owner":"BasiGX.view.panel.LayerSetChooser","id":"property-bind","meta":{"private":true}},{"name":"cls","tagname":"property","owner":"BasiGX.view.panel.LayerSetChooser","id":"property-cls","meta":{}},{"name":"layerSetUrl","tagname":"property","owner":"BasiGX.view.panel.LayerSetChooser","id":"property-layerSetUrl","meta":{}},{"name":"layout","tagname":"property","owner":"BasiGX.view.panel.LayerSetChooser","id":"property-layout","meta":{}},{"name":"minHeight","tagname":"property","owner":"BasiGX.view.panel.LayerSetChooser","id":"property-minHeight","meta":{}},{"name":"minWidth","tagname":"property","owner":"BasiGX.view.panel.LayerSetChooser","id":"property-minWidth","meta":{}},{"name":"region","tagname":"property","owner":"BasiGX.view.panel.LayerSetChooser","id":"property-region","meta":{}},{"name":"scrollable","tagname":"property","owner":"BasiGX.view.panel.LayerSetChooser","id":"property-scrollable","meta":{}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.panel.LayerSetChooser","id":"property-viewModel","meta":{"private":true}},{"name":"filterLayerSetsByText","tagname":"method","owner":"BasiGX.view.panel.LayerSetChooser","id":"method-filterLayerSetsByText","meta":{}},{"name":"initComponent","tagname":"method","owner":"BasiGX.view.panel.LayerSetChooser","id":"method-initComponent","meta":{}},{"name":"onLayerSetClick","tagname":"method","owner":"BasiGX.view.panel.LayerSetChooser","id":"method-onLayerSetClick","meta":{}},{"name":"onLayerSetDblClick","tagname":"method","owner":"BasiGX.view.panel.LayerSetChooser","id":"method-onLayerSetDblClick","meta":{}},{"name":"onLayerSetSelect","tagname":"method","owner":"BasiGX.view.panel.LayerSetChooser","id":"method-onLayerSetSelect","meta":{}},{"name":"onLayerSetSelectionchange","tagname":"method","owner":"BasiGX.view.panel.LayerSetChooser","id":"method-onLayerSetSelectionchange","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.panel.LayerSetChooser","short_doc":"LayerSetChooser Panel\n\nUsed to show different sets of layers to swap the thematic focus of the\napplication, e.g. ...","component":false,"superclasses":["Ext.panel.Panel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.panel.Panel<div class='subclass '><strong>BasiGX.view.panel.LayerSetChooser</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.view.view.LayerSet' rel='BasiGX.view.view.LayerSet' class='docClass'>BasiGX.view.view.LayerSet</a></div><h4>Files</h4><div class='dependency'><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser' target='_blank'>LayerSetChooser.js</a></div></pre><div class='doc-contents'><p>LayerSetChooser Panel</p>\n\n<p>Used to show different sets of layers to swap the thematic focus of the\napplication, e.g. by changing the visibility of layers.\nThe events fired ('itemclick' and 'itemdblclick') will hand over the\nselected record</p>\n\n<p>Example:\n     {\n            xtype: 'basigx-panel-layersetchooser',\n            layerSetUrl: 'classic/resources/layerset.json',\n            listeners: {\n                itemclick: this.handleLayerSetClick\n            }\n        }</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bbar' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-property-bbar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-property-bbar' class='name expandable'>bbar</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{xtype: 'textfield', name: 'filter', fieldLabel: 'Filter', labelAlign: 'left', labelWidth: 45, flex: 1}]</code></p></div></div></div><div id='property-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-property-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{title: '{title}'}</code></p></div></div></div><div id='property-cls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-property-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-property-cls' class='name expandable'>cls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'img-chooser-dlg'</code></p></div></div></div><div id='property-layerSetUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-property-layerSetUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-property-layerSetUrl' class='name expandable'>layerSetUrl</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-property-layout' class='name expandable'>layout</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'fit'</code></p></div></div></div><div id='property-minHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-property-minHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-property-minHeight' class='name expandable'>minHeight</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>170</code></p></div></div></div><div id='property-minWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-property-minWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-property-minWidth' class='name expandable'>minWidth</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>150</code></p></div></div></div><div id='property-region' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-property-region' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-property-region' class='name expandable'>region</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'center'</code></p></div></div></div><div id='property-scrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-property-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-property-scrollable' class='name expandable'>scrollable</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'y'</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {title: 'Themen Auswahl'}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-filterLayerSetsByText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-method-filterLayerSetsByText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-method-filterLayerSetsByText' class='name expandable'>filterLayerSetsByText</a>( <span class='pre'>textfield, newVal, oldval, listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>textfield</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>newVal</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>oldval</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>listener</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onLayerSetClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-method-onLayerSetClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-method-onLayerSetClick' class='name expandable'>onLayerSetClick</a>( <span class='pre'>view, rec, item, index, evt, opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Just firing an event on the panel. ...</div><div class='long'><p>Just firing an event on the panel.\nListen to the itemclick event to implement custom handling</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rec</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>item</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>evt</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>opts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onLayerSetDblClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-method-onLayerSetDblClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-method-onLayerSetDblClick' class='name expandable'>onLayerSetDblClick</a>( <span class='pre'>view, rec, item, index, evt, opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Just firing an event on the panel. ...</div><div class='long'><p>Just firing an event on the panel.\nListen to the itemdblclick event to implement custom handling</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rec</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>item</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>evt</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>opts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onLayerSetSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-method-onLayerSetSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-method-onLayerSetSelect' class='name expandable'>onLayerSetSelect</a>( <span class='pre'>view, rec, index, opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Just firing an event on the panel. ...</div><div class='long'><p>Just firing an event on the panel.\nListen to the select event to implement custom handling</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rec</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>opts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onLayerSetSelectionchange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.LayerSetChooser'>BasiGX.view.panel.LayerSetChooser</span><br/><a href='source/LayerSetChooser.html#BasiGX-view-panel-LayerSetChooser-method-onLayerSetSelectionchange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.LayerSetChooser-method-onLayerSetSelectionchange' class='name expandable'>onLayerSetSelectionchange</a>( <span class='pre'>view, selected, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Just firing an event on the panel. ...</div><div class='long'><p>Just firing an event on the panel.\nListen to the select event to implement custom handling</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>selected</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});