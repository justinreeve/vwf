this.initialize = function() {
    this.pointerIsDown = false;
    this.touching = false;
    this.previousVisible = undefined;
}

this.toggleVisibilty = function() {

    var viz = this.visible;

    // isVisible will take care of 'inherit', and 
    // trace up through the scene graph to determine
    // if the current state is visible or not
    if ( this.isVisible ) {
        this.visible = this.previousVisible ? this.previousVisible : false;
    } else {
        this.visible = this.previousVisible ? this.previousVisible : true;  
    }

    if ( viz === 'inherit' ) {
        this.previousVisible = 'inherit';
    } else {
        this.previousVisible = undefined;
    } 

}

this.update = function( eventData, nodeData ) {
    if ( this.draggable && ( this.pointerIsDown || this.touching ) ) {
        if ( this.client === this.moniker ) {
            vwf_view.kernel.setProperty( this.id, "position", [ this.x, this.y ] );
        }
    }
}

this.pointerDown = function( eventData, nodeData ) {
    this.pointerIsDown = true;
}

this.pointerMove = function( eventData, nodeData ) {

    this.update( eventData, nodeData );

}

this.pointerUp = function( eventData, nodeData ) {

    this.update( eventData, nodeData );
    
    this.pointerIsDown = false;
}  

this.touchStart = function( eventData, nodeData ) {
    this.touching = true;
}

this.touchMove = function( eventData, nodeData ) {

    this.update( eventData, nodeData );

}

this.touchEnd = function( eventData, nodeData ) {

    this.update( eventData, nodeData );
    
    this.touching = false;
}  //@ sourceURL=kinetic_node.js