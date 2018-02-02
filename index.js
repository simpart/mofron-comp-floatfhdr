/**
 * @file FloatHeader.js
 */
let mf = require('mofron');
let Header = require('mofron-comp-header');
let Float = require('mofron-layout-float');

module.exports = class extends Header {
    constructor (po) {
        try {
            super();
            this.name('FloatHdr');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            super.initDomConts(prm);
            let hrz = this.getConfig('layout', 'Horizon'); 
            if (null !== hrz) {
                this.delConfig(hrz);
            }
            this.addLayout(new Float());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
