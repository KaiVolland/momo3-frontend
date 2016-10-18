/* Copyright (c) 2016 terrestris GmbH & Co. KG
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
 * RedliningToolsPanelModel
 *
 * The view model for the redlining tools (button texts)
 *
 * @class MoMo.client.view.panel.ShowRedliningToolsPanelModel
 */
Ext.define('MoMo.client.view.panel.RedliningToolsPanelModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.panel.redliningtoolspanel',

    data: {
        drawPointsBtnText: 'Punkt zeichnen',
        drawLinesBtnText: 'Linie zeichnen',
        drawPolygonsBtnText: 'Polygon zeichen',
        drawCirclesBtnText: 'Kreis zeichnen',
        drawRectanglesBtnText: 'Rechteck zeichnen',
        drawTextBtnText: 'Beschriftung einfügen',
        drawPostItBtnText: 'Post-it einfügen',
        copyObjectBtnText: 'Objekt kopieren',
        moveObjectBtnText: 'Objekt verschieben',
        modifyObjectBtnText: 'Objekt modifizieren',
        deleteObjectBtnText: 'Objekt löschen',
        openStyleBtnText: 'Styler',
        postItWindowTitle: 'Text eingeben'
    }
});